import { create } from "ipfs-http-client";

// connect to the default API address http://localhost:5001
// creating the ipfs object using the ipfs-http-client package
//https://www.npmjs.com/package/ipfs-http-client 

export class IPFS {

  getIPFS() {
    if (this.ipfs != null) {
      return this.ipfs;
    } else {
      this.ipfs = create({url:'http://localhost:5001/api/v0'});
      return this.ipfs;
    }
  }
}