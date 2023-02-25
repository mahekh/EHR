import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";

const web3Helper = new Web3Helper();

export const addDoctorfunction = (data) => {
  let ipfs = new IPFS().getIPFS();
  return new Promise((resolve, reject) => {
    ipfs.add(JSON.stringify(data)).then((result) => {
      web3Helper.getContracts().then((c) => {
        console.log(c)
        web3Helper.getCurrentAccount().then((a) => {
          c.methods.addDoctor(data.id, result.path)
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

export const AddPatientfunction = (data) => {
    let ipfs = new IPFS().getIPFS();
    return new Promise((resolve, reject) => {
      ipfs.add(JSON.stringify(data)).then((result) => {
        web3Helper.getContracts().then((c) => {
          console.log(c)
          web3Helper.getCurrentAccount().then((a) => {
            c.methods.addPatient(data.id, result.path)
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
