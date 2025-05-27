import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Profile from "./Profile";
import TemaEParaqitur from "./TemaEParaqitur";
import TemaDiplomes from "./TemaDiplomes";
import TerminiIm from "./TerminiIm";

const Dashboard = ({ setIsAuthenticated }) => {
  const studentName = "Arber Berisha";
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow bg-white">
        <Header studentName={studentName} onLogout={logout} />
        <main className="p-6 flex-grow overflow-auto">
          <Routes>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="tema-e-paraqitur" element={<TemaEParaqitur />} />
            <Route path="tema-e-diplomes" element={<TemaDiplomes />} />
            <Route path="termini-im" element={<TerminiIm />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
