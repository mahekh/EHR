import Web3 from "web3";
export class Web3Helper {
  web3 = null;

  constructor(){
    
  }
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

  getCurrentAccount() {
    return new Promise((resolve, reject) => {
      if (this.web3) {
        this.web3.eth.getAccounts().then((accs) => {
          resolve(accs[0]);
        });
      }
    });
  }
}
