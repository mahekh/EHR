import React, { useState } from 'react'
import "../styles/Card.css";
import "../styles/AddForm.css";
import addpatient from "../assets/add-patient.jpg";


function AddPat() {


  const [modal, setModal] = useState(false);

  const toggleModal = () => {

    setModal(!modal)
  }

  const [Patvalues, setPatValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    id: "",
    city: "",
    country: "",

  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false)

  const handleFirstNameInputChange = (event) => {
    setPatValues({...Patvalues, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setPatValues({...Patvalues, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setPatValues({...Patvalues, email: event.target.value})
  }

  const handleNumberInputChange = (event) => {
    setPatValues({...Patvalues, number: event.target.value})
  }

  const handleIDInputChange = (event) => {
    setPatValues({...Patvalues, id: event.target.value})
  }

  const handleCityInputChange = (event) => {
    setPatValues({...Patvalues, city: event.target.value})
  }

  const handleCountryInputChange = (event) => {
    setPatValues({...Patvalues, country: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(Patvalues.firstName && Patvalues.lastName && Patvalues.email && Patvalues.number && Patvalues.id && Patvalues.city && Patvalues.country){
      setValid(true);
    }
    setSubmitted(true);
    
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
      <form class="register-form" onSubmit={handleSubmit}>
      {submitted && valid ? <div className="success-message">Patient Registered</div> : null}
        
      <input onChange={handleFirstNameInputChange} value={Patvalues.firstName} id="first-name" class="form-field" type="text" placeholder="First Name" name="firstName"/>
        {submitted && !Patvalues.firstName ? <span>Please enter First Name</span>: null}

        <input onChange={handleLastNameInputChange} value={Patvalues.lastName} id="last-name" class="form-field" type="text" placeholder="Last Name" name="lastName"/>
        {submitted && !Patvalues.lastName ? <span>Please enter Last Name</span>: null}
        
        <input onChange={handleEmailInputChange} value={Patvalues.email} id="email" class="form-field" type="text" placeholder="Email" name="email"/>
        {submitted && !Patvalues.email ? <span>Please enter Email</span>: null}

        <input onChange={handleNumberInputChange} value={Patvalues.number} id="number" class="form-field" type="text" placeholder="Number" name="number"/>
        {submitted && !Patvalues.number ? <span>Please enter Number</span>: null}

        <input onChange={handleIDInputChange} value={Patvalues.id} id="pat-id" class="form-field" type="text" placeholder="ID" name="id"/>
        {submitted && !Patvalues.id ? <span>Please enter ID</span>: null}

        <input onChange={handleCityInputChange} value={Patvalues.city} id="city" class="form-field" type="text" placeholder="City" name="city"/>
        {submitted && !Patvalues.city ? <span>Please enter City</span>: null}
        

        <input onChange={handleCountryInputChange} value={Patvalues.country} id="country" class="form-field" type="text" placeholder="Country" name="country"/>
        {submitted && !Patvalues.country ? <span>Please enter Country</span>: null}

        
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