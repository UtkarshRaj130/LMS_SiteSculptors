import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header'; // Import Header component
import '../Styles/SearchResults.css'; // Import CSS for SearchResults

function SearchResults() {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };

  const handleReserve = (bookId) => {
    // Logic to reserve the book (e.g., update database, show confirmation message, etc.)
    console.log(`Book with ID ${bookId} reserved.`);
    alert(`Book with ID ${bookId} reserved.`);
  };

  return (
    <div>
      <Header /> {/* Add Header here */}
      <div className="search-results">
        <h2>Search Results</h2>
        {searchResults.length === 0 ? (
          <p>No books found.</p>
        ) : (
          <ul className="book-list">
            {/* {                   console.log(searchResults)} */}
            {searchResults.map((book) => (
             
                <li key={book.id} className="book-item">
                   {/* {console.log(book)} */}
                  <Link
                    to={{
                      pathname: `/book-details/${book._id}`,
                    }}
                    state = { book }
                  >
                    
                    <div className="book-details">
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