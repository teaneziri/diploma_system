import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Profile from "./Profile";
import TemaEParaqitur from "./TemaEParaqitur";
import TemaDiplomes from "./TemaDiplomes.jsx";
import TerminiIm from "./TerminiIm";

import MenaxhoPerdoruesit from "./Admin/MenaxhoPerdoruesit";
import MenaxhoStudentet from "./Professor/MenaxhoStudentet";
import TematNgaStudentet from "./Professor/TematNgaStudentet";

const Dashboard = ({ setIsAuthenticated, role }) => {
  const userName = "Arber Berisha"; // mund ta marrësh nga API ose kontekst
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
        <Header studentName={userName} onLogout={logout} />
        <main className="p-6 flex-grow overflow-auto">
          <Routes>
            <Route index element={<Navigate to="profile" replace />} />

            {role === "student" && (
              <>
                <Route path="profile" element={<Profile />} />
                <Route path="tema-e-paraqitur" element={<TemaEParaqitur />} />
                <Route path="tema-e-diplomes" element={<TemaDiplomes />} />
                <Route path="termini-im" element={<TerminiIm />} />
              </>
            )}

            {role === "professor" && (
              <>
                <Route path="menaxho-studentet" element={<MenaxhoStudentet />} />
                <Route path="temat-nga-studentet" element={<TematNgaStudentet />} />
                {/* Shto rrugë të tjera për profesorin */}
              </>
            )}

            {role === "admin" && (
              <>
                <Route path="menaxho-perdoruesit" element={<MenaxhoPerdoruesit />} />
                {/* Shto rrugë të tjera për admin */}
              </>
            )}

            {/* Redirect për rrugë të papërshtatshme */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
