import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");    // Fshij tokenin nga storage
    setIsAuthenticated(false);            // Ndrysho gjendjen e autentikimit
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
      {/* Këtu mund të shtosh përmbajtjen e dashboard-it */}
    </div>
  );
};

export default Dashboard;
