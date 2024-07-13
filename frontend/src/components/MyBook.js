import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from './Header';
import '../Styles/MyBook.css';
const MyBook = () => {
  const { bookId } = useParams();
  const location = useLocation();
  const { book } = location.state || { book: {} };

  return (
    <div>
        <Header />
        <div className="mybook-container">
      <h1>Reserved Book</h1>
      <p>Book ID: {bookId}</p>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Department: {book.department}</p>
      <p>Genre: {book.genre}</p>
    </div>
    </div>
  );
};

export default MyBook;
