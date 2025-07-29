// src/components/PatientModal.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./PatientModal.css";

// Helper function to generate different chart data
const generateChartData = (seed) => {
  const base = seed.charCodeAt(0) % 30; // Use the first char to vary data
  return [
    { day: "Mon", progress: base + 10 },
    { day: "Tue", progress: base + 20 },
    { day: "Wed", progress: base + 15 },
    { day: "Thu", progress: base + 25 },
    { day: "Fri", progress: base + 30 },
  ];
};

const PatientModal = ({ patient, onClose }) => {
  const chartData = generateChartData(patient.name || patient.id || "A");

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <h2>{patient.name}'s Details</h2>
        <div className="patient-info">
          <div className="info-column">
            <p>
              <strong>Gender:</strong> {patient.gender}
            </p>
            <p>
              <strong>Age:</strong> {patient.age}
            </p>
          </div>
          <div className="info-column">
            <p>
              <strong>Weight:</strong> {patient.weight}
            </p>
            <p>
              <strong>Condition:</strong> {patient.condition}
            </p>
          </div>
        </div>

        <div className="patient-graph">
          <h3>Progress Chart</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#3B82F6"
                name="Progress (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
