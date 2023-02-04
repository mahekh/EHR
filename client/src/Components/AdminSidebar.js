import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";


function AdminSidebar() {

    return (
    <>
        <div className='side__bar'>
            <ul className='sidebar__list'>
                <li className='row'>
                     <Link className='row-text' to="/AdminDash">Dashboard</Link>
                </li>
                <li className='row'>
                    <Link className='row-text' to="/AdminDoc">Doctor Desk</Link>
                </li>
                <li className='row'>
                    <Link className='row-text' to="/AdminPatient">Patient Desk</Link>
                </li>
            </ul>
        </div>
    </>    
    );
}



export default AdminSidebar;