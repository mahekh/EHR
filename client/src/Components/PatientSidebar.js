import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import * as FaIcons from "react-icons/fa";


function PatientSidebar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
    <>
        <div className='sidebar'>
            <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
            </Link>    
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                    </Link>
                </li>

                <li className='nav-text'>
                    <Link to='/Dashboard'>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className='nav-text'>
                    <Link to='/Doctor'>
                        <span>Doctor</span>
                    </Link>
                </li>
                <li className='nav-text'>
                    <Link to='/Patient'>
                        <span>Patient</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </>    
    );
}



export default PatientSidebar;