import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from './axiosInstance';
import BookCard from './BookCard';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchResults = async () => {
    try{
      if (query) {
        const res = await axios.get(`/api/books/search`, { params: { query } });
        setResults(res.data);
      }
    }catch (error) {
        console.error('Error fetching books', error);
    }
    };

    fetchResults();
  }, [query]);

  return (
    <div>
      <h1>Search Results</h1>
      <div>
        {results.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
