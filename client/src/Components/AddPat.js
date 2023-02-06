import React, { useState } from 'react'
import "../styles/Card.css";
import "../styles/AddForm.css";
import addpatient from "../assets/add-patient.jpg";


function AddPat() {


  const [modal, setModal] = useState(false);

  const toggleModal = () => {

    setModal(!modal)
  }

  return (
    <>
    <div className='wrapper'>
    <div className='card'>
        <div className='card-body'>
            <img className='card-image' src={addpatient} />
            <h2 className='card-title'>Register Patient</h2>
            <p className='card-description'>Register a Patient by clicking on the button below</p>
        </div>

        <button className='add-btn' onClick={toggleModal}>Add Patient</button>
    </div>
    </div>
    {modal && (
      <div className='modal'>
      <div className="overlay">
      <div class="form-container">
      <form class="register-form">
        
        <input id="first-name" class="form-field" type="text" placeholder="First Name" name="firstName"/>
        
        <input id="last-name" class="form-field" type="text" placeholder="Last Name" name="lastName"/>
        
        <input id="email" class="form-field" type="text" placeholder="Email" name="email"/>

        <input id="number" class="form-field" type="text" placeholder="Number" name="number"/>

        <input id="doc-id" class="form-field" type="text" placeholder="ID" name="id"/>

        <input id="city" class="form-field" type="text" placeholder="City" name="city"/>

        <input id="country" class="form-field" type="text" placeholder="Country" name="country"/>

        
        <button class="form-field" type="submit" >
          Register Patient
        </button>

      </form>
      <button className="close-modal" onClick={toggleModal}>
              X
      </button>
    </div>
      </div>
    </div>
    )}

    </>
  )
}

export default AddPat