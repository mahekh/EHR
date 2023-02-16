import React from 'react'
// import MedicalReportForm from './MedicalReportForm';
import DoctorSidebar from './DoctorSidebar';
import Header from './Header';
import MedicalReport from './MedicalReport';



function DoctorDash() {
    return ( 

        <>
        <div style={{display:'flex'}}>
      
            <DoctorSidebar/>
            <div className='main-container'>
            <Header roles="Doctor"/>
            <div style={{display:'grid'}}>
            <MedicalReport/>
            </div>
            </div>  
        </div> 
        </>
     );

     
}

export default DoctorDash;