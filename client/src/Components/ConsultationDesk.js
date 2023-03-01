import React, { useEffect, useState } from "react";
import { getAllPatients, getPatientDetails } from "../services/doctorService";
import ConsultCard from "./ConsultCard";
import DoctorSidebar from "./DoctorSidebar";
import Header from "./Header";

const ConsultationDesk = () => {
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
