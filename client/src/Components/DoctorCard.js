import "../styles/ConsultCard.css";
import paticon from "../assets/pat-icon.png";
import React, { useState } from 'react'
import { useEffect } from "react";

function DoctorCard(props) {

  
  

  return (
    <>
      <div className='consultation-wrapper'>
        <div className='consultation-card'>

          <div className='patient-img'>
              <img className='pat-icon' src={paticon} alt="" />
          </div>

            <div className='consultation-body'>
                
                <div className='consultation-title'>
                  <h2 className='patient-name'>Doctor Name: {props.details.firstName} {props.details.lastName} </h2>
                </div>

                <div className='consultation-description'>
                  <p className='patient-id'>Doctor ID: {props.details.id}</p>
                  <p className='patient-phone'>Contact: {props.details.number}</p>
                  <p className='patient-email'>Email: {props.details.email}</p>
                </div>
            
            </div>

            <div className='record-btns'>
              <button className='add-rec'>DELETE</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default DoctorCard