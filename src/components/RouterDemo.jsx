import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const RouterDemo = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    //return <Dashboard/>;
    <div className="container">
      <h2>Home Component</h2>
      <div className="btn-group">
        <button className="btn btn-outline-danger" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  return <div className="container">Services Component</div>;
};

const About = () => {
  return <div className="container">About Component</div>;
};

const Contact = () => {
  return <div className="container">Contact Component</div>;
};

export default RouterDemo;