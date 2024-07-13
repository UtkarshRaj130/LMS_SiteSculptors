import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Header.css';
import logo from './images/image.png';
import { FaSearch } from 'react-icons/fa';
import axios from './axiosInstance';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Header() {
    const [menutoggle, setMenutoggle] = useState(false);
    const [books, setBooks] = useState([]);
    const [searchQuery, setsearchQuery] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
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
        setMenutoggle(false);
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
                    <a href="https://iitdh.ac.in"><img src={logo} alt='iitdh logo'></img></a>
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
                        onChange={(e) => setsearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button type="button" onClick={handleSearch}><FaSearch id='search-icon' /></button>
                </div>
                <ul className={menutoggle ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMenu}>
                        <Link to='/books'>
                            <a href="#books">My Books</a>
                        </Link>
                    </li>
                    <li className="option" onClick={closeMenu}>
                        {isAuthenticated ? (
                            <>
                                <span class="username">Hi, {user.given_name}</span>
                                <button class="log-out" onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    const decoded = jwtDecode(credentialResponse.credential);
                                    setUser(decoded);
                                    setIsAuthenticated(true);
                                    console.log(decoded);
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
