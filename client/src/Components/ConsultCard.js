import React from 'react'
import adddoc from "../assets/add-doc.jpg";
import "../styles/ConsultCard.css";


function ConsultCard() {
  return (
    <>
    <div className='wrapper'>
        <div className='card'>
            <div className='card-body'>
                {/* <img className='card-image' src={adddoc} /> */}
                <h2 className='card-title'>Patient Name</h2>
                <p className='card-description'>Delete a Doctor by clicking on the button below</p>
            </div>

        <button className='add-btn'>Delete Doctor</button>
        </div>
    </div>

    </>
  )
}

export default ConsultCard