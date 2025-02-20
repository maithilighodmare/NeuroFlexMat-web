import React from "react";
import backgroundImage from "../assets/home.jpg";
import illustration from "../assets/home.jpg";

const Home = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 opacity-50"></div>

      {/* Main Content */}
      <div className="relative bg-white bg-opacity-95 p-12 rounded-2xl shadow-2xl w-full max-w-4xl border border-purple-600 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          The <span className="text-purple-600">Physiotherapy</span> Expert
        </h1>
        <p className="text-lg text-gray-700 font-medium mt-2">
          Revolutionizing Recovery & Performance
        </p>
        <p className="text-gray-600 mt-3">
          Enhance flexibility, stability, and neuro-muscular connection with our advanced solutions.
        </p>

        {/* Buttons */}
        <div className="flex justify-center mt-6 space-x-6">
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
            Sign Up
          </button>
          <button className="bg-white text-purple-700 border-2 border-purple-700 hover:bg-purple-700 hover:text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
            Login
          </button>
        </div>

        {/* Illustration Image */}
        <div className="flex justify-center mt-8">
          <img src={illustration} alt="Physiotherapy" className="w-64 rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Home;
