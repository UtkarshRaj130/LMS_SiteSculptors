import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import '../Styles/BookDetails.css'; // Changed the CSS import to BookDetails.css

function BookDetails() {
    const location = useLocation();
    const book  = location.state || {};
    console.log(location.state);

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
                    <div className="detail-row"><span className="detail-label">Title:</span> {<b>{book.title}</b>}</div>
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
                        onClick={() => handleReserve(book._id)}
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
