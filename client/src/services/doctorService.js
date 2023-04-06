import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();


// checking if it is a doctor or not
//checked
export const isDoctor = () => {
  return new Promise((resolve, reject) => {
    web3Helper.getContracts().then((c) => {
      console.log(c);
      web3Helper.getCurrentAccount().then((a) => {
        c.methods
          .isDoctor(a)
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
    web3Helper.getContracts().then((c) => {
      console.log(c);
      web3Helper.getCurrentAccount().then(() => {
        c.methods
          .getAllPat()
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
//checked- little similar
export const addMedicalRecord = (data) => {
  let ipfs = new IPFS().getIPFS();
  return new Promise((resolve, reject) => {
    // adding data into ipfs
    ipfs.add(JSON.stringify(data)).then((result) => { 
      web3Helper.getContracts().then((c) => {
        console.log(c);
        console.log(data);
        web3Helper.getCurrentAccount().then((a) => {
          data.doctor = a;
          c.methods
            .addMedicalRecord(data.patient, result.path)
            .send({ from: a })
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
//checked
export const viewMedicalRecord = (id) => {
  let ipfs = new IPFS().getIPFS();
  return new Promise((resolve, reject) => {
     
      web3Helper.getContracts().then((c) => {
        console.log(c);
        console.log(id);
        
          c.methods
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
//checked
export const getDoctorDetails = () => {

  return new Promise((resolve, reject) => {
    web3Helper.getContracts().then((c) => {
        web3Helper.getCurrentAccount().then(id => {
            c.methods.getDocinfo(id).call().then(hash => {
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
