import React, { useEffect, useState, useContext } from 'react';
import axios from '../components/axiosInstance';
import '../Styles/MyBooks.css'; // Import CSS for MyBooks
import { AuthContext } from '../context/AuthContext';

const getDueInClass = (dueIn) => {
  if (dueIn < 0) return 'overdue';
  if (dueIn === 0) return 'due-today';
  if (dueIn === 1 || dueIn === 2) return 'due-soon';
  return '';
};

const getDueInText = (dueIn) => {
  if (dueIn < 0) return `${Math.abs(dueIn)} days ago`;
  if (dueIn === 0) return 'Today';
  if (dueIn === 1) return 'Tomorrow';
  if (dueIn === 2) return `In ${dueIn} days`;
  return `In ${dueIn} days`;
};

const calculateDueIn = (dueDate) => {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);
  const timeDiff = dueDateObj - currentDate;
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysDiff;
};

function MyBooks() {
  const [reservedBooks, setReservedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, user } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      setLoading(false);
      return;
    }

    const fetchReservedBooks = async () => {
      try {
        const email = user.email;
        console.log(`Requesting reserved books for email: ${email}`);
        const response = await axios.get(`/users/reservedBooks?email=${email}`);
        console.log('Reserved books response:', response.data);
        const booksWithDueIn = response.data.map(book => ({
          ...book,
          dueIn: calculateDueIn(book.dueDate)
        }));
        setReservedBooks(booksWithDueIn);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reserved books:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchReservedBooks();
  }, [user, isAuthenticated]);

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching books: {error.message}</p>;

  if (!isAuthenticated) {
    return <p className="not-logged-in">Please log in to view your reserved books.</p>;
  }

  const sortedReservedBooks = reservedBooks.sort((a, b) => a.dueIn - b.dueIn);

  return (
    <div>
      <div className="my-books">
        <h2 className='my-reserved-books'>My Reserved Books</h2>
        {sortedReservedBooks.length === 0 ? (
          <p className='no-books-reserved'>No books reserved.</p>
        ) : (
          <div className="book-card-container">
            {sortedReservedBooks.map((book) => (
              <div key={book._id} className={`book-card ${getDueInClass(book.dueIn)}`}>
                <div className="book-card-header">
                  <h3 className="book-title-myBooks">{book.title}</h3>
                </div>
                <div className="book-card-body">
                  <p><strong>Due:</strong> <span className={getDueInClass(book.dueIn)}>{getDueInText(book.dueIn)}</span></p>
                  <p><strong>Due Date:</strong> {book.dueDate}</p>
                  <p><strong>Reserved on:</strong> {book.reservingDate} {book.reservingTime}</p>
                  <p><strong>Author(s):</strong> {book.author}</p>
                  <p><strong>Department:</strong> {book.department}</p>
                  <p><strong>Genre:</strong> {book.genre}</p>
                  <p><strong>Vendor:</strong> {book.vendor}</p>
                  <p><strong>Vendor ID:</strong> {book.vendor_id}</p>
                  <p><strong>Publisher:</strong> {book.publisher}</p>
                  <p><strong>Publisher ID:</strong> {book.publisher_id}</p>
                  <p><strong>Description:</strong> {book.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBooks;
