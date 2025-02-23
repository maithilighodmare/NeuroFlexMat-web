import { useEffect, useState } from "react";

const leaderboardData = [
  { rank: 2, name: "Jane Johns", age: 54, points: 1000, level: 3, avatar: "https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg", badge: "https://img.freepik.com/free-psd/medals-3d-render-champion-award-composition_314999-3100.jpg?w=826" },
  { rank: 3, name: "Michael Jordan", age: 63, points: 770, level: 2, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&s", badge: "https://img.freepik.com/free-psd/medals-3d-render-champion-award-composition_314999-3100.jpg?w=826" },
  { rank: 4, name: "Emily Davis", age: 66, points: 550, level: 2, avatar: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg", badge: "https://img.freepik.com/free-psd/medals-3d-render-champion-award-composition_314999-3100.jpg?w=826" },
];

export default function PatientLeaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    setLeaderboard(leaderboardData);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-500 text-white py-3 h-24 flex items-center justify-between px-12 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-300 p-3 rounded-full">
            <i className="fas fa-user-circle text-6xl text-gray-700"></i>
          </div>
          <div className="bg-white px-5 py-2 rounded-lg shadow">
            <span className="text-gray-800">sahilatram123@gmail.com</span>
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <input type="text" placeholder="Search..." className="px-3 py-2 border rounded-lg w-64 text-black" />
          <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ml-4">Click</button>
        </div>
      </nav>

      {/* Main Section */}
      <div className="w-3/4 bg-white rounded-lg shadow-lg mt-28 pb-10 min-h-[500px]">
        <div className="text-center p-4">
          <h1 className="text-4xl font-bold underline text-gray-800">Patient Leaderboard</h1>
        </div>

        {/* Leaderboard Table */}
        <div className="p-4">
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Rank</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Level</th>
                <th className="p-2 border">Points</th>
                <th className="p-2 border">Badge</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((item) => (
                <tr key={item.rank} className="bg-white text-black border border-gray-300 hover:bg-gray-100">
                  <td className="p-3 font-bold">{item.rank}</td>
                  <td className="p-3 flex items-center justify-center space-x-2">
                    <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full" />
                    <span className="whitespace-nowrap font-medium">{item.name}</span>
                  </td>
                  <td className="p-3">{item.age}</td>
                  <td className="p-3">{item.level}</td>
                  <td className="p-3 font-bold">{item.points} pts</td>
                  <td className="p-3">
                    <img src={item.badge} alt="Badge" className="w-10 h-10 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}