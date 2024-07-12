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