import React from 'react';

const BookCard = ({ book }) => (
  <div>
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <p>{book.description}</p>
  </div>
);

export default BookCard;
