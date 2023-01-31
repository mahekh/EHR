import "./App.css";
import Home from "./Components/Home";
// import Header from './Components/Header';
import AdminDash from "./Components/AdminDash";
import PatientDash from "./Components/PatientDash";
import DoctorDash from "./Components/DoctorDash";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
