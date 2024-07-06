import Book from './Book.js';

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search for books
const searchBooks = async (req, res) => {
  const { query } = req.query;
  try {
    const books = await Book.find({ $text: { $search: query } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update book availability
const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (book) {
      book.available = !book.available;
      await book.save();
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getBooks,
  searchBooks,
  updateBook,
};
