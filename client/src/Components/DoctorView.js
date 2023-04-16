import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import DoctorSidebar from "./DoctorSidebar";
import DoctorViewCard from './DoctorViewCard';
import Header from "./Header";
// import { getAllPatients, getPatientDetails } from "../functionalities/doctorFunctionalities";
import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();

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

export default DoctorView;

// returns all patients struct 
export const getAllPatients = () => {
  return new Promise((resolve, reject) => {
    web3Helper.deployedContracts().then((EHRcontract) => {
      console.log(EHRcontract);
      web3Helper.connectedAccount().then(() => {
        EHRcontract.methods
          .allPatientsList()
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

// return all the patient details from ipfs
export const getPatientDetails = (listOfPateints) => {
  let patientDetails = [];

  return new Promise((resolve, reject) => {
    listOfPateints.forEach((hash) => {
      axios
        .get("http://localhost:8080/ipfs/" + hash)
        .then(function (response) {
          // handle success
          patientDetails.push(response.data);
          console.log(response);
          resolve(patientDetails);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      if (listOfPateints.length === patientDetails.length)
        resolve(patientDetails);
    });
  });
};