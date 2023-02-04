import React from 'react'
import AdminSidebar from './AdminSidebar';
import Header from './Header'


function AdminDoc() 
{
  return (
    <>
    <div style={{display:'flex'}}>
        <AdminSidebar/>
      <div className='main-container'>
          <Header/> 
      </div>   
    </div> 
    </>

  )
}



export default AdminDoc;