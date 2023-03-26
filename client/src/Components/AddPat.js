import React, { useState } from 'react'
import "../styles/Card.css";
import "../styles/AddForm.css";
import addpatient from "../assets/add-patient.jpg";
import { AddPatientfunction } from '../services/adminService';


function AddPat() {


  const [modal, setModal] = useState(false);

  const toggleModal = () => {

    setModal(!modal)
  }

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false)

  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [id, setID] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(firstName && lastName && email && number && id && city && country){
      setValid(true);
    }
    setSubmitted(true);

    const patient_profile = { firstName, lastName, email, number, id, city, country };
    console.log(patient_profile);

    // calling the function from the admin service to add the patient details 
    AddPatientfunction(patient_profile).then(r => {
      console.log("patient is added");
    })
    
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
      <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
      {submitted && valid ? <div className="success-message">Patient Registered</div> : null}
        
      <input onChange={(e) => setFirstname(e.target.value)} value={firstName} id="first-name" className="form-field" type="text" placeholder="First Name" name="firstName"/>
        {submitted && ! firstName ? <span>Please enter First Name</span>: null}

        <input onChange={(e) => setLastname(e.target.value)} value={lastName} id="last-name" className="form-field" type="text" placeholder="Last Name" name="lastName"/>
        {submitted && ! lastName ? <span>Please enter Last Name</span>: null}
        
        <input onChange={(e) => setEmail(e.target.value)} value={email} id="email" className="form-field" type="text" placeholder="Email" name="email"/>
        {submitted && ! email ? <span>Please enter Email</span>: null}

        <input onChange={(e) => setNumber(e.target.value)} value={number} id="number" className="form-field" type="text" placeholder="Number" name="number"/>
        {submitted && ! number ? <span>Please enter Number</span>: null}

        <input onChange={(e) => setID(e.target.value)} value={id} id="pat-id" className="form-field" type="text" placeholder="ID" name="id"/>
        {submitted && ! id ? <span>Please enter ID</span>: null}

        <input onChange={(e) => setCity(e.target.value)} value={city} id="city" className="form-field" type="text" placeholder="City" name="city"/>
        {submitted && ! city ? <span>Please enter City</span>: null}
        

        <input onChange={(e) => setCountry(e.target.value)} value={country} id="country" className="form-field" type="text" placeholder="Country" name="country"/>
        {submitted && ! country ? <span>Please enter Country</span>: null}

        
        <button className="form-field" type="submit" >
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