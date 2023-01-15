import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.jpg';



function Navbar() {
    return ( 

        <div className='navbar'>
            <div className='navbar__header'>
                <img className='logo' src={logo} />
                <p>EHR APPLICATION</p>
            </div>

            <ul className='navbar__menu'>
                <li className='navbar__item'>
                    <a href="#">ADMIN</a>
                </li>
                <li className='navbar__item'>
                    <a href="#">DOCTOR</a>
                </li>
                <li className='navbar__item'>
                    <a href="#">PATIENT</a>
                </li>
            </ul>

        </div>
     );
}

export default Navbar; 
