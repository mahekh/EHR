import React from 'react'
import AdminSidebar from './AdminSidebar';
import DoctorCard from './DoctorCard';
import Header from './Header'





function DoctorList() 
{
  return (
    <>
    <div style={{display:'flex'}}>
        <AdminSidebar/>
      <div className='main-container'>
        <Header roles="Admin"/> 
        <div style={{display:'grid'}}>
          <p style={{marginLeft:'30px', marginTop:'20px', fontWeight:'bolder',fontFamily:'Permanent Marker',fontSize:'20px'}}>The list of Doctors can be found here</p>
          <DoctorCard/>

        </div>
      </div>   

      
    </div> 
    </>

  )
}



export default DoctorList;