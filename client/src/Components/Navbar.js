import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';



function Navbar() {
    return ( 

        <div className='navbar'>
            <div className='navbar__header'>
                <img className='logo' src={logo} />
                <p>EHR APPLICATION</p>
            </div>

            <ul className='navbar__menu'>
                <li className='navbar__item'>
                    <Link to="/AdminDash">ADMIN</Link>
                </li>
                <li className='navbar__item'>
                    <a href="/DoctorDash">DOCTOR</a>
                </li>
                <li className='navbar__item'>
                    <a href="/PatientDash">PATIENT</a>
                </li>
            </ul>

        </div>
     );
}

export default Navbar; 
