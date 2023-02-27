import React from 'react'
import DoctorSidebar from "./DoctorSidebar";
import DoctorViewCard from './DoctorViewCard';
import Header from "./Header";

function DoctorView() {
  return (
    <>
        <div style={{ display: "flex" }}>
          <DoctorSidebar />
          <div className="main-container">
            <Header roles="Doctor" />
            <div style={{ display: "grid" }}>
              <DoctorViewCard/>
            </div>
          </div>
        </div>
    </>
  )
}

export default DoctorView