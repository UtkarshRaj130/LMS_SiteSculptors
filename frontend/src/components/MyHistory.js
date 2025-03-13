import React, { useEffect, useState, useContext } from 'react';
import axios from '../services/axios';
import Header from './Header'; // Import Header component
import '../Styles/MyHistory.css'; // Import CSS for MyHistory
import { AuthContext } from '../context/AuthContext';


const getDaysLate = (reservingDate, returningDate) => {
    const borrow = new Date(reservingDate);
    const returnD = new Date(returningDate);
    const diffTime = Math.abs(returnD - borrow);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 15 ? diffDays - 15 : 0;
};

function MyHistory() {
    const [returnedBooks, setReturnedBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { isAuthenticated, user } = useContext(AuthContext);

    useEffect(() => {
        if (!isAuthenticated || !user) {
            setLoading(false);
            return;
        }

        const fetchReturnedBooks = async () => {
            try {
                const email=user.email; 
                console.log(`Requesting returned books for email: ${email}`);
                const response = await axios.get(`/users/returnedBooks?email=${email}`);
                console.log('Returned books response:', response.data);
                const booksReturned=response.data.map(book => ({
                    ...book,
                    daysLate: getDaysLate(book.reservingDate, book.returningDate)
                }));
                setReturnedBooks(booksReturned);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching returned books:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchReturnedBooks();
    }, [user,isAuthenticated]);
    if(error) return <p>Error fetching returned books: {error.message}</p>;
    
    if(!isAuthenticated) return <p className='not-logged-in'>Please log in to view your borrowing history.</p>;  
    const sampleBorrowedBooks = returnedBooks.sort((a, b) => new Date(b.returningDate) - new Date(a.returningDate));
    
    return (
        <div>
            <Header /> {/* Add Header here */}
            <div className="my-history">
                <h2>My Borrowing History</h2>
                {sampleBorrowedBooks.length === 0 ? (
                    <p>No borrowing history.</p>
                ) : (
                    <div className="history-card-container">
                        {sampleBorrowedBooks.map((book) => {
                            const daysLate = getDaysLate(book.reservingDate, book.returningDate);
                            return (
                                <div key={book._id} className={`history-card ${daysLate > 0 ? 'late-return' : ''}`}>
                                    <div className="history-card-header">
                                        <h3 className="book-title-myHistory">{book.title}</h3>
                                    </div>
                                    <div className="history-card-body">
                                        <p><strong>Author(s):</strong> {book.author}</p>
                                        <p><strong>Borrowed On:</strong> {book.reservingDate}</p>
                                        <p>
                                            <strong>Returned On:</strong> {book.returningDate} {daysLate > 0 && (
                                                <span className="late-text">({daysLate} days late)</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyHistory;
