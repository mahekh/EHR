import React from 'react'
import AdminSidebar from './AdminSidebar';
import Header from './Header'
import AddDoc from './AddDoc'
import AdddocForm from './AdddocForm'
import DeleteDoc from './DeleteDoc';



function DoctorDesk() 
{
  return (
    <>
    <div style={{display:'flex'}}>
        <AdminSidebar/>
      <div className='main-container'>
          <Header/> 
        <div style={{display:'flex'}}>
          {/* <AdddocForm/> */}
          <AddDoc/>
          <DeleteDoc/>
        </div>
      </div>   

      
    </div> 
    </>

  )
}



export default DoctorDesk;