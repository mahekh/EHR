import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";


function PatientSidebar() {

    return (
    <>
        <div className='side__bar'>
            <ul className='sidebar__list'>
                <li className='row'>
                     <Link className='row-text' to="/PatientDash">Dashboard</Link>
                </li>
                <li className='row'>
                    <Link className='row-text' to="/ViewReportSection">Reports</Link>
                </li>
            </ul>
        </div>
    </>    
    );
}



export default PatientSidebar;