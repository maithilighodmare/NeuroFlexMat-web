import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const patientData = [
  { name: "Jan", active: 100, completed: 50 },
  { name: "Feb", active: 200, completed: 100 },
  { name: "Mar", active: 150, completed: 80 },
  { name: "Apr", active: 300, completed: 150 },
  { name: "May", active: 250, completed: 120 },
];

const patients = [
  { name: "Daniel Smith", gender: "Male", weight: "75 kg", age: 60, condition: "Stroke" },
  { name: "Aron", gender: "Female", weight: "69 kg", age: 70, condition: "Parkinson" },
  { name: "Ray Clayton", gender: "Female", weight: "70 kg", age: 61, condition: "Stroke" },
  { name: "Eric Woods", gender: "Male", weight: "88 kg", age: 77, condition: "Elderly" },
  { name: "Smith Jay", gender: "Male", weight: "79 kg", age: 75, condition: "Elderly" },
];

const DoctorDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-purple-700 text-white p-4 rounded-lg flex justify-between items-center">
        <h1 className="text-lg font-bold">Hello Dr. Jackson Santos</h1>
        <button className="bg-blue-600 px-4 py-2 rounded">This Year</button>
      </div>

      {/* Graph Section */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">Patient Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={patientData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="active" stroke="#8884d8" name="Active Patients" />
            <Line type="monotone" dataKey="completed" stroke="#82ca9d" name="Sessions Completed" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Patient Lists */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* All Patients */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold flex justify-between">
            All Patients <span className="text-blue-500 cursor-pointer">See all</span>
          </h2>
          <ul>
            {patients.map((patient, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{patient.name}</span>
                <span>{patient.gender}</span>
                <span>{patient.weight}</span>
                <span>{patient.age}</span>
                <span>{patient.condition}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Active Users */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold flex justify-between">
            Active Users <span className="text-blue-500 cursor-pointer">See all</span>
          </h2>
          <ul>
            {patients.slice(0, 3).map((patient, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{patient.name}</span>
                <span>{patient.gender}</span>
                <span>{patient.weight}</span>
                <span>{patient.age}</span>
                <span>{patient.condition}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
