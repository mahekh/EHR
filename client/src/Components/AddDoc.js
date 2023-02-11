import React, { useState } from 'react'
import "../styles/Card.css";
import "../styles/AddForm.css";
import adddoc from "../assets/add-doc.jpg";


function AddDoc() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  const [Docvalues, setDocValues] = useState({
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
    setDocValues({...Docvalues, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setDocValues({...Docvalues, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setDocValues({...Docvalues, email: event.target.value})
  }

  const handleNumberInputChange = (event) => {
    setDocValues({...Docvalues, number: event.target.value})
  }

  const handleIDInputChange = (event) => {
    setDocValues({...Docvalues, id: event.target.value})
  }

  const handleCityInputChange = (event) => {
    setDocValues({...Docvalues, city: event.target.value})
  }

  const handleCountryInputChange = (event) => {
    setDocValues({...Docvalues, country: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(Docvalues.firstName && Docvalues.lastName && Docvalues.email && Docvalues.number && Docvalues.id && Docvalues.city && Docvalues.country){
      setValid(true);
    }
    setSubmitted(true);
    
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
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Doctor Registered</div> : null}
        
        <input onChange={handleFirstNameInputChange} value={Docvalues.firstName} id="first-name" class="form-field" type="text" placeholder="First Name" name="firstName"/>
        {submitted && !Docvalues.firstName ? <span>Please enter First Name</span>: null}

        <input onChange={handleLastNameInputChange} value={Docvalues.lastName} id="last-name" class="form-field" type="text" placeholder="Last Name" name="lastName"/>
        {submitted && !Docvalues.lastName ? <span>Please enter Last Name</span>: null}
        
        <input onChange={handleEmailInputChange} value={Docvalues.email} id="email" class="form-field" type="text" placeholder="Email" name="email"/>
        {submitted && !Docvalues.email ? <span>Please enter Email</span>: null}

        <input onChange={handleNumberInputChange} value={Docvalues.number} id="number" class="form-field" type="text" placeholder="Number" name="number"/>
        {submitted && !Docvalues.number ? <span>Please enter Number</span>: null}

        <input onChange={handleIDInputChange} value={Docvalues.id} id="doc-id" class="form-field" type="text" placeholder="ID" name="id"/>
        {submitted && !Docvalues.id ? <span>Please enter ID</span>: null}

        <input onChange={handleCityInputChange} value={Docvalues.city} id="city" class="form-field" type="text" placeholder="City" name="city"/>
        {submitted && !Docvalues.city ? <span>Please enter City</span>: null}
        

        <input onChange={handleCountryInputChange} value={Docvalues.country} id="country" class="form-field" type="text" placeholder="Country" name="country"/>
        {submitted && !Docvalues.country ? <span>Please enter Country</span>: null}
        
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