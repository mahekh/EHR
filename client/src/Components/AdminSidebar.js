import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";


function AdminSidebar() {

    return (
    <>
        <div className='side__bar'>
            <ul className='sidebar__list'>
                <li className='row'>
                     <Link to="AdminDash">Dashboard</Link>
                </li>
                <li className='row'>
                    <Link to="#">Doctor</Link>
                </li>
                <li className='row'>
                    <Link to="#">Patient</Link>
                </li>
            </ul>
        </div>
    </>    
    );
}



export default AdminSidebar;