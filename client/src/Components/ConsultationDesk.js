import React from 'react'
import DoctorSidebar from './DoctorSidebar'
import Header from './Header'
import ConsultCard from './ConsultCard'

function ConsultationDesk() {
  return (
    <>
    <div style={{display:'flex'}}>
      
        <DoctorSidebar/>
         <div className='main-container'>
         <Header roles="Doctor"/>
        <div style={{display:'grid'}}>
        <ConsultCard/> 
        <ConsultCard/> 
        </div>
      </div>  
    </div> 
    </>
  )
}

export default ConsultationDesk