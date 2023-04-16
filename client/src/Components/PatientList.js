import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
// import { getAllpatientsAdmin } from '../functionalities/adminFunctionalities';
import AdminSidebar from './AdminSidebar';
import Header from './Header'
import PatientCard from './PatientCard';
import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";

const web3Helper = new Web3Helper();  // using web3 


function PatientList() 
{

  const [patDetails, setpatDetails] = useState([])

  useEffect(() => {
    
    //getting all the patients in the network by using the function from admin service 
    getAllpatientsAdmin().then(p => {

      setpatDetails(p)
      console.log(p)
    })
    
    return () => {
      
    }
  }, [])


  return (
    <>
    <div style={{display:'flex'}}>
        <AdminSidebar/>
      <div className='main-container'>
        <Header roles="Admin"/> 
        <div style={{display:'grid'}}>
        <p style={{marginLeft:'30px', marginTop:'20px', fontWeight:'bolder',fontFamily:'Permanent Marker',fontSize:'20px'}}>The list of Patients can be found here</p>
          {patDetails.map((pat, index) => 
            <PatientCard details={pat} key={index}/>
          )}
          
        </div>
      </div>   

      
    </div> 
    </>

  )
}


export default PatientList;

// getting all the list of patients from blockchain, it will retrieve all the patient ipfs hash 
export const getAllpatientsAdmin = () => {
  let patientDetails = [];

  return new Promise((resolve, reject) => {
    web3Helper.deployedContracts().then((EHRcontract) => {
      EHRcontract.methods
        .allPatientsList()
        .call()
        .then((listOfPateints) => {
          listOfPateints.forEach((pat) => {
            axios
              .get("http://localhost:8080/ipfs/" + pat.patient_ipfs_hash)
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
    });
  });
};