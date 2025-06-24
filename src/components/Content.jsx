import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Content = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
                    <div className="position-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active text-white" href="#">
                                    <i className="bi bi-house-door"></i> Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="bi bi-people"></i> Users
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="bi bi-bar-chart"></i> Analytics
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="bi bi-gear"></i> Settings
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-white bg-primary mb-3">
                                <div className="card-header">Card 1</div>
                                <div className="card-body">
                                    <h5 className="card-title">Primary Card</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-white bg-success mb-3">
                                <div className="card-header">Card 2</div>
                                <div className="card-body">
                                    <h5 className="card-title">Success Card</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-white bg-warning mb-3">
                                <div className="card-header">Card 3</div>
                                <div className="card-body">
                                    <h5 className="card-title">Warning Card</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Content;