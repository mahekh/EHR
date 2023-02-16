import React, { useState } from 'react';
import "../styles/ConsultCard.css";
import "../styles/MedicalReport.css";
import paticon from "../assets/pat-icon.png";

function MedicalReport() {

    const [formData, setFormData] = useState([{ name: '', email: '', phone: '' }]);

  function handleInputChange(event, index) {
    const { name, value } = event.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  }

  function handleAddRow() {
    setFormData([...formData, { name: '', email: '', phone: '' }]);
  }



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
            <div className='med-title'>
                <h2>Patient Medical Record</h2>
            </div>

            <div className='diagnosis'>
                <h3># Diagnosis</h3>
            </div>

            <form>
                <textarea className='diagnosis-sec'/>
            </form>

            <div className='medications'>
                <h3># Medications</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {formData.map((row, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
                    <input className='med-name' placeholder='Medicine Name' type="text" name="med-name" value={row.name} onChange={(event) => handleInputChange(event, index)} />
                    <input className='med-dosage' type="med-dosage" name="med-dosage" value={row.email} onChange={(event) => handleInputChange(event, index)} />
                    <input className='med-days' type="tel" name="med-days" value={row.phone} onChange={(event) => handleInputChange(event, index)} />
                    </div>
                ))}
                <button className='med-add' type="button" onClick={handleAddRow}>Add medicine</button>
            </div>

        </div>

    </div>
    </>
  )
}

export default MedicalReport