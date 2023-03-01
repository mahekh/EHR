import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import DoctorSidebar from "./DoctorSidebar";
import DoctorViewCard from './DoctorViewCard';
import Header from "./Header";
import { getAllPatients, getPatientDetails } from "../services/doctorService";

function DoctorView() {

  const [allPatients, setallPatients] = useState([]);
  const [patientDetails, setpatientDetails] = useState([]);

  useEffect(() => {
    getAllPatients().then((list_of_patients) => {
      setallPatients(list_of_patients);
      console.log(list_of_patients);
      initPatients(list_of_patients);
    });

    return () => {};
  }, []);

  function initPatients(listofpat) {
    let patient_ipfshash = [];

    listofpat.forEach((pat) => {
      patient_ipfshash.push(pat.patient_ipfs_hash);
      if (patient_ipfshash.length === listofpat.length) {
        getPatientDetails(patient_ipfshash)
          .then((r) => {
            setpatientDetails(r);
            console.log(r);
          })
          .catch((err) => console.log(err));
      }
    });
  }

  return (


    <>
        <div style={{ display: "flex" }}>
          <DoctorSidebar />
          <div className="main-container">
            <Header roles="Doctor" />
            <div style={{ display: "grid" }}>

            {patientDetails.map((pat, index) => (
              <DoctorViewCard key={index} details={pat} />
            ))}


            </div>
          </div>
        </div>
    </>
  )
}

export default DoctorView