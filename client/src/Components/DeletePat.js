import React from 'react'
import "../styles/Card.css";
import addpatient from "../assets/add-patient.jpg";


function DeletePat() {
  return (
    <>
    <div className='wrapper'>
    <div className='card'>
        <div className='card-body'>
            <img className='card-image' src={addpatient} />
            <h2 className='card-title'>Delete Patient</h2>
            <p className='card-description'>Delete a Patient by clicking on the button below</p>
        </div>

        <button className='add-btn'>Delete Patient</button>
    </div>
    </div>

    </>
  )
}

export default DeletePat