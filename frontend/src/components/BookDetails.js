import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import '../Styles/BookDetails.css';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import axios from '../components/axiosInstance'; // Update import path

function BookDetails() {
    const location = useLocation();
    const book = location.state || {};

    const { isAuthenticated, user } = useContext(AuthContext); // Use AuthContext
    const HandleReserve = async (theBook) => {
        if (isAuthenticated) {
          try {
            const response = await axios.get(`/users/reservedBooksCount?email=${user.email}`);
            if (response.data.count >= 4) {
              alert('You can only reserve up to 4 books at a time.');
              return;
            }
          } catch (error) {
            console.error('Error checking reserved book count:', error);
            alert('Error checking reserved book count.');
            return;
          }

          const userConfirmed = window.confirm(`Are you sure you want to reserve the book: ${theBook.title}`);
          if (userConfirmed) {
            // User clicked "OK"
            try {
              const response = await axios.post('/users/reserve', {
                email: user.email,
                theBook: theBook,
              });
              console.log(response); // Debugging output
              if (response.status === 201) {
                alert(`Book: ${theBook.title} with Publisher ID ${theBook.publisher_id} reserved.`);
              } else {
                alert(`You already have a reserved copy of ${theBook.title}`);
              }
            } catch (error) {
              console.error(error);
              const errorMessage = error.response?.data?.message || 'Error reserving book';
              alert(`Error reserving book: ${errorMessage}`);
            }
            console.log("User confirmed!");
          }
          else {
            // User clicked "Cancel"
            console.log("User canceled.");
          }
        }
        else {
          alert('Login first to reserve a book!');
        }
      };

    if (!book) {
        return (
            <div>
                <Header />
                <div className="book-details-container">
                    <div style={{ fontSize: '1.5em', marginBottom: '15px' }}>
                        <strong>Book Details</strong>
                    </div>
                    <p>Book not found.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="book-details-container">
                <div style={{ fontSize: '1.5em', marginBottom: '15px' }}>
                    <strong>Book Details</strong>
                </div>
                <div className="book-details">
                    <div className="detail-row"><span className="detail-label">Title:</span> {<b style={{ color: '#6c1b85ff', fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>{book.title}</b>}</div>
                    <div className="detail-row"><span className="detail-label">Author(s):</span> {book.author}</div>
                    <div className="detail-row"><span className="detail-label">Department:</span> {book.department}</div>
                    <div className="detail-row"><span className="detail-label">Genre:</span> {book.genre}</div>
                    <div className="detail-row"><span className="detail-label">Copies Available:</span> {book.count}</div>
                    <div className="detail-row"><span className="detail-label">Book ID:</span> {book._id}</div>
                    <div className="detail-row"><span className="detail-label">Vendor:</span> {book.vendor}</div>
                    <div className="detail-row"><span className="detail-label">Vendor ID:</span> {book.vendor_id}</div>
                    <div className="detail-row"><span className="detail-label">Publisher:</span> {book.publisher}</div>
                    <div className="detail-row"><span className="detail-label">Publisher ID:</span> {book.publisher_id}</div>
                    <div className="detail-row"><span className="detail-label">Description:</span> {book.description}</div>

                    <button
                        className="reserve-button"
                        onClick={() => HandleReserve(book)} // Ensure bookId is correctly passed
                        disabled={book.count === 0}
                    >
                        Reserve
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;

