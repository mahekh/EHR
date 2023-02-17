import React, { useState } from 'react';
import './MedicalReportForm.css';

function MedicalReportForm() {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server or database using fetch API
  };

  return (
    <form className="medical-report-form" onSubmit={handleSubmit}>
      <label htmlFor="patient-name">Patient Name:</label>
      <input
        type="text"
        id="patient-name"
        value={patientName}
        onChange={(event) => setPatientName(event.target.value)}
        required
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        required
      />

      <label htmlFor="height">Height:</label>
      <input
        type="text"
        id="height"
        value={height}
        onChange={(event) => setHeight(event.target.value)}
        required
      />

      <label htmlFor="weight">Weight:</label>
      <input
        type="text"
        id="weight"
        value={weight}
        onChange={(event) => setWeight(event.target.value)}
        required
      />

      <label htmlFor="blood-pressure">Blood Pressure:</label>
      <input
        type="text"
        id="blood-pressure"
        value={bloodPressure}
        onChange={(event) => setBloodPressure(event.target.value)}
        required
      />

      <label htmlFor="medical-history">Medical History:</label>
      <textarea
        id="medical-history"
        value={medicalHistory}
        onChange={(event) => setMedicalHistory(event.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default MedicalReportForm;
