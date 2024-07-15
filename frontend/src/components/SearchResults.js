import React, { useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header'; // Import Header component
import '../Styles/SearchResults.css'; // Import CSS for SearchResults
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import axios from '../components/axiosInstance'; // Update import path

function SearchResults() {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };

  const [selectedDepartment, setSelectedDepartment] = useState(''); // Add state for selected department

  const { isAuthenticated, user } = useContext(AuthContext); // Use AuthContext

  const HandleReserve = async (theBook) => {
    if (isAuthenticated) {
      const userConfirmed = window.confirm(`Are you sure you want to Reserve the book: ${theBook.title}`);
      if (userConfirmed) {
        // User clicked "OK"
        try {
          const response = await axios.post('/users/reserve', {
            email: user.email,
            theBook: theBook,
          });
          console.log(response); // Debugging output
          if (response.status === 201) {
            alert(`Book : ${theBook.title} with Publisher ID ${theBook.publisher_id} reserved.`);
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
      alert('Login first to Reserve a Book!');
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
