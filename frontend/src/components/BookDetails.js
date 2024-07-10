import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import '../Styles/BookDetails.css'; // Changed the CSS import to BookDetails.css

function BookDetails() {
    const location = useLocation();
    const { book } = location.state || {};

  if (!book) {
    return (
      <div>
        <Header />
        <div className="book-details-container">
          <h2>Book Details</h2>
          <p>Book not found.</p>
        </div>
      </div>
    );
  }

  const handleReserve = (bookId) => {
    console.log(`Book with ID ${bookId} reserved.`);
    alert(`Book with ID ${bookId} reserved.`);
    // Implement your logic to reserve the book here (e.g., update database)
  };

  return (
    <div>
      <Header />
      <div className="book-details-container">
        <h2>Book Details</h2>
        <div className="book-details">
          <h3>Title: {book.title}</h3>
          <p>Author(s): {book.author}</p>
          <p>Department: {book.department}</p>
          <p>Genre: {book.genre}</p>
          <p>Copies Available: {book.count}</p>
          <button
            className="reserve-button"
            onClick={() => handleReserve(book.publisher_id)}
            disabled={book.copiesAvailable === 0}
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
