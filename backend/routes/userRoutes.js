import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import Book from '../models/Book.js';

const router = express.Router();

// Function to format date as YYYY-MM-DD
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Register or find a user
router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const { name, email } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ name, email, reservedBooks: [], returnedBooks: [] });
      await user.save();
      res.status(201).json({ message: 'User registered successfully', user });
    } else {
      res.status(200).json({ message: 'User already exists', user });
    }
  })
);

// Reserve a book
router.post(
  '/reserve',
  asyncHandler(async (req, res) => {
    const { email, theBook } = req.body;

    try {
      const user = await User.findOne({ email });
      const book = await Book.findById(theBook._id);

      if (!user || !book) {
        return res.status(404).json({ message: 'User or Book not found' });
      }

      if (book.count === 0) {
        return res.status(400).json({ message: 'No copies available' });
      }

      // Check if the book is already reserved by the user
      const isBookReserved = user.reservedBooks.some(
        reservedBook => reservedBook._id.equals(book._id)
      );

      if (!isBookReserved) {
        const now = new Date();
        const reservingTime = now.toTimeString().split(' ')[0]; // Get HH:MM:SS
        const reservingDate = formatDate(now); // Format date as YYYY-MM-DD
        const dueDate = formatDate(new Date(now.getTime() + 20 * 24 * 60 * 60 * 1000)); // 20 days ahead

        const bookWithTimestamps = {
          ...book.toObject(),
          reservingTime,
          reservingDate,
          dueDate,
        };

        user.reservedBooks.push(bookWithTimestamps);
        book.count -= 1;
        await user.save();
        await book.save();
        res.status(201).json({ message: 'Book reserved successfully' });
      } else {
        res.status(200).json({ message: 'You have already reserved a copy of that book' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  })
);

// Endpoint to get the count of reserved books for a user
router.get(
  '/reservedBooksCount',
  asyncHandler(async (req, res) => {
    const { email } = req.query;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ count: user.reservedBooks.length });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching reserved books count' });
    }
  })
);

router.get(
  '/reservedBooks',
  asyncHandler(async (req, res) => {
    const { email } = req.query;
    console.log(`Fetching reserved books for email: ${email}`);
    const user = await User.findOne({ email });
    if (!user) {
      console.error('User not found');
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user.reservedBooks);
      console.log('Reserved books fetched successfully:', user.reservedBooks);
    }
  })
);

export default router;
