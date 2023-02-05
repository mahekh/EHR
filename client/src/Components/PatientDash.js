import React from 'react'
import PatientSidebar from './PatientSidebar';
import Header from './Header';

function PatientDash() {
    return ( 
    <>   
        <div style={{display:'flex'}}>
        <PatientSidebar/> 
        <Header roles="Patient"/>
        </div>

    </>     
     );
}

// const Container = styled.div`
//     display: flex;
//     height: 98vh;
//     background: linear-gradient(to bottom right, white 60%, #B8E2F2);
// `;

export default PatientDash;