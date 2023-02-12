import "./App.css";
import Home from "./Components/Home";
// import Header from './Components/Header';
import AdminDash from "./Components/AdminDash";
import PatientDash from "./Components/PatientDash";
import DoctorDash from "./Components/DoctorDash";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DoctorDesk from "./Components/DoctorDesk";
import PatientDesk from "./Components/PatientDesk";
import ConsultationDesk from "./Components/ConsultationDesk";
import { useEffect, useState } from "react";
import { Web3Helper } from "./Helper/web3-helper";
import { IPFS } from "./Helper/ipfs-helper";
import { BiLogIn } from "react-icons/bi";

function App() {
  const [account, setAccount] = useState();

  useEffect(() => {
    let web3 = new Web3Helper();
    let ipfs = new IPFS();
    web3.getWeb3().then(() => {
      web3.getCurrentAccount().then((id) => {
        setAccount(id);
      });
    });

    ipfs = ipfs.getIPFS();

    console.log(ipfs)

    return () => {};
  }, []);
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/AdminDash" element={<AdminDash />} />

            <Route path="/DoctorDash" element={<DoctorDash />} />

            <Route path="/PatientDash" element={<PatientDash />} />

            <Route path="/DoctorDesk" element={<DoctorDesk />} />

            <Route path="/PatientDesk" element={<PatientDesk />} />

            <Route path="/Consult" element={<ConsultationDesk />} />


          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
