// frontend/src/components/SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await axios.get(`/api/books/search`, { params: { query } });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
        />
        <button type="submit" >Search</button>
      </form>
      <div>
        {results.length > 0 && (
          <ul>
            {results.map((book) => (
              <li key={book._id}>
                {book.title} by {book.author}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
