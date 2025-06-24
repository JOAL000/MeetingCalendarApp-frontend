import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "./Form";


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "250px",
          background: "#f8f9fa",
          padding: "16px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h3>Dashboard</h3>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("/dashboard/manage-users")}
              >
                Dashboard Home
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("/dashboard/manage-users")}
              >
                Manage Users
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("/dashboard/Form")}
              >
                Form
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "16px" }}>
        <Routes>
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="Form" element={<Form/>} />
          <Route path="*" element={<DashboardHome />} />
        </Routes>
      </main>
    </div>
  );
};

const DashboardHome = () => {
  return "Dashboard Home";
};

const ManageUsers = () => {
  return "Manage Users";
};

export default Dashboard;