import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { viewMedicalRecord } from "../functionalities/patientFunctionalities";
import "../styles/ViewReport.css";
import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();


function ViewReport() {
  const [patMedrec, setpatMedrec] = useState({});
  const [load, setload] = useState(false);


  //getting the view medical record function from patient service 
  useEffect(() => {
    viewMedicalRecord().then((v) => {
      setpatMedrec(v);
      console.log(v);
      setload(true);
    });
    return () => {};
  }, []);

  return (
    <>
      {load ? (
        <div className="display-medical">
          <div className="med-title">
            <h2>Patient Medical Record</h2>
          </div>

          <div className="diagnosis">
            <h3># Vitals</h3>
          </div>

          <div style={{ display: "flex" }}>
            <div className="display-weight">
              <p>Weight: {patMedrec.record.weight}</p>
            </div>

            <div className="display-height">
              <p>Height: {patMedrec.record.height}</p>
            </div>

            <div className="display-bp">
              <p>Blood Pressure: {patMedrec.record.bp}</p>
            </div>
          </div>

          <div className="diagnosis" style={{ display: "grid" }}>
            <h3># Diagnosis</h3>
          </div>

          <div className="display-diagnosis">
            <p>{patMedrec.record.diagnosis}</p>
          </div>

          <div className="medications">
            <h3># Medications</h3>
          </div>

          <div className="medication-1" style={{ display: "flex" }}>
            <div className="display-med1">
              <p>{patMedrec.record.med1}</p>
            </div>

            <div className="display-freq1">
              <p>Frequency: {patMedrec.record.freq1}</p>
            </div>

            <div className="display-days1">
              <p>Days: {patMedrec.record.days1}</p>
            </div>
          </div>

          <div className="medication-2" style={{ display: "flex" }}>
            <div className="display-med2">
              <p>{patMedrec.record.med2}</p>
            </div>

            <div className="display-freq2">
              <p>Frequency: {patMedrec.record.freq2}</p>
            </div>

            <div className="display-days2">
              <p>Days: {patMedrec.record.days2}</p>
            </div>
          </div>

          <div className="medications">
            <h3># Recommended Clinical Test</h3>
          </div>

          <div className="display-test">
            <p>{patMedrec.record.test}</p>
          </div>

          <div className="medications">
            <h3># Follow Up</h3>
          </div>

          <div className="display-test">
            <p>{patMedrec.record.followup}</p>
          </div>
        </div>
      ) : (
        <div className="d-flex w-100 flex-row justify-content-center align-items-center text-danger">
          <span className="h4 text-center">Loading Medical Records</span>
          <progress></progress>
        </div>
      )}
    </>
  );
}

export default ViewReport;

// getting the medical record from the ipfs hash
export const viewMedicalRecord = () => {
  return new Promise((resolve, reject) => {
     
      web3Helper.deployedContracts().then((EHRcontract) => {
        console.log(EHRcontract);
        web3Helper.connectedAccount().then((a) => {
          EHRcontract.methods
            .viewMedicalRecord(a)
            .call()
            .then((r) => {
              axios
              .get("http://localhost:8080/ipfs/" + r)
              .then(function (response) {
                // handle success
                console.log(response);
                resolve(response.data);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .finally(function () {
                // always executed
              });
            })
            .catch((err) => {
              reject(err);
            });
        });
      });
    });
};