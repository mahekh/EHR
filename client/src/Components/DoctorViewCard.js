import "../styles/ConsultCard.css";
import "../styles/MedicalReport.css";
import paticon from "../assets/pat-icon.png";
import React, { useState } from "react";
import { viewMedicalRecord } from "../services/doctorService";

function DoctorViewCard(props) {
  const [modal, setModal] = useState(false);

  const [medRecord, setmedRecord] = useState({});

  const toggleModal = () => {
    setModal(!modal);
  };

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
                Patient ID: 0x6Da0704CA1472f07AfA0046766370f854D20D86C
              </p>
              <p className="patient-phone">Contact: 0504752853</p>
              <p className="patient-email">Email: test@test.com</p>
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
                  <p>Height: 180 cm</p>
                </div>

                <div className="display-bp">
                  <p>Blood Pressure: 80/110</p>
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
                  <p>Medicine 1</p>
                </div>

                <div className="display-freq1">
                  <p>Frequency: 1-1-1</p>
                </div>

                <div className="display-days1">
                  <p>Days: 2</p>
                </div>
              </div>

              <div className="medication-2" style={{ display: "flex" }}>
                <div className="display-med2">
                  <p>Medicine 1</p>
                </div>

                <div className="display-freq2">
                  <p>Frequency: 1-1-1</p>
                </div>

                <div className="display-days2">
                  <p>Days: 2</p>
                </div>
              </div>

              <div className="medications">
                <h3># Recommended Clinical Test</h3>
              </div>

              <div className="display-test">
                <p>Blood Test</p>
              </div>

              <div className="medications">
                <h3># Follow Up</h3>
              </div>

              <div className="display-test">
                <p>After 1 week</p>
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
