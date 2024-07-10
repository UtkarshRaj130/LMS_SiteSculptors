import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header';
import '../Styles/SearchResults.css';

function SearchResults() {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };

  return (
    <div>
      <Header />
      <div className="search-results">
        <h2>Search Results</h2>
        {searchResults.length === 0 ? (
          <p>No books found.</p>
        ) : (
          <ul className="book-list">
            {searchResults.map((book) => (
              <li key={book.id} className="book-item">
                <Link
                  to={{
                    pathname: `/book-details/${book.id}`,
                    state: { book } // Pass the entire book object as state
                  }}
                >
                  <div className="book-details">
                    <span className="book-title">{book.title}</span>
                    <br />
                    <span className="book-author">Author(s): {book.author}</span>
                    <br />
                    <div className="book-info">
                      <span className="book-department">Department: {book.department}</span>
                      <span className="separator">|</span>
                      <span className="book-genre">Genre: {book.genre}</span>
                      <span className="separator">|</span>
                      <span className="book-copies">Copies Available: {book.count}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
