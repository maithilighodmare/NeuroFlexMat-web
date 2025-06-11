import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("yearly");

  const patients = [
    {
      name: "Daniel Smith",
      gender: "Male",
      weight: "75 kg",
      age: 60,
      condition: "Stroke",
    },
    {
      name: "Aron",
      gender: "Female",
      weight: "69 kg",
      age: 70,
      condition: "Parkinson",
    },
    {
      name: "Ray Clayton",
      gender: "Female",
      weight: "70 kg",
      age: 61,
      condition: "Stroke",
    },
    {
      name: "Eric Woods",
      gender: "Male",
      weight: "88 kg",
      age: 77,
      condition: "Elderly",
    },
    {
      name: "Smith Jay",
      gender: "Male",
      weight: "79 kg",
      age: 75,
      condition: "Elderly",
    },
  ];

  const activeUsers = [
    {
      name: "Daniel Smith",
      gender: "Male",
      weight: "75 kg",
      age: 60,
      condition: "Stroke",
    },
    {
      name: "Sana Meri",
      gender: "Female",
      weight: "69 kg",
      age: 59,
      condition: "Parkinson",
    },
    {
      name: "Ray Clayton",
      gender: "Female",
      weight: "70 kg",
      age: 61,
      condition: "Stroke",
    },
    {
      name: "Eric Woods",
      gender: "Male",
      weight: "88 kg",
      age: 77,
      condition: "Elderly",
    },
    {
      name: "Monica",
      gender: "Female",
      weight: "77 kg",
      age: 79,
      condition: "Elderly",
    },
  ];

  const yearlyData = [
    { month: "Jan", active: 150, sessions: 200 },
    { month: "Feb", active: 180, sessions: 300 },
    { month: "Mar", active: 140, sessions: 250 },
    { month: "Apr", active: 160, sessions: 400 },
    { month: "May", active: 130, sessions: 280 },
    { month: "Jun", active: 170, sessions: 320 },
    { month: "Jul", active: 120, sessions: 310 },
    { month: "Aug", active: 200, sessions: 350 },
    { month: "Sep", active: 90, sessions: 370 },
    { month: "Oct", active: 100, sessions: 260 },
    { month: "Nov", active: 150, sessions: 310 },
    { month: "Dec", active: 180, sessions: 300 },
  ];

  const weeklyData = [
    { week: "Week 1", active: 40, sessions: 60 },
    { week: "Week 2", active: 55, sessions: 70 },
    { week: "Week 3", active: 30, sessions: 45 },
    { week: "Week 4", active: 65, sessions: 85 },
  ];

  const monthlyData = [
    { day: "1", active: 10, sessions: 12 },
    { day: "5", active: 15, sessions: 20 },
    { day: "10", active: 12, sessions: 18 },
    { day: "15", active: 14, sessions: 22 },
    { day: "20", active: 9, sessions: 17 },
    { day: "25", active: 20, sessions: 25 },
    { day: "30", active: 18, sessions: 23 },
  ];

  // Determine chart data based on filter
  let chartData = yearlyData;
  let xKey = "month";

  if (filter === "weekly") {
    chartData = weeklyData;
    xKey = "week";
  } else if (filter === "monthly") {
    chartData = monthlyData;
    xKey = "day";
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="header-box">
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
            <XAxis dataKey={xKey} />
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

      {/* Tables */}
      <div className="tables-section">
        {/* All Patients */}
        <div className="table-box">
          <div className="table-header">
            <h3>All Patients</h3>
            <span>see all</span>
          </div>
          <div className="table-scroll">
            {patients.map((p, i) => (
              <div key={i} className="table-row">
                <img src="https://placehold.co/30" alt="pfp" />
                <span>{p.name}</span>
                <span>{p.gender}</span>
                <span>{p.weight}</span>
                <span>{p.age}</span>
                <span>{p.condition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Users */}
        <div className="table-box">
          <div className="table-header">
            <h3>Active Users</h3>
            <span>see all</span>
          </div>
          <div className="table-scroll">
            {activeUsers.map((p, i) => (
              <div key={i} className="table-row">
                <img src="https://placehold.co/30" alt="pfp" />
                <span
                  className="clickable-name"
                  onClick={() =>
                    navigate("/patientdashboard", {
                      state: { user: p },
                    })
                  }
                >
                  {p.name}
                </span>
                <span>{p.gender}</span>
                <span>{p.weight}</span>
                <span>{p.age}</span>
                <span>{p.condition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
