import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import '../Styles/BookDetails.css';

function BookDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookFromLocation = location.state || {};
  const [book, setBook] = useState(bookFromLocation);
  const [canReserve, setCanReserve] = useState(true);
  console.log(location.state);

  useEffect(() => {
    // Fetch the number of books the user has already reserved
    const fetchReservedBooks = async () => {
      try {
        const response = await fetch('/api/books/reserved', {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        });
        const reservedBooks = await response.json();
        if (reservedBooks.length >= 2) {
          setCanReserve(false);
        }
      } catch (error) {
        console.error('Error fetching reserved books:', error);
      }
    };

    fetchReservedBooks();
  }, []);

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

  const handleReserve = async (book) => {
    if (book.count > 0 && canReserve) {
      try {
        const response = await fetch('/api/books/reserve', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          },
          body: JSON.stringify({ bookId: book._id })
        });

        if (response.ok) {
          setBook({ ...book, count: book.count - 1 });
          alert(`Book with ID ${book._id} reserved.`);
        } else {
          console.error('Failed to reserve the book');
          alert('Failed to reserve the book');
        }
      } catch (error) {
        console.error('Error reserving the book:', error);
        alert('Error reserving the book');
      }
    } else {
      alert('You have already reserved 2 books or no copies available.');
    }
  };

  return (
    <div>
      <Header />
      <div className="book-details-container">
        <h2>Book Details</h2>
        <div className="book-details">
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Department:</strong> {book.department}</p>
          <p><strong>Count:</strong> {book.count}</p>
          <p><strong>Vendor:</strong> {book.vendor}</p>
          <p><strong>Vendor ID:</strong> {book.vendor_id}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>Publisher ID:</strong> {book.publisher_id}</p>
          <button onClick={() => handleReserve(book)}>Reserve</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
