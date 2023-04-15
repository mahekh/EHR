import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();


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