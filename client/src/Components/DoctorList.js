import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllDoctorsAdmin } from '../services/adminService';
import AdminSidebar from './AdminSidebar';
import DoctorCard from './DoctorCard';
import Header from './Header'





function DoctorList() 
{

  const [Docdetails, setDocdetails] = useState([])

  // calling the function from admin service 
  useEffect(() => {
    
    getAllDoctorsAdmin().then(d => {

      setDocdetails(d)
      console.log(d)
    })
    
    return () => {
      
    }
  }, [])


  return (
    <>
    <div style={{display:'flex'}}>
        <AdminSidebar/>
      <div className='main-container'>
        <Header roles="Admin"/> 
        <div style={{display:'grid'}}>
          <p style={{marginLeft:'30px', marginTop:'20px', fontWeight:'bolder',fontFamily:'Permanent Marker',fontSize:'20px'}}>The list of Doctors can be found here</p>
          {Docdetails.map((doc,index) =>
          <DoctorCard details={doc} key={index}/> )}
          

        </div>
      </div>   

      
    </div> 
    </>

  )
}



export default DoctorList;