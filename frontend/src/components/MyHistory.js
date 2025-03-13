import React from 'react';
import Header from './Header'; // Import Header component
import '../Styles/MyHistory.css'; // Import CSS for MyHistory

const sampleBorrowedBooks = [
    {
        id: 1,
        title: 'Book Title 1',
        author: 'Author 1',
        borrowDate: '2023-06-01',
        returnDate: '2023-06-16'
    },
    {
        id: 2,
        title: 'Book Title 2',
        author: 'Author 2',
        borrowDate: '2023-06-01',
        returnDate: '2023-06-20'
    },
    {
        id: 3,
        title: 'Book Title 3',
        author: 'Author 3',
        borrowDate: '2023-06-01',
        returnDate: '2023-07-01'
    },
    {
        id: 4,
        title: 'Book Title 4',
        author: 'Author 4',
        borrowDate: '2023-06-01',
        returnDate: '2023-06-10'
    }
    // Add more sample books as needed
];

const getDaysLate = (borrowDate, returnDate) => {
    const borrow = new Date(borrowDate);
    const returnD = new Date(returnDate);
    const diffTime = Math.abs(returnD - borrow);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 15 ? diffDays - 15 : 0;
};

function MyHistory() {
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
                            const daysLate = getDaysLate(book.borrowDate, book.returnDate);
                            return (
                                <div key={book.id} className={`history-card ${daysLate > 0 ? 'late-return' : ''}`}>
                                    <div className="history-card-header">
                                        <h3 className="book-title-myHistory">{book.title}</h3>
                                    </div>
                                    <div className="history-card-body">
                                        <p><strong>Author(s):</strong> {book.author}</p>
                                        <p><strong>Borrowed On:</strong> {book.borrowDate}</p>
                                        <p>
                                            <strong>Returned On:</strong> {book.returnDate} {daysLate > 0 && (
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
