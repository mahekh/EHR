import React from "react";
import PatientSidebar from "./PatientSidebar";
import Header from "./Header";
import PatProfile from "./PatProfile";
// import { isPatient } from "../functionalities/patientFunctionalities";
import { useState } from "react";
import { useEffect } from "react";
import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();

function PatientDash() {
  const [checkPatient, setcheckPatient] = useState(false);


  //checking if it is patient 
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


//checking if it is patient
export const isPatient = () => {
  return new Promise((resolve, reject) => {
    web3Helper.deployedContracts().then((EHRcontract) => {
      console.log(EHRcontract);
      web3Helper.connectedAccount().then((account) => {
        EHRcontract.methods
          .checkPatient(account)
          .call()
          .then((r) => {
            resolve(r);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  });
};
