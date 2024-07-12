import React,{useState} from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header'; // Import Header component
import '../Styles/SearchResults.css'; // Import CSS for SearchResults

function SearchResults() {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };

  const [selectedDepartment, setSelectedDepartment] = useState(''); // Add state for selected department

  const handleReserve = (bookId) => {
    // Logic to reserve the book (e.g., update database, show confirmation message, etc.)
    console.log(`Book with ID ${bookId} reserved.`);
    alert(`Book with ID ${bookId} reserved.`);
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
        {/* {searchResults.length === 0 ? (
          <p>No books found.</p>
        ) : (
          <ul className="book-list">
            {searchResults.map((book) => (
             
                <li key={book.id} className="book-item">
                  <Link
                    to={{
                      pathname: `/book-details/${book._id}`,
                    }}
                    state = { book }
                  > */}

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
                      <br></br> <span className="book-author">{book.author}</span>
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
                    onClick={() => handleReserve(book._id)}
                    disabled={book.copiesAvailable === 0}
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