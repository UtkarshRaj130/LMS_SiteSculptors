import React, { useState } from 'react';
import './Header.css';
import logo from './IIT_Dharwad_Emblem.svg.png'; // Importing the logo image

function Header() {
    const [menutoggle, setMenutoggle] = useState(false);

    const closeMenu = () => {
        setMenutoggle(false);
    }

    return (
        <div className="header">
            <div className="logo-nav">
                <a href="https://iitdh.ac.in">
                    <img src={logo} alt="College Logo" className="college-logo" />
                </a>
                <a href="/home" className="library-text">LIBRARY</a>
            </div>
            <div className='nav-right'>
                <input className='search-input' type='text' placeholder='Search here for Books...' />
                <ul className={menutoggle ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={() => {closeMenu()}}>
                        <a href='/'>
                            Home
                        </a>
                    </li>
                    <li className="option" onClick={() => {closeMenu()}}>
                        <a href='/books'>
                            Books
                        </a>
                    </li>
                    <li className="option" onClick={() => {closeMenu()}}>
                        <a href='/signin'>
                            Sign In
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
