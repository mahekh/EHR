import React from 'react'
import '../styles/Header.css'
import logo from "../assets/logo.jpg";

function Header() {
    return ( 
        <div className="navbar__header">
            <img className="logo" src={logo} />
            <p>EHR APPLICATION</p>
        </div>
     );
}

export default Header;