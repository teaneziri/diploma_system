import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import MenaxhoStudentet from "./MenaxhoStudentet"

import TematNgaStudentet from "./TematNgaStudentet";  
import Sidebar from "../Sidebar";
import Header from "../Header";
import Profile from "../Profile";

const ProfessorDashboard = ({ setIsAuthenticated, role }) => {
  const professorName = "Prof. Ilir Krasniqi";
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
     <Sidebar role={role} />

      <div className="flex flex-col flex-grow bg-white">
        <Header studentName={professorName} onLogout={logout} />
        <main className="p-6 flex-grow overflow-auto">
          <Routes>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="menaxho-studentet" element={<MenaxhoStudentet />} />
            
            <Route path="temat-nga-studentet" element={<TematNgaStudentet />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default ProfessorDashboard;
