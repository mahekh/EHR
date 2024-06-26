import "../styles/ConsultCard.css";
import "../styles/MedicalReport.css";
import paticon from "../assets/pat-icon.png";
import React, { useState } from "react";

import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();

function ConsultCard(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bp, setBP] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const [med1, setMed1] = useState("");
  const [freq1, setFreq1] = useState("");
  const [days1, setDays1] = useState("");

  const [med2, setMed2] = useState("");
  const [freq2, setFreq2] = useState("");
  const [days2, setDays2] = useState("");

  const [test, setTest] = useState("");
  const [followup, setFollowup] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let MedRecord = {
      date: "",
      record: {},
      doctor: "",
      patient: "",
    };
    const patient_report = {
      weight,
      height,
      bp,
      diagnosis,
      med1,
      med2,
      freq1,
      freq2,
      days1,
      days2,
      test,
      followup,
    };
    console.log(patient_report);
    MedRecord.date = new Date().toString();
    MedRecord.doctor = "";
    MedRecord.patient = props.details.id;
    MedRecord.record = patient_report;

    let ipfs = new IPFS().getIPFS();
    return new Promise((resolve, reject) => {
    // adding data into ipfs
    ipfs.add(JSON.stringify(MedRecord)).then((result) => { 
      web3Helper.deployedContracts().then((EHRcontract) => {
        console.log(EHRcontract);
        console.log(MedRecord);
        web3Helper.connectedAccount().then((account) => {
          MedRecord.doctor = account;
          EHRcontract.methods
            .addMedicalRecord(MedRecord.patient, result.path)
            .send({ from: account })
            .on("confirmation", (r) => {
              resolve(r);
            })
            .on("error", (err) => {
              reject(err);
            });
        });
      });
    });
  }).then((r) => {
      console.log("Doctor Added the medical record");
    });
  };

  return (
    <>
      <div className="consultation-wrapper">
        <div className="consultation-card">
          <div className="patient-img">
            <img className="pat-icon" src={paticon} alt="" />
          </div>

          <div className="consultation-body">
            <div className="consultation-title">
              {/* props.details.fname, etc... */}
              <h2 className="patient-name">
                Patient Name: {props.details.firstName} {props.details.lastName}
              </h2>
            </div>

            <div className="consultation-description">
              <p className="patient-id">Patient ID: {props.details.id}</p>
              <p className="patient-phone">Contact: {props.details.number}</p>
              <p className="patient-email">Email: {props.details.email}</p>
            </div>
          </div>

          <div className="record-btns">
            <button className="add-rec" onClick={toggleModal}>
              CONSULT
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="medical-form">
              <div className="patient-info">
                <div className="patient-wrapper">
                  <div className="patient-info-card">
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
                  </div>
                </div>
              </div>

              <div className="medical-body">
                <div className="med-title">
                  <h2>Patient Medical Record</h2>
                </div>

                <div className="diagnosis">
                  <h3># Vitals</h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <input
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
                    id="weight"
                    className="weight"
                    type="text"
                    placeholder="Weight (Kgs)"
                    name="weight"
                  />

                  <input
                    onChange={(e) => setHeight(e.target.value)}
                    value={height}
                    id="height"
                    className="height"
                    type="text"
                    placeholder="Height (cms)"
                    name="height"
                  />

                  <input
                    onChange={(e) => setBP(e.target.value)}
                    value={bp}
                    id="bp"
                    className="bp"
                    type="text"
                    placeholder="Blood Pressure"
                    name="bp"
                  />

                  <div className="diagnosis">
                    <h3># Diagnosis</h3>
                  </div>

                  <textarea
                    onChange={(e) => setDiagnosis(e.target.value)}
                    value={diagnosis}
                    className="diagnosis-sec"
                  />

                  <div className="medications">
                    <h3># Medications</h3>
                  </div>

                  <div className="medication-1">
                    <input
                      onChange={(e) => setMed1(e.target.value)}
                      value={med1}
                      id="med-1"
                      className="medicine-1"
                      type="text"
                      placeholder="Medicine Name"
                      name="med-1"
                    />

                    <select
                      onChange={(e) => setFreq1(e.target.value)}
                      value={freq1}
                      className="frequency1"
                    >
                      <option>Frequency</option>
                      <option value="1-1-1">1-1-1</option>
                      <option value="1-1-0">1-1-0</option>
                      <option value="1-0-1">1-0-1</option>
                      <option value="1-0-0">1-0-0</option>
                      <option value="0-1-1">0-1-1</option>
                      <option value="0-1-0">0-1-0</option>
                      <option value="0-0-1">0-0-1</option>
                    </select>

                    <select
                      onChange={(e) => setDays1(e.target.value)}
                      value={days1}
                      className="no-of-days1"
                    >
                      <option>No. of. Days</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </div>

                  <div className="medication-2">
                    <input
                      onChange={(e) => setMed2(e.target.value)}
                      value={med2}
                      id="med-2"
                      className="medicine-2"
                      type="text"
                      placeholder="Medicine Name"
                      name="med-2"
                    />

                    <select
                      onChange={(e) => setFreq2(e.target.value)}
                      value={freq2}
                      className="frequency2"
                    >
                      <option>Frequency</option>
                      <option value="1-1-1">1-1-1</option>
                      <option value="1-1-0">1-1-0</option>
                      <option value="1-0-1">1-0-1</option>
                      <option value="1-0-0">1-0-0</option>
                      <option value="0-1-1">0-1-1</option>
                      <option value="0-1-0">0-1-0</option>
                      <option value="0-0-1">0-0-1</option>
                    </select>

                    <select
                      onChange={(e) => setDays2(e.target.value)}
                      value={days2}
                      className="no-of-days2"
                    >
                      <option>No. of. Days</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </div>

                  <div className="medications">
                    <h3># Recommended Clinical Test</h3>
                  </div>

                  <select
                    onChange={(e) => setTest(e.target.value)}
                    value={test}
                    className="clinical-test"
                  >
                    <option>Clinical Test</option>
                    <option value="Urinalysis">Urinalysis</option>
                    <option value="Blood Test">Blood Test</option>
                    <option value="Pathology Test">Pathology Test</option>
                    <option value="Ultrasound">Ultrasound</option>
                    <option value="X-ray">X-ray</option>
                    <option value="CT Scan">CT Scan</option>
                  </select>

                  <div className="medications">
                    <h3># Follow Up</h3>
                  </div>

                  <select
                    onChange={(e) => setFollowup(e.target.value)}
                    value={followup}
                    className="clinical-test"
                  >
                    <option>Follow Up</option>
                    <option value="After 1 week">After 1 week</option>
                    <option value="10 Days">10 Days</option>
                    <option value="After 2 weeks">After 2 weeks</option>
                    <option value="After 1 month">After 1 month</option>
                  </select>

                  <button className="save">SAVE REPORT</button>
                </form>
                <button className="close-modal" onClick={toggleModal}>
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConsultCard;
