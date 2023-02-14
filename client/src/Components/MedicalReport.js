import React from 'react'
import "../styles/ConsultCard.css";
import "../styles/MedicalReport.css";
import paticon from "../assets/pat-icon.png";

function MedicalReport() {
  return (
    <>
    <div className='medical-form'>
        
        <div className='patient-info'>
                <div className='consultation-wrapper'>
                <div className='consultation-card'>

                <div className='patient-img'>
                    <img className='pat-icon' src={paticon} alt="" />
                </div>

                    <div className='consultation-body'>
                        
                        <div className='consultation-title'>
                        <h2 className='patient-name'>Patient Name: First Name Last Name</h2>
                        </div>

                        <div className='consultation-description'>
                        <p className='patient-id'>Patient ID: 0x6Da0704CA1472f07AfA0046766370f854D20D86C</p>
                        <p className='patient-phone'>Contact: 0504752853</p>
                        <p className='patient-email'>Email: test@test.com</p>
                        </div>
                    
                    </div>

                </div>
            </div>
        </div>

        <div className='medical-body'>
            <h2>Medical Form</h2>
            
        </div>

    </div>
    </>
  )
}

export default MedicalReport