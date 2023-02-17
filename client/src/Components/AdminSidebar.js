import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";


function AdminSidebar() {

    return (
    <>
        <body className='sidebar-body'>
            
        <div className='side__bar'>
            <ul className='sidebar__list'>
                <li className='row'>
                     <Link className='row-text' to="/AdminDash">Dashboard</Link>
                </li>
                <li className='row'>
                    <Link className='row-text' to="/DoctorDesk">Doctor Desk</Link>
                </li>
                <li className='row'>
                    <Link className='row-text' to="/PatientDesk">Patient Desk</Link>
                </li>
            </ul>
        </div>
        </body>
    </>    
    );
}



export default AdminSidebar;