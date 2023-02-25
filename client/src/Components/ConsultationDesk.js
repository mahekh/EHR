import React, { useEffect, useState } from "react";
import { getAllPatients } from "../services/doctorService";
import ConsultCard from "./ConsultCard";
import DoctorSidebar from "./DoctorSidebar";
import Header from "./Header";


const ConsultationDesk = () => {
  const [allPatients, setallPatients] = useState([]);

  useEffect(() => {
    getAllPatients().then((list_of_patients) => {
      setallPatients(list_of_patients);
      console.log(list_of_patients);
    });

    return () => {};
  }, []);

  function initPatients(listofpat){

    console.log(listofpat)

  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <DoctorSidebar />
        <div className="main-container">
          <Header roles="Doctor" />
          <div style={{ display: "grid" }}>
            {/* <ConsultCard />
            <ConsultCard /> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationDesk;
