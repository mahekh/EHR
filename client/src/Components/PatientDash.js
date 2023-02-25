import React from 'react'
import PatientSidebar from './PatientSidebar';
import Header from './Header';
import PatProfile from './PatProfile';


function PatientDash() {
    return ( 
    <>   

        <div style={{display:'flex'}}>
      
            <PatientSidebar/> 
            <div className='main-container'>
            <Header roles="Patient"/>
            <div style={{display:'grid'}}>
            <PatProfile/>
            </div>
            </div>  
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