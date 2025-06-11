import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { ref, get } from "firebase/database"; // ✅ Only ref and get
import { database } from "../../firebase"; // ✅ Import initialized instance
import TopBar from "../../components/Topbar";
import "./PatientDashboard.css";

import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PatientDashboard = () => {
  const [touchData, setTouchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [average, setAverage] = useState(0);

  const fetchTouchData = async () => {
    setLoading(true);
    try {
      const snapshot = await get(ref(database, "/")); // ✅ Use imported database
      const data = snapshot.val();

      if (!data) {
        setTouchData([]);
        setLoading(false);
        return;
      }

      const filtered = Object.entries(data)
        .filter(([key]) => key.startsWith("touchTime"))
        .sort(([a], [b]) => {
          const aNum = parseInt(a.replace("touchTime", ""));
          const bNum = parseInt(b.replace("touchTime", ""));
          return aNum - bNum;
        });

      const formatted = filtered.map(([key, value]) => ({
        name: key,
        time: parseFloat((value / 1000).toFixed(2)),
      }));

      const avg =
        formatted.reduce((acc, item) => acc + item.time, 0) /
        (formatted.length || 1);

      setTouchData(formatted);
      const clampedAvg = Math.min(6, Math.max(1, avg));
      setAverage(parseFloat(clampedAvg.toFixed(2)));
    } catch (err) {
      setError("Failed to fetch data from Firebase.");
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTouchData();
  }, []);

  const chartData = {
    labels: touchData.map((item) => item.name),
    datasets: [
      {
        label: "Touch Time (seconds)",
        data: touchData.map((item) => item.time),
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Touch Time Training Performance",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Seconds",
        },
      },
    },
  };

  return (
    <div className="patient-dashboard">
      <TopBar />
      <div className="dashboard-container">
        <h2 className="dashboard-heading">Touch Time Dashboard</h2>
        <div className="avg-time">
          <div className="circle-progress">
            <div className="circle">
              <div className="value">{average}s</div>
              <div className="label">Average</div>
            </div>
          </div>
          <div>
            <p className="avg-description">
              A lower average time reflects better performance and faster
              reflexes. Aim to keep your average within 1–6 seconds for optimal
              training results.
            </p>
          </div>
        </div>

        <div className="top-section">
          <div className="chart-box">
            {loading ? (
              <p className="loading">Loading chart...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : (
              <Bar data={chartData} options={chartOptions} />
            )}
          </div>
        </div>

        <Link to="/">
          <button className="home-btn">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PatientDashboard;
