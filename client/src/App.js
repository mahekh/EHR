import "./App.css";
import Home from "./Components/Home";
// import Header from './Components/Header';
import AdminDash from "./Components/AdminDash";
import PatientDash from "./Components/PatientDash";
import DoctorDash from "./Components/DoctorDash";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDoc from "./Components/AdminDoc";
import AdminPatient from "./Components/AdminPatient";

function App() {
  return (
    <>
      <div className="container">

        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/AdminDash" element={<AdminDash />} />

            <Route path="/DoctorDash" element={<DoctorDash />} />

            <Route path="/PatientDash" element={<PatientDash />} />

            <Route path="/AdminDoc" element={<AdminDoc />} />

            <Route path="/AdminPatient" element={<AdminPatient/>} />
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
