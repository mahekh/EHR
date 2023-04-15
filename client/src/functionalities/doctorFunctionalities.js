import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();


// checking if it is a doctor or not
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

// adding medical record 
export const addMedicalRecord = (data) => {
  let ipfs = new IPFS().getIPFS();
  return new Promise((resolve, reject) => {
    // adding data into ipfs
    ipfs.add(JSON.stringify(data)).then((result) => { 
      web3Helper.deployedContracts().then((EHRcontract) => {
        console.log(EHRcontract);
        console.log(data);
        web3Helper.connectedAccount().then((account) => {
          data.doctor = account;
          EHRcontract.methods
            .addMedicalRecord(data.patient, result.path)
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
  });
};

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

// get doctor details from ipfs 
export const getDoctorDetails = () => {

  return new Promise((resolve, reject) => {
    web3Helper.deployedContracts().then((EHRcontract) => {
        web3Helper.connectedAccount().then(id => {
          EHRcontract.methods.doctorInformation(id).call().then(hash => {
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