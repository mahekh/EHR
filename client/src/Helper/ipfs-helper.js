import { create } from "ipfs-http-client";

// connect to the default API address http://localhost:5001

export class IPFS {
  ipfs = null;
  constructor() {}

  getIPFS() {
    if (this.ipfs != null) {
      return this.ipfs;
    } else {
      this.ipfs = create();
      return this.ipfs;
    }
  }
}
