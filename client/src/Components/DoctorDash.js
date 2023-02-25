import React from 'react'
import Docprofile from './Docprofile';
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
                <Docprofile/>
            </div>
            </div>  
        </div> 
        </>
     );

     
}

export default DoctorDash;