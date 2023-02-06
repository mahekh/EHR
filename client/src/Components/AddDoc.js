import React, { useState } from 'react'
import "../styles/Card.css";
import "../styles/AddForm.css";
import adddoc from "../assets/add-doc.jpg";


function AddDoc() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {

    setModal(!modal)
  }

  return (
    <>
    <div className='wrapper'>
    <div className='card'>
        <div className='card-body'>
            <img className='card-image' src={adddoc} />
            <h2 className='card-title'>Register Doctor</h2>
            <p className='card-description'>Register a Doctor by clicking on the button below</p>
        </div>

        <button className='add-btn' onClick={toggleModal}>Add Doctor</button>
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
          Register Doctor
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

export default AddDoc