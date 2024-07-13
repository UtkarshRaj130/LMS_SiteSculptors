import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import Book from '../models/Book.js';

const router = express.Router();

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
        const { email, bookId } = req.body; // Ensure bookId is correctly extracted

        try {
            const user = await User.findOne({ email });
            const book = await Book.findById(bookId);

            if (!user || !book) {
                return res.status(404).json({ message: 'User or Book not found' });
            }

            if (book.count === 0) {
                return res.status(400).json({ message: 'No copies available' });
            }

            if (!user.reservedBooks.includes(bookId)) {
                user.reservedBooks.push(bookId);
                book.count -= 1;
                await user.save();
                await book.save();
            }

            res.status(200).json({ message: 'Book reserved successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    })
);

export default router;