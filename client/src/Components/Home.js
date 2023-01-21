import React from "react";
import "../styles/Home.css";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Web3Helper } from "../Helper/web3-helper";

function Home() {
  const [account, setAccount] = useState();

  useEffect(() => {
    let web3 = new Web3Helper();
    web3.getWeb3().then(() => {
      web3.getCurrentAccount().then((id) => {
        setAccount(id);
      });
    });

    return () => {};
  }, []);

  return (
    <>
      <div className="homepageback">
        <div className="navbar">
          <div className="navbar__header">
            <img className="logo" src={logo} />
            <p>EHR APPLICATION</p>
          </div>
          <div className="d-flex">{account}</div>
          <ul className="navbar__menu">
            <li className="navbar__item">
              <Link to="/AdminDash">ADMIN</Link>
            </li>
            <li className="navbar__item">
              <a href="#">DOCTOR</a>
            </li>
            <li className="navbar__item">
              <a href="#">PATIENT</a>
            </li>
          </ul>
        </div>

        <div className="main">
          <div className="main__content">
            <p>Making Health Care Better Together..</p>
          </div>

          <div className="main__desc">
            <p className="main__desc-quotes">
              {" "}
              With the number of patients rising and the healthcare industry
              booming, there is a pressing need to implement a secure and
              immutable solution. The primary focus of this project is to use
              the novel technology of Blockchain to provide a decentralized
              tamper proof ledger which is secure and interoperable
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
