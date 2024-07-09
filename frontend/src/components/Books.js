import React, { useEffect, useState } from 'react';
import axios from './axiosInstance';
import BookCard from './BookCard';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
    try{
      const res = await axios.get('/books');
      setBooks(res.data);
    }catch (error) {
        console.error('Error fetching books', error);
    }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>All Books</h1>
      <div>
        {books.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
