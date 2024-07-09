import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Header.css';
import logo from './image.png';

function Header() {
    const [menutoggle, setMenutoggle] = useState(false);
    const [searchQuery, setsearchQuery] = useState('');
    const navigate = useNavigate(); // Added navigate function

    const Toggle = () => {
        setMenutoggle(!menutoggle);
    };

    const closeMenu = () => {
        setMenutoggle(false);
    };

    // Dummy search results data
    const dummyData = [
        { id: 1, title: 'Book One', author: 'Author A', copiesAvailable: 3 },
        { id: 2, title: 'Book Two', author: 'Author B', copiesAvailable: 5 },
        { id: 3, title: 'Book Three', author: 'Author C', copiesAvailable: 0 },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        // Filter dummy data based on the search query (title or author)
        const filteredResults = dummyData.filter(book =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Navigate to the SearchResults page with the search results as state
        navigate('/search-results', { state: { searchResults: filteredResults } });
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
                {/* <form className='search'> */}
                <div className='search' onSubmit={handleSearch} >
                    <input
                        className='search-input'
                        type='text'
                        placeholder='Search by Book or Author'
                        value={searchQuery}
                        onChange={(e) => setsearchQuery(e.target.value)}
                    />
                    <button type="button" onClick={handleSearch}>Search</button>
                </div>
                {/* </form> */}

                <ul className={menutoggle ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/books'>
                            <a href="#books">Books</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/student-login'>
                            <a href='signin'>Sign In</a>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* <div className="mobile-menu" onClick={() => { Toggle() }}>
                {menutoggle ? (
                    <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
                ) : (
                    <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
                )}
            </div> */}
        </div>
    );
}

export default Header;
