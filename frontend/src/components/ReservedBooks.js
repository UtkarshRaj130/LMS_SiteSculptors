import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../Styles/ReservedBooks.css';

const ReservedBooks = () => {
  const [reservedBooks, setReservedBooks] = useState([]);

  useEffect(() => {
    const fetchReservedBooks = async () => {
      const response = await fetch('/api/books/reserved', {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      });
      const data = await response.json();
      setReservedBooks(data);
    };

    fetchReservedBooks();
  }, []);

  return (
    <div>
      <Header />
      <div className="reserved-books-container">
        <h2>Reserved Books</h2>
        {reservedBooks.length === 0 ? (
          <p>No reserved books.</p>
        ) : (
          <ul className="reserved-books-list">
            {reservedBooks.map((book) => (
              <li key={book._id} className="reserved-book-item">
                <p>{book.title}</p>
                <p>{book.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReservedBooks;
