import React from 'react'
import AdminSidebar from './AdminSidebar';
import Header from './Header'
import AddDoc from './AddDoc'



function DoctorDesk() 
{
  return (
    <>
    <div style={{display:'flex'}}>
        <AdminSidebar/>
      <div className='main-container'>
        <Header roles="Admin"/> 
        <div style={{display:'flex'}}>
          <AddDoc/>
        </div>
      </div>   

      
    </div> 
    </>

  )
}



export default DoctorDesk;