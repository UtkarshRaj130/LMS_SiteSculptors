import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import BookCard from '../components/BookCard';
import ImgSlide from './ImgSlide';
import Header from './Header';
import About from './About';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('/books');
      setBooks(res.data);
      setFilteredBooks(res.data);
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm, books]);

  return (
    <div>
      <Header/>
      <h1>Books</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredBooks.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
      <ImgSlide/>
      <About/>
    </div>
  );
};

export default Home;

