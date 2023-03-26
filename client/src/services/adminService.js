import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";
import axios from "axios";

const web3Helper = new Web3Helper();  // using web3 

//functionalities for the admin



//checking whether its connected as admin account
export const isAdmin = () => {
  return new Promise((resolve, reject) => {
    web3Helper.getContracts().then((c) => {
      console.log(c);
      web3Helper.getCurrentAccount().then((a) => {
        c.methods
          .checkAdmin()
          .call({ from: a })
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


//adding doctor 
export const addDoctorfunction = (data) => {
  let ipfs = new IPFS().getIPFS();
  return new Promise((resolve, reject) => {
    ipfs.add(JSON.stringify(data)).then((result) => {
      web3Helper.getContracts().then((c) => {
        console.log(c);
        web3Helper.getCurrentAccount().then((a) => {
          c.methods
            .addDoctor(data.id, result.path)
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


//adding patient 
export const AddPatientfunction = (data) => {
  let ipfs = new IPFS().getIPFS();
  return new Promise((resolve, reject) => {
    ipfs.add(JSON.stringify(data)).then((result) => {
      web3Helper.getContracts().then((c) => {
        console.log(c);
        web3Helper.getCurrentAccount().then((a) => {
          c.methods
            .addPatient(data.id, result.path)
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

// getting all the list of patients from blockchain, it will retrieve all the patient ipfs hash 
export const getAllpatientsAdmin = () => {
  let patientDetails = [];

  return new Promise((resolve, reject) => {
    web3Helper.getContracts().then((c) => {
      c.methods
        .getAllPat()
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


// getting all the list of doctors from blockchain, it will retrieve all the doctors ipfs hash 
export const getAllDoctorsAdmin = () => {
  let DoctorDetails = [];

  return new Promise((resolve, reject) => {
    web3Helper.getContracts().then((c) => {
      c.methods
        .getAllDoc()
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

// deleting the doctor 
export const deleteDoctorfunction = (id) => {

  return new Promise((resolve, reject) => {
   
      web3Helper.getContracts().then((c) => {
        console.log(c);
        web3Helper.getCurrentAccount().then((a) => {
          c.methods
            .deleteDoc(id)
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
};

// deleting the patient
export const deletePatientfunction = (id) => {
  
  return new Promise((resolve, reject) => {
    
      web3Helper.getContracts().then((c) => {
        console.log(c);
        web3Helper.getCurrentAccount().then((a) => {
          c.methods
            .deletePat(id)
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
};
