import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";
const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();


//checking if it is patient
export const isPatient = () => {
  return new Promise((resolve, reject) => {
    web3Helper.getContracts().then((c) => {
      web3Helper.getCurrentAccount().then((a) => {
        c.methods.isPatient(a).call().then((r) => {
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
    web3Helper.getContracts().then((c) => {
        web3Helper.getCurrentAccount().then(id => {
            c.methods.getPatinfo(id).call().then(hash => {
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
     
      web3Helper.getContracts().then((c) => {
        web3Helper.getCurrentAccount().then((a) => {
          c.methods.viewMedicalRecord(a).call().then((r) => {
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