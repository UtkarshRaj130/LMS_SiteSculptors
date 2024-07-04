import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
    const [menuToggle, setMenuToggle] = useState(false);

  // const toggleMenu = () => {
  //   setMenuToggle(!menuToggle);
  // };

  const closeMenu = () => {
    setMenuToggle(false);
  };
  return (
    <div className="header">
      <div className="logo-nav">
        <h1>LIBRARY</h1>
      </div>
      <div className="nav-right">
        <ul className={menuToggle? "nav-options active" : "nav-options"}>
          <li className="option box " onClick={closeMenu}>
            <Link to="/student-login">Student Login</Link>
          </li>
          <li className="option box" onClick={closeMenu}>
            <Link to="/admin-login">Admin Login</Link>
          </li>
        </ul>
        {/* <button className="menu-toggle" onClick={toggleMenu}>
          {menuToggle? 'Close' : 'Menu'}
        </button> */}
      </div>
    </div>
    
    

  );
}

export default Header;
