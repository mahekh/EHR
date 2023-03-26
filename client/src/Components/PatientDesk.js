import React from 'react'
import AdminSidebar from './AdminSidebar';
import Header from './Header';
import AddPat from './AddPat';


function PatientDesk() {
  return (
    <>
    <div style={{display:'flex'}}>
        <AdminSidebar/>
        
        <div className='main-container'>
          <Header roles="Admin"/> 
            <div style={{display:'flex'}}>  
              <AddPat/>
          </div>
        </div>   
    </div> 
    </>
  )
}

export default PatientDesk