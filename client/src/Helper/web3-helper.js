import Web3 from "web3";

// https://web3js.readthedocs.io/en/v1.2.11/web3-eth-net.html
// https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html
// https://web3js.readthedocs.io/en/v1.2.11/web3-eth-net.html#eth-net
// https://docs.metamask.io/wallet/reference/provider-api/

const EHR = require("../contracts/EHR.json"); //imported compiled smart contracts

//using web3 to connect with metamask
// when metamask is installed, the web3 object will be injected in the window DOM

export class Web3Helper {
  web3 = null;
  contract = null;

  constructor() {
    window.ethereum.on("accountsChanged", (account) => {
      window.location.reload();
    });

    this.getWeb3().then((web3) => {
      web3.eth.net
        .getId()
        .then((id) => {
          // let contractABI = EHR.abi;
          // let network_data = EHR.networks[id]; //get network data for the deployed contracts

          if (EHR.networks[id]) {
            // let address = network_data.address;
            this.contract = new web3.eth.Contract(EHR.abi, EHR.networks[id].address); //get our deployed contracts, "address" and abi from the json file, connecting with the contracts that is deployed in ganache
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }


  // connecting with metamask, checking if window.web3 is available
  getWeb3() {
    return new Promise((resolve, reject) => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        this.web3 = window.web3;
        resolve(this.web3);
      }
    });
  }

  // retrieving the current connected account in metamask
  connectedAccount() {
    return new Promise((resolve, reject) => {
      if (this.web3) {
        this.web3.eth.getAccounts().then((accs) => {
          resolve(accs[0]);
        });
      }
    });
  }

  //getting the deployed contracts 
  deployedContracts() {
    let retry = false;
    return new Promise((resolve, reject) => {
      let check = setInterval(() => {
        if (this.contract) {
          resolve(this.contract);
          clearInterval(check);
        } else {
          if (!retry) {
            this.getContracts();
            retry = true;
          } else {
            reject(null);
          }
        }
      }, 1000);
    });
  }
}