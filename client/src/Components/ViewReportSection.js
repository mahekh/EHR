import React from 'react'
import PatientSidebar from './PatientSidebar';
import Header from './Header';
import ViewReport from './ViewReport';

function ViewReportSection() {
  return (
    <>
        <div style={{display:'flex'}}>
      
            <PatientSidebar/> 
            <div className='main-container'>
            <Header roles="Patient"/>
            <div style={{display:'grid'}}>
            <ViewReport/>
            </div>
            </div>  
        </div> 
    </>
  )
}

export default ViewReportSection