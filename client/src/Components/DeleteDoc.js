import React from 'react'
import "../styles/Card.css";
import adddoc from "../assets/add-doc.jpg";


function DeleteDoc() {
  return (
    <>
    <div className='wrapper'>
    <div className='card'>
        <div className='card-body'>
            <img className='card-image' src={adddoc} />
            <h2 className='card-title'>Delete Doctor</h2>
            <p className='card-description'>Delete a Doctor by clicking on the button below</p>
        </div>

        <button className='add-btn'>Delete Doctor</button>
    </div>
    </div>

    </>
  )
}

export default DeleteDoc