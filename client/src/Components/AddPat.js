import React from 'react'
import "../styles/Card.css";
import addpatient from "../assets/add-patient.jpg";


function AddPat() {
  return (
    <>
    <div className='wrapper'>
    <div className='card'>
        <div className='card-body'>
            <img className='card-image' src={addpatient} />
            <h2 className='card-title'>Register Patient</h2>
            <p className='card-description'>Register a Patient by clicking on the button below</p>
        </div>

        <button className='add-btn'>Add Patient</button>
    </div>
    </div>

    </>
  )
}

export default AddPat