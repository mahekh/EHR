import React from 'react'
import ConsultCard from './ConsultCard';
import DoctorSidebar from './DoctorSidebar';
import Header from './Header';



function DoctorDash() {
    return ( 

        <>
        <div style={{display:'flex'}}>
            <DoctorSidebar/>
            <Header roles="Doctor"/>
        </div>
        </>
     );

     
}

export default DoctorDash;