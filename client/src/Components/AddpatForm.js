import React from 'react'
import "../styles/AddForm.css";

function AddpatForm() {
  return (
    <>
      <div class="form-container">
      <form class="register-form">
        
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        <input
          id="number"
          class="form-field"
          type="text"
          placeholder="Number"
          name="number"
        />

        <input
          id="doc-id"
          class="form-field"
          type="text"
          placeholder="ID"
          name="id"
        />

        <input
          id="city"
          class="form-field"
          type="text"
          placeholder="City"
          name="city"
        />

        <input
          id="country"
          class="form-field"
          type="text"
          placeholder="Country"
          name="country"
        />

        
        <button class="form-field" type="submit">
          Register Patient
        </button>
        
      </form>
    </div>
    </>
  )
}

export default AddpatForm