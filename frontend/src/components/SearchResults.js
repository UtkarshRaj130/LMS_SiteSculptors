import React, { useState, useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header'; // Import Header component
import '../Styles/SearchResults.css'; // Import CSS for SearchResults
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import axios from '../components/axiosInstance'; // Update import path

function SearchResults() {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };
  const [reservedBookCount, setReservedBookCount] = useState(0); // State to track reserved book count
  const [selectedDepartment, setSelectedDepartment] = useState(''); // State for selected department

  const { isAuthenticated, user } = useContext(AuthContext); // Use AuthContext

  useEffect(() => {
    const fetchReservedBookCount = async () => {
      if (isAuthenticated && user) {
        try {
          const response = await axios.get(`/users/reservedBooksCount?email=${user.email}`);
          setReservedBookCount(response.data.count);
        } catch (error) {
          console.error('Error fetching reserved book count:', error);
        }
      }
    };

    fetchReservedBookCount();
  }, [isAuthenticated, user]);

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
        try {
          const response = await axios.post('/users/reserve', {
            email: user.email,
            theBook: theBook,
          });
          if (response.status === 201) {
            alert(`Book: ${theBook.title} with Publisher ID ${theBook.publisher_id} reserved.`);
            setReservedBookCount(reservedBookCount + 1); // Increment the reserved book count
          } else {
            alert(`You already have a reserved copy of ${theBook.title}`);
          }
        } catch (error) {
          console.error(error);
          const errorMessage = error.response?.data?.message || 'Error reserving book';
          alert(`Error reserving book: ${errorMessage}`);
        }
      }
    } else {
      alert('Login first to reserve a book!');
    }
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const filteredSearchResults = searchResults.filter((book) => {
    if (selectedDepartment === '') {
      return true; // Show all books if no department is selected
    }
    return book.department === selectedDepartment;
  });

  return (
    <div>
      <Header /> {/* Add Header here */}
      <div className="search-results">
        <h2>Search Results</h2>

        <div className="filter-container">
          <label>Filter by Department:</label>
          <select value={selectedDepartment} onChange={handleDepartmentChange}>
            <option value="">All Departments</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Computer Science">Computer Engineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Engineering Physics">Engineering Physics</option>
          </select>
        </div>

        {filteredSearchResults.length === 0 ? (
          <p>No books found.</p>
        ) : (
          <ul className="book-list">
            {filteredSearchResults.map((book) => (
              <li key={book.id} className="book-item">
                <Link
                  to={{
                    pathname: `/book-details/${book._id}`,
                  }}
                  state={book}
                >
                  <div className="book-details-searchRes">
                    <span className="book-title">{book.title}</span>
                    <br></br>
                    <span className="book-author">{book.author}</span>
                    <div className="book-info">
                      <span className="book-department">Department: {book.department}</span>
                      <span className="separator">|</span>
                      <span className="book-genre">Genre: {book.genre}</span>
                      <span className="separator">|</span>
                      <span className="book-copies">Copies Available: {book.count}</span>
                    </div>
                  </div>
                </Link>
                <button
                  className="reserve-button-search"
                  onClick={() => HandleReserve(book)}
                  disabled={book.count === 0}
                >
                  Reserve
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
