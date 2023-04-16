import React from 'react'
import "../styles/DocProfile.css";
import paticon from "../assets/pat-icon.png";
// import { getPatientDetails } from '../functionalities/patientFunctionalities';
import { useEffect } from 'react';
import { useState } from 'react';
import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();

function PatProfile() {

  const [patProf, setpatProf] = useState({});


  // getting the patient details by using the function in patient service
  useEffect(() => {
    getPatientDetails().then(p => {
      console.log(p);
      setpatProf(p);
    })
  
    return () => {
      
    }
  }, [])
  


  return (
    
    <>
      <div className='main-profile' style={{display: 'flex'}}>
          

          <div className='patient-img'>
            <img className='pat-icon' src={paticon} alt="" />
          </div>

          <div className="profile"> 

            <div className="name-profile" style={{display: 'flex'}}>
              <div className='full-name'>
                <p>Full Name: </p>
              </div>

              <div className='name'>
                {patProf.firstName} {patProf.lastName}
              </div>
            </div>

            <div className='prof-id' style={{display: 'flex'}}>
              <div className='title-id'>
                <p>Patient ID:  </p>
              </div>

              <div className='prof-doc-id'>
                <p>{patProf.id}</p>
              </div>
            </div>

            <div className='prof-email' style={{display: 'flex'}}>
              <div className='title-email'>
                <p>Email: </p>
              </div>

              <div className='prof-doc-email'>
                <p>{patProf.email}</p>
              </div>
            </div>

            <div className='prof-number' style={{display: 'flex'}}>
              <div className='title-number'>
                <p>Number: </p>
              </div>

              <div className='prof-doc-number'>
                <p>{patProf.number}</p>
              </div>
            </div>

            <div className='prof-city' style={{display: 'flex'}}>
              <div className='title-city'>
                <p>City: </p>
              </div>

              <div className='prof-doc-city'>
                <p>{patProf.city}</p>
              </div>
            </div>

            <div className='prof-country' style={{display: 'flex'}}>
              <div className='title-country'>
                <p>Country: </p>
              </div>

              <div className='prof-doc-country'>
                <p>{patProf.country}</p>
              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default PatProfile;

// getting the patient detail from ipfs hash
export const getPatientDetails = () => {

  return new Promise((resolve, reject) => {
    web3Helper.deployedContracts().then((EHRcontract) => {
        web3Helper.connectedAccount().then(id => {
          EHRcontract.methods.patientInformation(id).call().then(hash => {
                axios
                .get("http://localhost:8080/ipfs/" + hash)
                .then(function (response) {
                  // handle success
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
            })
        })
    
  });
};