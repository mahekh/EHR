import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllpatientsAdmin } from '../services/adminService';
import AdminSidebar from './AdminSidebar';
import Header from './Header'
import PatientCard from './PatientCard';





function PatientList() 
{

  const [patDetails, setpatDetails] = useState([])

  useEffect(() => {
    
    getAllpatientsAdmin().then(p => {

      setpatDetails(p)
      console.log(p)
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
        <p style={{marginLeft:'30px', marginTop:'20px', fontWeight:'bolder',fontFamily:'Permanent Marker',fontSize:'20px'}}>The list of Patients can be found here</p>
          {patDetails.map((pat, index) => 
            <PatientCard details={pat} key={index}/>
          )}
          
        </div>
      </div>   

      
    </div> 
    </>

  )
}



export default PatientList;