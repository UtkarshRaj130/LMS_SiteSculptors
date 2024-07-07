// SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header'; // Import Header component
import '../Styles/SearchResults.css'; // Import CSS for SearchResults

function SearchResults() {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };

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
                <span className="book-title">{book.title}</span> by <span className="book-author">{book.author}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
