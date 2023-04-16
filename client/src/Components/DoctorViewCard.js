import "../styles/ConsultCard.css";
import "../styles/MedicalReport.css";
import paticon from "../assets/pat-icon.png";
import React, { useState } from "react";
import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();

function DoctorViewCard(props) {
  const [modal, setModal] = useState(false);

  const [medRecord, setmedRecord] = useState({});

  const toggleModal = () => {
    setModal(!modal);
  };

  // viewing medical records, calling function from doctor service
  function viewRecord() {
    viewMedicalRecord(props.details.id).then((r) => {
      setmedRecord(r);
      toggleModal();
      console.log(r);
    });



  }

  return (
    <>
      <div className="consultation-wrapper">
        <div className="consultation-card">
          <div className="patient-img">
            <img className="pat-icon" src={paticon} alt="" />
          </div>

          <div className="consultation-body">
            <div className="consultation-title">
              <h2 className="patient-name">
                Patient Name: {props.details.firstName} {props.details.lastName}
              </h2>
            </div>

            <div className="consultation-description">
              <p className="patient-id">
                Patient ID: {props.details.id}
              </p>
              <p className="patient-phone">Contact: {props.details.number}</p>
              <p className="patient-email">Email: {props.details.email}</p>
            </div>
          </div>

          <div className="record-btns">
            <button className="add-rec" onClick={viewRecord}>
              VIEW REPORT
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div style={{ marginTop: "200px" }} className="display-medical">
              <div className="med-title">
                <h2>Patient Medical Record</h2>
              </div>

              <div className="diagnosis">
                <h3># Vitals</h3>
              </div>

              <div style={{ display: "flex" }}>
                <div className="display-weight">
                  <p>Weight: {medRecord.record.weight}</p>
                </div>

                <div className="display-height">
                  <p>Height: {medRecord.record.height}</p>
                </div>

                <div className="display-bp">
                  <p>Blood Pressure: {medRecord.record.bp}</p>
                </div>
              </div>

              <div className="diagnosis" style={{ display: "grid" }}>
                <h3># Diagnosis</h3>
              </div>

              <div className="display-diagnosis">
                <p>{medRecord.record.diagnosis}</p>
              </div>

              <div className="medications">
                <h3># Medications</h3>
              </div>

              <div className="medication-1" style={{ display: "flex" }}>
                <div className="display-med1">
                  <p>{medRecord.record.med1}</p>
                </div>

                <div className="display-freq1">
                  <p>Frequency: {medRecord.record.freq1}</p>
                </div>

                <div className="display-days1">
                  <p>Days: {medRecord.record.days1}</p>
                </div>
              </div>

              <div className="medication-2" style={{ display: "flex" }}>
                <div className="display-med2">
                  <p>{medRecord.record.med2}</p>
                </div>

                <div className="display-freq2">
                  <p>Frequency: {medRecord.record.freq2}</p>
                </div>

                <div className="display-days2">
                  <p>Days: {medRecord.record.days2}</p>
                </div>
              </div>

              <div className="medications">
                <h3># Recommended Clinical Test</h3>
              </div>

              <div className="display-test">
                <p>{medRecord.record.test}</p>
              </div>

              <div className="medications">
                <h3># Follow Up</h3>
              </div>

              <div className="display-test">
                <p>{medRecord.record.followup}</p>
              </div>
            </div>

            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctorViewCard;

// getting the medical record of the given patient using their id
export const viewMedicalRecord = (id) => {
  let ipfs = new IPFS().getIPFS();
  return new Promise((resolve, reject) => {
     
      web3Helper.deployedContracts().then((EHRcontract) => {
        console.log(EHRcontract);
        console.log(id);
        
        EHRcontract.methods
            .viewMedicalRecord(id) // fuction from smart contract 
            .call()
            //returns the ipfs hash "r"
            .then((r) => {
              axios
              .get("http://localhost:8080/ipfs/" + r) // 
              .then(function (response) {
                // handle success
                console.log(response);
                resolve(response.data);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
            })
            .catch((err) => {
              reject(err);
            });
      });
    });
};
