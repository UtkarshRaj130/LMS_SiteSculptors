import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Header.css';
import logo from './images/image.png';
import { FaSearch, FaBars } from 'react-icons/fa';
import axios from './axiosInstance';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"; // Correct import statement
import { AuthContext } from '../context/AuthContext'; // Correct import path for AuthContext

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(AuthContext); // Use AuthContext
  const navigate = useNavigate();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 740);
    };
  
    window.addEventListener('resize', handleResize);
  
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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

  const handleLogout = () => {
    googleLogout();
    setIsAuthenticated(false);
    setUser(null);
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
            placeholder={isMobile ? 'Search' : 'Search by Title / Author / Department / Genre'}
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
            {isAuthenticated ? (
              <>
                <span className="hi-username">Hi, {user.given_name/* .charAt(0).toUpperCase() + user.given_name.slice(1).toLowerCase() */}</span>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  const decoded = jwtDecode(credentialResponse.credential);
                  setUser(decoded);
                  setIsAuthenticated(true);

                  // Register or find the user in the backend
                  try {
                    await axios.post('/users/register', {
                      name: decoded.name,
                      email: decoded.email,
                    });
                  } catch (error) {
                    console.error('Error registering user:', error);
                  }
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
