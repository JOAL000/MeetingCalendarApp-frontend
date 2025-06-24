import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
//import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="nav-link" to="/">
                    <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" width="30" height="30" alt="Bootstrap Logo" />
                    Home
                    </Link>
                    <ul className="navbar-nav" lift>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Dashboard">
                        Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">
                        About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Services">
                        Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                        Contact
                        </Link>
                    </li>
                    </ul>
               
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-person"></i> Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-box-arrow-in-right"></i> Login</a>
                        </li>
                    </ul>
            </div>
        </nav>
    );
};

export default Navbar;