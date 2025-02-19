import React from "react";
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

const DoctorDashboard = () => {
  const patients = [
    { name: "Daniel Smith", gender: "Male", weight: "75 kg", age: 60, condition: "Stroke" },
    { name: "Aron", gender: "Female", weight: "69 kg", age: 70, condition: "Parkinson" },
    { name: "Ray Clayton", gender: "Female", weight: "70 kg", age: 61, condition: "Stroke" },
    { name: "Eric Woods", gender: "Male", weight: "88 kg", age: 77, condition: "Elderly" },
    { name: "Smith Jay", gender: "Male", weight: "79 kg", age: 75, condition: "Elderly" },
  ];

  const activeUsers = [
    { name: "Daniel Smith", gender: "Male", weight: "75 kg", age: 60, condition: "Stroke" },
    { name: "Sana Meri", gender: "Female", weight: "69 kg", age: 59, condition: "Parkinson" },
    { name: "Ray Clayton", gender: "Female", weight: "70 kg", age: 61, condition: "Stroke" },
    { name: "Eric Woods", gender: "Male", weight: "88 kg", age: 77, condition: "Elderly" },
    { name: "Monica", gender: "Female", weight: "77 kg", age: 79, condition: "Elderly" },
  ];

  const lineChartData = [
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

  return (
    <div className="bg-blue-100 min-h-screen p-6">
      {/* Header */}
      <div className="bg-purple-700 text-white p-5 rounded-lg flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Hello Dr. Jackson Santos</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md flex items-center">
            📅 This Year
          </button>
          <img src="https://placehold.co/40" alt="medical-icon" className="w-10 h-10" />
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-lg mt-6 shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Patient Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="active" stroke="#1D4ED8" name="Active Patients" />
            <Line type="monotone" dataKey="sessions" stroke="#10B981" name="Sessions Completed" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Patients Section */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* All Patients */}
        <div className="bg-white p-6 rounded-lg shadow-md h-64 border-2 border-purple-300">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">All Patients</h2>
            <span className="text-blue-500 cursor-pointer text-sm">see all</span>
          </div>
          <div className="mt-2 overflow-y-scroll h-40 space-y-3 scrollbar-thin scrollbar-thumb-gray-400">
            {patients.map((p, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2 px-2">
                <img src="https://placehold.co/30" alt="profile-pic" className="w-8 h-8 rounded-full" />
                <span className="w-1/4 text-gray-700">{p.name}</span>
                <span className="w-1/6 text-gray-500">{p.gender}</span>
                <span className="w-1/6 text-gray-500">{p.weight}</span>
                <span className="w-1/6 text-gray-500">{p.age} yrs</span>
                <span className="w-1/4 text-gray-700 font-semibold">{p.condition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white p-6 rounded-lg shadow-md h-64 border-2 border-purple-300">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">Active Users</h2>
            <span className="text-blue-500 cursor-pointer text-sm">see all</span>
          </div>
          <div className="mt-2 overflow-y-scroll h-40 space-y-3 scrollbar-thin scrollbar-thumb-gray-400">
            {activeUsers.map((p, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2 px-2">
                <img src="https://placehold.co/30" alt="profile-pic" className="w-8 h-8 rounded-full" />
                <span className="w-1/4 text-gray-700">{p.name}</span>
                <span className="w-1/6 text-gray-500">{p.gender}</span>
                <span className="w-1/6 text-gray-500">{p.weight}</span>
                <span className="w-1/6 text-gray-500">{p.age} yrs</span>
                <span className="w-1/4 text-gray-700 font-semibold">{p.condition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
