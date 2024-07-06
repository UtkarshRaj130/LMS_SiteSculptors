import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from './image.png'

function Header() {
  

    const [menutoggle, setMenutoggle] = useState(false)

    const Toggle = () => {
        setMenutoggle(!menutoggle)
    }

    const closeMenu = () => {
        setMenutoggle(false)
    }

    return (
      <div className="header">
      <div className="logo-nav-new" >
      <div className="logo">
      <img src={logo} alt='iitdh logo '></img>
        </div>
        <h1>LIBRARY</h1>
      </div>
      <div className='nav-right'>
       
          <input className='search-input' type='text' placeholder='Search a Book'/>
          
          

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
