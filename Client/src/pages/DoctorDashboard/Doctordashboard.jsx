import React, { useState } from "react";
import PatientModal from "../../components/PatientModal";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Topbar from "../../components/Topbar";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
  const [filter, setFilter] = useState("yearly");
  const [viewType, setViewType] = useState("all");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const allPatients = [
    {
      name: "Aarav Mehra",
      gender: "Male",
      weight: "70 kg",
      age: 58,
      condition: "Stroke",
    },
    {
      name: "Priya Sharma",
      gender: "Female",
      weight: "65 kg",
      age: 62,
      condition: "Parkinson",
    },
    {
      name: "Ravi Kumar",
      gender: "Male",
      weight: "78 kg",
      age: 72,
      condition: "Elderly",
    },
    {
      name: "Sneha Joshi",
      gender: "Female",
      weight: "60 kg",
      age: 67,
      condition: "Stroke",
    },
    {
      name: "Vikram Chauhan",
      gender: "Male",
      weight: "85 kg",
      age: 75,
      condition: "Elderly",
    },
  ];

  const activePatients = [
    "Aarav Mehra",
    "Sneha Joshi",
    "Neha Reddy",
    "Ravi Kumar",
  ];

  const mergedPatients = [
    ...allPatients,
    {
      name: "Neha Reddy",
      gender: "Female",
      weight: "68 kg",
      age: 60,
      condition: "Parkinson",
    },
  ];

  const filteredPatients =
    viewType === "active"
      ? mergedPatients.filter((p) => activePatients.includes(p.name))
      : mergedPatients;

  const chartDataMap = {
    yearly: [
      { label: "Jan", active: 150, sessions: 200 },
      { label: "Feb", active: 180, sessions: 300 },
      { label: "Mar", active: 140, sessions: 250 },
      { label: "Apr", active: 160, sessions: 400 },
      { label: "May", active: 130, sessions: 280 },
      { label: "Jun", active: 170, sessions: 320 },
      { label: "Jul", active: 120, sessions: 310 },
      { label: "Aug", active: 200, sessions: 350 },
      { label: "Sep", active: 90, sessions: 370 },
      { label: "Oct", active: 100, sessions: 260 },
      { label: "Nov", active: 150, sessions: 310 },
      { label: "Dec", active: 180, sessions: 300 },
    ],
    monthly: [
      { label: "1", active: 10, sessions: 12 },
      { label: "5", active: 15, sessions: 20 },
      { label: "10", active: 12, sessions: 18 },
      { label: "15", active: 14, sessions: 22 },
      { label: "20", active: 9, sessions: 17 },
      { label: "25", active: 20, sessions: 25 },
      { label: "30", active: 18, sessions: 23 },
    ],
    weekly: [
      { label: "Week 1", active: 40, sessions: 60 },
      { label: "Week 2", active: 55, sessions: 70 },
      { label: "Week 3", active: 30, sessions: 45 },
      { label: "Week 4", active: 65, sessions: 85 },
    ],
  };

  const chartData = chartDataMap[filter];

  return (
    <div>
      <Topbar />

      <div className="dashboard-container">
        {/* Header */}
        <div className="header-box" style={{ marginTop: "50px" }}>
          <h1>Hello Dr. Millind Kahile</h1>
          <div className="header-controls">
            <select
              className="chart-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="yearly">This Year</option>
              <option value="monthly">This Month</option>
              <option value="weekly">This Week</option>
            </select>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              alt="icon"
            />
          </div>
        </div>

        {/* Chart */}
        <div className="chart-box">
          <h2>Patient Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="active"
                stroke="#1D4ED8"
                name="Active Patients"
              />
              <Line
                type="monotone"
                dataKey="sessions"
                stroke="#10B981"
                name="Sessions Completed"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Patients Table */}
       <div className="table-box">
  <div className="table-header">
    <h3>Patients</h3>
    <select
      value={viewType}
      onChange={(e) => setViewType(e.target.value)}
      className="chart-filter"
    >
      <option value="all">All Patients</option>
      <option value="active">Active Patients</option>
    </select>
  </div>

  {/* Table Header */}
  <div className="table-head-row">
    <div className="col col-img">Photo</div>
    <div className="col">Name</div>
    <div className="col">Gender</div>
    <div className="col">Weight</div>
    <div className="col">Age</div>
    <div className="col">Condition</div>
    <div className="col col-action">Action</div>
  </div>

  {/* Table Rows */}
  <div className="table-scroll">
    {filteredPatients.map((p, i) => (
      <div key={i} className="table-row">
        <div className="col col-img">
          <img src="https://placehold.co/30" alt="pfp" />
        </div>
        <div className="col " >
          {p.name}
        </div>
        <div className="col">{p.gender}</div>
        <div className="col">{p.weight}</div>
        <div className="col">{p.age}</div>
        <div className="col">{p.condition}</div>
        <div className="col col-action">
          <button className="view-button" onClick={() => setSelectedPatient(p)}>
            View
          </button>
        </div>
      </div>
    ))}
  </div>
</div>



        {/* Patient Modal */}
        {selectedPatient && (
          <PatientModal
            patient={selectedPatient}
            onClose={() => setSelectedPatient(null)}
            chartData={chartData}
          />
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;
