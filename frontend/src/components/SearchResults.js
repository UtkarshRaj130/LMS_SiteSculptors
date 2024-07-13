import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Header from './Header'; // Import Header component
import '../Styles/SearchResults.css'; // Import CSS for SearchResults

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchResults } = location.state || { searchResults: [] };
  const [results, setResults] = useState(searchResults);

  const handleReserve = (book) => {
    const updatedResults = results.map((item) => {
      if (item._id === book._id && item.count > 0) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setResults(updatedResults);

    // Logic to reserve the book (e.g., update database, show confirmation message, etc.)
    console.log(`Book with ID ${book._id} reserved.`);
    alert(`Book with ID ${book._id} reserved.`);
    
    // Navigate to the mybook page with book details
    navigate(`/mybook/${book._id}`, { state: { book } });
  };

  return (
    <div>
      <Header /> {/* Add Header here */}
      <div className="search-results">
        <h2>Search Results</h2>
        {results.length === 0 ? (
          <p>No books found.</p>
        ) : (
          <ul className="book-list">
            {results.map((book) => (
              <li key={book._id} className="book-item">
                <Link
                  to={{
                    pathname: `/book-details/${book._id}`,
                  }}
                  state={book}
                >
                  <div className="book-details">
                    <span className="book-title">{book.title}</span>
                    <br />
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
                  onClick={() => handleReserve(book)}
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
