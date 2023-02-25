import React, { useState } from "react";
import { useEffect } from "react";
import { isDoctor } from "../services/doctorService";
import Docprofile from "./Docprofile";
// import MedicalReportForm from './MedicalReportForm';
import DoctorSidebar from "./DoctorSidebar";
import Header from "./Header";
import MedicalReport from "./MedicalReport";

function DoctorDash() {
  const [isDoc, setisDoc] = useState(false);

  useEffect(() => {
    isDoctor().then((r) => {
      if (r) setisDoc(true);
    });

    return () => {};
  }, []);

  return (
    <>
      {isDoc ? (
        <div style={{ display: "flex" }}>
          <DoctorSidebar />
          <div className="main-container">
            <Header roles="Doctor" />
            <div style={{ display: "grid" }}>
              <Docprofile />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default DoctorDash;
