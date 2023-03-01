import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();

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

export const addMedicalRecord = (data) => {
  let ipfs = new IPFS().getIPFS();
  return new Promise((resolve, reject) => {
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

export const viewMedicalRecord = (id) => {
  let ipfs = new IPFS().getIPFS();
  return new Promise((resolve, reject) => {
     
      web3Helper.getContracts().then((c) => {
        console.log(c);
        console.log(id);
        web3Helper.getCurrentAccount().then((a) => {
          c.methods
            .viewMedicalRecord(id)
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
