import React from 'react'
import AdminSidebar from './AdminSidebar';
import Header from './Header'
import PatientCard from './PatientCard';





function PatientList() 
{
  return (
    <>
    <div style={{display:'flex'}}>
        <AdminSidebar/>
      <div className='main-container'>
        <Header roles="Admin"/> 
        <div style={{display:'grid'}}>
        <p style={{marginLeft:'30px', marginTop:'20px', fontWeight:'bolder',fontFamily:'Permanent Marker',fontSize:'20px'}}>The list of Patients can be found here</p>
          <PatientCard/>
        </div>
      </div>   

      
    </div> 
    </>

  )
}



export default PatientList;