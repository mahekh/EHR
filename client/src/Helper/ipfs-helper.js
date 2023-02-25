import { create } from "ipfs-http-client";

// connect to the default API address http://localhost:5001

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
