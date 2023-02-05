import React from 'react'
import AdminSidebar from './AdminSidebar';
import Card from './Card';
import Header from './Header'
import adddoc from "../assets/add-doc.jpg";
import deletedoc from "../assets/delete-doc.jpg";



function DoctorDesk() 
{
  return (
    <>
    <div style={{display:'flex'}}>
        <AdminSidebar/>
      <div className='main-container'>
          <Header/> 
        <div style={{display:'flex'}}>

          <Card img={adddoc}
                title="Register Doctor"
                description="Register a Doctor by clicking on the button below"
                cardbtn="Add Doctor"
          />
          <Card img={deletedoc} 
                title="Delete Doctor"
                description="Delete a Doctor by clicking on the button below"
                cardbtn="Delete Doctor"
          />
        </div>
      </div>   

      
    </div> 
    </>

  )
}



export default DoctorDesk;