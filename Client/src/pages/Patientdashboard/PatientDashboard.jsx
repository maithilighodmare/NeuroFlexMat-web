import React from "react";
import { Bar } from "react-chartjs-2";
import "./PatientDashboard.css";
import { Link } from "react-router-dom";
import TopBar from "../../components/Topbar";
import { BarData } from "./ChartData";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PatientDashboard = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Training Performance",
        font: {
          size: 18,
        },
      },
    },
  };

  return (
    <div className="patient-dashboard" id="patient-dashboard">
      {/* Navigation Top Bar */}
      <TopBar />

      {/* Heading */}
      <h2 className="heading">Progress by Months</h2>

      {/* Chart Container */}
      <div className="chart-wrapper">
        <div className="chart-box">
          <Bar data={BarData} options={options} />
        </div>
      </div>

      {/* Navigation Button */}
      <Link to="/">
        <button className="home-btn">Go to Home</button>
      </Link>
    </div>
  );
};

export default PatientDashboard;
