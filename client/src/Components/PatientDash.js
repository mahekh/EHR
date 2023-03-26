import React from "react";
import PatientSidebar from "./PatientSidebar";
import Header from "./Header";
import PatProfile from "./PatProfile";
import { isPatient } from "../services/patientService";
import { useState } from "react";
import { useEffect } from "react";

function PatientDash() {
  const [checkPatient, setcheckPatient] = useState(false);

  useEffect(() => {
    isPatient().then((r) => {
      setcheckPatient(r);
      console.log(r)
    });
    return () => {};
  }, []);

  return (
    <>
      {checkPatient ? (
        <div style={{ display: "flex" }}>
          <PatientSidebar />
          <div className="main-container">
            <Header roles="Patient" />
            <div style={{ display: "grid" }}>
              <PatProfile />
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex w-100 flex-row justify-content-center align-items-center text-danger">
          <span className="h4 text-center">Only Patient has access to this page</span>
          <progress></progress>
        </div>
      )}
    </>
  );
}


export default PatientDash;
