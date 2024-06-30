import { React, useState } from 'react'
import './Header.css'

function Header() {
 
const [menutoggle, setMenutoggle] = useState(false)

// const Toggle = () => {
//     setMenutoggle(!menutoggle)
// }

const closeMenu = () => {
    setMenutoggle(false)
}


return (
    <div className="header">
    <div className="logo-nav">
    <a href='/'>
        <a href="/home">LIBRARY</a>
    </a>
    </div>
    <div className='nav-right'>
        <input className='search-input' type='text' placeholder='Search here for Books...'/>
        <ul className={menutoggle ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={() => {closeMenu()}}>
                <a href='/'>
                    <a href="/home">Home</a>
                </a>
            </li>
            <li className="option" onClick={() => {closeMenu()}}>
                <a href='/books'>
                <a href="/books">Books</a>
                </a>
            </li>
            <li className="option" onClick={() => {closeMenu()}}>
                <a href='/signin'>
                <a href='/signin'>SignIn</a>
                </a>
            </li>
        </ul>
    </div>
    <hr style={{color:"white"}}/>
    </div>

)
  

   

   
}

export default Header