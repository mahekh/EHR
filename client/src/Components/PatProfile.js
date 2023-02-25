import React from 'react'
import "../styles/DocProfile.css";
import paticon from "../assets/pat-icon.png";

function PatProfile() {
  return (
    
    <>
      <div className='main-profile' style={{display: 'flex'}}>
          

          <div className='patient-img'>
            <img className='pat-icon' src={paticon} alt="" />
          </div>

          <div className="profile"> 

            <div className="name-profile" style={{display: 'flex'}}>
              <div className='full-name'>
                <p>Full Name: </p>
              </div>

              <div className='name'>
                First Name Last Name
              </div>
            </div>

            <div className='prof-id' style={{display: 'flex'}}>
              <div className='title-id'>
                <p>Doctor ID: </p>
              </div>

              <div className='prof-doc-id'>
                <p>0x4BC80A001C0836641E3104B6a6F50e552BC103fB</p>
              </div>
            </div>

            <div className='prof-email' style={{display: 'flex'}}>
              <div className='title-email'>
                <p>Email: </p>
              </div>

              <div className='prof-doc-email'>
                <p>test@test.com</p>
              </div>
            </div>

            <div className='prof-number' style={{display: 'flex'}}>
              <div className='title-number'>
                <p>Number: </p>
              </div>

              <div className='prof-doc-number'>
                <p>0544278345</p>
              </div>
            </div>

            <div className='prof-city' style={{display: 'flex'}}>
              <div className='title-city'>
                <p>City: </p>
              </div>

              <div className='prof-doc-city'>
                <p>Dubai</p>
              </div>
            </div>

            <div className='prof-country' style={{display: 'flex'}}>
              <div className='title-country'>
                <p>Country: </p>
              </div>

              <div className='prof-doc-country'>
                <p>UAE</p>
              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default PatProfile