import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../Styles/BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/api/books');
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <Header />
      <div className="book-list-container">
        <h2>Book List</h2>
        {books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          <ul className="book-list">
            {books.map((book) => (
              <li key={book._id} className="book-item">
                <Link
                  to={{
                    pathname: `/book/${book._id}`,
                    state: { book }
                  }}
                >
                  {book.title}
                </Link>
                <p>{book.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookList;
