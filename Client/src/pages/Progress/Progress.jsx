import React from "react";
import { Bar } from "react-chartjs-2";
import "./Progress.css";
import { Link } from "react-router-dom";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BarData } from "./LineCharData";

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: true, // Allows custom width & height
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
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6"
      id="progress-bar"
    >
      {/* Centered Title */}
      <h2
        className="text-white text-xl font-bold mb-4 text-center m-10"
        id="heading"
      >
        Progress By Months
      </h2>

      {/* Bar Chart Container */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-xl shadow-lg w-[500px] h-auto flex flex-col items-center">
        {/* Chart Box */}
        <div
          className="bg-white p-4 rounded-lg shadow-md w-[500px] h-[400px] flex justify-center items-center"
          id="progress-box"
        >
          <Bar options={options} data={BarData} />
        </div>
      </div>
      <Link to="/">
        <button className="progress-btn">Go to Home</button>
      </Link>
    </div>
  );
};

export default BarChart;
