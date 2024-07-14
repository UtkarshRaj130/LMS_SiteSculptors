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
                const response = await axios.post('/users/reserve', {
                    email: user.email,
                    theBook: theBook,
                });
                console.log(response); // Debugging output
                if (response.status === 201) {
                    alert(`Book with ID ${theBook._id} reserved.`);
                } else {
                    alert(`You have already reserved a copy of ${theBook._id}`);
                }
            } catch (error) {
                console.error(error);
                alert('Error reserving book: ' + error.response.data.message);
            }
        } else {
            alert('Login first to Reserve a Book!');
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
