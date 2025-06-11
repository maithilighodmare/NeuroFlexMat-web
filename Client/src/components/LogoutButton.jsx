import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LogoutButton() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // Optional if token is stored
    setClicked(true);

    setTimeout(() => {
      navigate("/login");
    }, 1500); // Delay for user feedback
  };

  return (
    <button
      className={`btn signup transition duration-300 ease-in-out ${
        clicked ? "bg-red-600 text-white" : "bg-purple-600 text-white hover:bg-purple-700"
      } px-4 py-2 rounded-md font-semibold`}
      onClick={handleLogout}
    >
      {clicked ? "Logging out..." : "Logout"}
    </button>
  );
}
