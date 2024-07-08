import React, { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from './image.png';
import axios from 'axios'; 

function Header() {
  

    const [menutoggle, setMenutoggle] = useState(false);
    const [searchQuery, setsearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]); 
    const Toggle = () => {
        setMenutoggle(!menutoggle)
    }

    const closeMenu = () => {
        setMenutoggle(false)
    }
    
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get(`https://your-backend-api.com/books/search?q=${searchQuery}`);
          const searchResults = response.data;
          setSearchResults(searchResults);
        } catch (error) {
          console.error(error);
        }
      };
      

    return (
      <div className="header">
      <div className="logo-nav-new" >
      <div className="logo">
      <img src={logo} alt='iitdh logo'></img>
        </div>
        <h1>LIBRARY</h1>
      </div>
      <div className='nav-right'>
        {/* <form   className='search'> */}
        
      
    
        <div className='search' onSubmit={handleSearch} >
          <input className='search-input' type='text' placeholder='Search a Book' value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}/>
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
                  <a href='signin'>SignIn</a>
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
