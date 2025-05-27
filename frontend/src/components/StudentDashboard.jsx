import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Profile from "./Profile";
import TemaEParaqitur from "./TemaEParaqitur";
import LogOut from "./LogOut";
import TemaDiplomes from "./TemaDiplomes";
import TerminiIm from "./TerminiIm";

const Dashboard = ({ setIsAuthenticated }) => {
  const studentName = "Arber Berisha";

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow bg-white">
        <Header studentName={studentName} onLogout={logout} />
        <main className="p-6 flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="tema-e-paraqitur" element={<TemaEParaqitur />} />
            <Route path="logout" element={<LogOut />} />
            <Route path="tema-e-diplomes" element={<TemaDiplomes />} />
            <Route path="termini-im" element={<TerminiIm />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
