import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "./Form";
import List from "./List";


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
                onClick={() => navigate("/dashboard/*")}
              >
                Dashboard Home
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
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("/dashboard/List")}
              >
                List
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "16px" }}>
        <Routes>
          <Route path="*" element={<DashboardHome/>} />
          <Route path="Form" element={<Form/>} />
          <Route path="List" element={<List/>} />
        </Routes>
      </main>
    </div>
  );
};

const DashboardHome = () => {
  return "Dashboard Home";
};


export default Dashboard;