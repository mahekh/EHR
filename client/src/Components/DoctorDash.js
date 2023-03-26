import React, { useState } from "react";
import { useEffect } from "react";
import { isDoctor } from "../services/doctorService";
import Docprofile from "./Docprofile";
import DoctorSidebar from "./DoctorSidebar";
import Header from "./Header";


function DoctorDash() {
  const [isDoc, setisDoc] = useState(false);

  // checking if it is doctor 
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
        <div className="d-flex w-100 flex-row justify-content-center align-items-center text-danger">
          <span className="h4 text-center">Only Doctor has access to this page</span>
          <progress></progress>
        </div>
      )}
    </>
  );
}

export default DoctorDash;
