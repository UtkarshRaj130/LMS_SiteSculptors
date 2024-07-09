import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from './image.png';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className="header">
      <div className="logo-nav-new">
        <div className="logo">
          <img src={logo} alt='iitdh logo' />
        </div>
        <h1>LIBRARY</h1>
      </div>
      <div className='nav-right'>
        <SearchBar />
        <ul className="nav-options">
          <li className="option">
            <Link to='/books'>Books</Link>
          </li>
          <li className="option">
            <Link to='/student-login'>SignIn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
