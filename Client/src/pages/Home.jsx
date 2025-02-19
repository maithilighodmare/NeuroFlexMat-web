import React from "react";
import backgroundImage from "../assets/home.jpg";
import illustration from "../assets/home.jpg";
import "../styles/Home.css";
const Home = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg w-full max-w-4xl border-2 border-purple-500">
        <h1 className="text-5xl font-bold text-center text-gray-900">
          The Physiotherapy Expert
        </h1>
        <p className="text-xl text-center text-gray-600 font-semibold mt-2">
          Revolutionizing Recovery & Performance
        </p>
        <p className="text-center text-gray-600 mt-2">
          Designed to enhance your flexibility, stability, and neuro-muscular
          connection.
        </p>

        <div className="flex justify-center mt-6 space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-md text-lg">
            SignUp
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-md text-lg">
            Login
          </button>
        </div>

        <div className="img flex justify-center mt-8">
          <img src={illustration} alt="Physiotherapy" className="w-72" />
        </div>
      </div>
    </div>
  );
};

export default Home;
