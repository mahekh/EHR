import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";


function DoctorSidebar() {

    return (
    <>
        <div className='side__bar'>
            <ul className='sidebar__list'>
                <li className='row'>
                     <Link className='row-text' to="/DoctorDash">Dashboard</Link>
                </li>
                <li className='row'>
                    <Link className='row-text' to="/Consult">Consultations</Link>
                </li>
            </ul>
        </div>
    </>    
    );
}



export default DoctorSidebar;