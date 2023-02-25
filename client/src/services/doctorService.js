import { IPFS } from "../Helper/ipfs-helper";
import { Web3Helper } from "../Helper/web3-helper";

const web3Helper = new Web3Helper();
let ipfs = new IPFS().getIPFS();

export const isDoctor = () => {
  
    return new Promise((resolve,reject) => {
        
        web3Helper.getContracts().then((c) => {
            console.log(c)
            web3Helper.getCurrentAccount().then((a) => {
              c.methods.isDoctor(a)
                .call()
                .then((r) => {
                  resolve(r);
                })
                .catch((err) => {
                  reject(err);
                });
            });
          });
        
    })
}

export const getAllPatients = () => {
  
    return new Promise((resolve,reject) => {
        
        web3Helper.getContracts().then((c) => {
            console.log(c)
            web3Helper.getCurrentAccount().then(() => {
              c.methods.getAllPat()
                .call()
                .then((r) => {
                  resolve(r);
                })
                .catch((err) => {
                  reject(err);
                });
            });
          });
        
    })
}

