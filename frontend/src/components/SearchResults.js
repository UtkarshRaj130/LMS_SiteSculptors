import React from 'react';
import { useLocation } from 'react-router-dom';
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
            {searchResults.map((book) => (
              <li key={book.id} className="book-item">
                <div className="book-details">
                  <span className="book-title">{book.title}</span> <br></br> <span className="book-author">{book.author}</span>
                  <div>Copies Available: {book.count}</div>
                </div>
                <button 
                  className="reserve-button" 
                  onClick={() => handleReserve(book.publisher_id)} 
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
