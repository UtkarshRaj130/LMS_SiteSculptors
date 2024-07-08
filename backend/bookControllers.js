import Book from './Book.js';

// Create a new book
const createBook = async (req, res) => {
  const { title, author, genre } = req.body;

  const book = new Book({
    title,
    author,
    genre,
  });

  const createdBook = await book.save();
  res.status(201).json(createdBook);
};

// Get all books
const getBooks = async (req, res) => {
  const books = await Book.find({});
  res.json(books);
};

// Update an existing book
const updateBook = async (req, res) => {
  const { title, author, genre, borrowed } = req.body;

  const book = await Book.findById(req.params.id);

  if (book) {
    book.title = title;
    book.author = author;
    book.genre = genre;
    book.borrowed = borrowed;

    const updatedBook = await book.save();
    res.json(updatedBook);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    await book.remove();
    res.json({ message: 'Book removed' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// Search for books
const searchBooks = async (req, res) => {
  try {
    const query = req.query.query;
    const books = await Book.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { author: { $regex: query, $options: 'i' } },
        { genre: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createBook, getBooks, updateBook, deleteBook, searchBooks };

