import React from 'react'
import "../styles/Card.css";
import adddoc from "../assets/add-doc.jpg";


function AddDoc() {
  return (
    <>
    <div className='wrapper'>
    <div className='card'>
        <div className='card-body'>
            <img className='card-image' src={adddoc} />
            <h2 className='card-title'>Register Doctor</h2>
            <p className='card-description'>Register a Doctor by clicking on the button below</p>
        </div>

        <button className='add-btn'>Add Doctor</button>
    </div>
    </div>

    </>
  )
}

export default AddDoc