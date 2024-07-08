import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

export const getAllBooks = (req, res) => {
  fs.readFile(path.join(__dirname, 'backend', 'books.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    const books = JSON.parse(data);
    res.json(books);
  });
};

export const addBook = (req, res) => {
  const { title, author, description } = req.body;
  fs.readFile(path.join(__dirname, 'backend', 'books.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    const books = JSON.parse(data);
    const newBook = {
      id: books.length ? books[books.length - 1].id + 1 : 1,
      title,
      author,
      description,
    };
    books.push(newBook);

    fs.writeFile(path.join(__dirname, 'backend', 'books.json'), JSON.stringify(books, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Server error' });
      }
      res.status(201).json(newBook);
    });
  });
};
