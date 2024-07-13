/*import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

export const getAllBooks = (req, res) => {
  fs.readFile(path.join(__dirname, 'UpdatedDatasetSOI.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    const books = JSON.parse(data);
    res.json(books);
  });
};

export const addBook = (req, res) => {
  const { title, description, author, genre, department, count, vendor, vendor_id, publisher, publisher_id } = req.body;
  
  fs.readFile(path.join(__dirname, 'UpdatedDatasetSOI.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    
    const books = JSON.parse(data);
    const newBook = {
      id,
      title,
      description,
      author,
      genre,
      department,
      count,
      vendor,
      vendor_id,
      publisher,
      publisher_id
    };
    
    books.push(newBook);

    fs.writeFile(path.join(__dirname, 'UpdatedDatasetSOI.json'), JSON.stringify(books, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Server error' });
      }
      res.status(201).json(newBook);
    });
  });
};*/
import Book from '../models/Book.js';

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const addBook = async (req, res) => {
  const { title, description, author, genre,department,count,vendor,vendor_id,publisher,publisher_id } = req.body;

  try {
    const book = new Book({
      title,
      description,
      author,
      genre,
      department,
      count,
      vendor,
      vendor_id,
      publisher,
      publisher_id,
    });

    await book.save();
    res.status(201).json({ message: 'Book added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
<<<<<<< Updated upstream

=======
export const reserveBook = async (req, res) => {
  const { bookId } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const book = await Book.findById(bookId);

    if (book.count > 0) {
      user.reservedBooks.push(bookId);
      book.count -= 1;
      await user.save();
      await book.save();
      res.status(200).json({ message: 'Book reserved successfully' });
    } else {
      res.status(400).json({ message: 'No copies available' });
    }
  } catch (error) {
    console.error('Error reserving book:', error);
    res.status(500).send('Failed to reserve book');
  }
};

// Get user's reserved books
export const getReservedBooks = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('reservedBooks');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user.reservedBooks);
  } catch (error) {
    console.error('Error fetching reserved books:', error);
    res.status(500).send('Failed to fetch reserved books');
  }
};
>>>>>>> Stashed changes
