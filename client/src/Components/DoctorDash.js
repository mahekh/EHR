import React, { useState } from "react";
import { useEffect } from "react";
// import { isDoctor } from "../functionalities/doctorFunctionalities";
import Docprofile from "./Docprofile";
import DoctorSidebar from "./DoctorSidebar";
import Header from "./Header";
import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();



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

export const isDoctor = () => {
  return new Promise((resolve, reject) => {
    web3Helper.deployedContracts().then((EHRcontract) => {
      console.log(EHRcontract);
      web3Helper.connectedAccount().then((account) => {
        EHRcontract.methods
          .checkDoctor(account)
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
