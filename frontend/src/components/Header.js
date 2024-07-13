import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Header.css';
import logo from './images/image.png';
import { FaSearch, FaBars } from 'react-icons/fa';
import axios from './axiosInstance';

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('/books');
        setBooks(res.data);
        setFilteredBooks(res.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  const closeMenu = () => {
    setMenuToggle(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = books.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );

    navigate('/search-results', { state: { searchResults: filteredResults } });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="header">
      <div className="logo-nav-new">
        <div className="logo">
          <a href="https://iitdh.ac.in"><img src={logo} alt='iitdh logo' /></a>
        </div>
        <Link to="/" onClick={closeMenu}>
          <h1>LIBRARY</h1>
        </Link>
      </div>
      <div className='nav-right'>
        <div className='search' onSubmit={handleSearch}>
          <input
            className='search-input'
            type='text'
            placeholder='Search by Book / Author / Department / Genre'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" onClick={handleSearch}><FaSearch id='search-icon' /></button>
        </div>
        <div className="mobile-menu" onClick={() => setMenuToggle(!menuToggle)}>
          <FaBars className="menu-icon" />
        </div>
        <ul className={menuToggle ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={() => { closeMenu() }}>
            <Link to='/my-books'>
              My Books
            </Link>
          </li>
          <li className="option" onClick={() => { closeMenu() }}>
            <Link to='/my-history'>
              My History
            </Link>
          </li>
          <li className="option" onClick={() => { closeMenu() }}>
            <Link to='/student-login'>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;