import React, { useEffect, useState } from "react";
import { getAllPatients, getPatientDetails } from "../services/doctorService";
import ConsultCard from "./ConsultCard";
import DoctorSidebar from "./DoctorSidebar";
import Header from "./Header";

const ConsultationDesk = () => {
  const [allPatients, setallPatients] = useState([]);
  const [patientDetails, setpatientDetails] = useState([]);

  // getting the list of patients from the function in doctor service 
  useEffect(() => {
    getAllPatients().then((list_of_patients) => {
      setallPatients(list_of_patients);
      console.log(list_of_patients);
      initPatients(list_of_patients);
    });

    return () => {};
  }, []);

  // getting the patient details for the list of patient ids
  function initPatients(listofpat) {
    let patient_ipfshash = [];

    //"listofpat" is a struct of patient from which we are getting ipfs hash 
    
    listofpat.forEach((pat) => {
      // creating a list of patient ipfs hashes 
      patient_ipfshash.push(pat.patient_ipfs_hash);
      if (patient_ipfshash.length === listofpat.length) {
        //getting the patient details for the list of patient ipfs hash 
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
          {/* <pre>{patientDetails}</pre> */}
          <div style={{ display: "grid" }}>
            {patientDetails.map((pat, index) => (
              <ConsultCard key={index} details={pat} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationDesk;
