import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import DoctorCard from './DoctorCard';
import Header from './Header'
import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";

const web3Helper = new Web3Helper();  // using web3 


function DoctorList() 
{

  const [Docdetails, setDocdetails] = useState([])

  useEffect(() => {
    
    getAllDoctorsAdmin().then(d => {
      setDocdetails(d)
      console.log(d)
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
          <p style={{marginLeft:'30px', marginTop:'20px', fontWeight:'bolder',fontFamily:'Permanent Marker',fontSize:'20px'}}>The list of Doctors can be found here</p>
          {Docdetails.map((doc,index) =>
          <DoctorCard details={doc} key={index}/> )}
          

        </div>
      </div>   

      
    </div> 
    </>

  )
}


export default DoctorList;

export const getAllDoctorsAdmin = () => {
  let DoctorDetails = [];

  return new Promise((resolve, reject) => {
    web3Helper.deployedContracts().then((EHRcontract) => {
      EHRcontract.methods
        .allDoctorsList()
        .call()
        .then((listOfDoctors) => {
          console.log(listOfDoctors)
          listOfDoctors.forEach((doc) => {
            axios
              .get("http://localhost:8080/ipfs/" + doc.doctor_ipfs_hash)
              .then(function (response) {
                // handle success
                DoctorDetails.push(response.data);
                console.log(response);
                resolve(DoctorDetails);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .finally(function () {
                // always executed
              });
            if (listOfDoctors.length === DoctorDetails.length)
              resolve(DoctorDetails);
          });
        });
    });
  });
};