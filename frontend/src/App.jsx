import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import ProfessorDashboard from "./components/Professor/ProfessorDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css';

// Funksion i thjeshtë për të deshifruar payload-in JWT
function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = parseJwt(token);
      if (decoded && decoded.roli) {
        setIsAuthenticated(true);
        setRole(decoded.roli);
      } else {
        setIsAuthenticated(false);
        setRole(null);
      }
    } else {
      setIsAuthenticated(false);
      setRole(null);
    }
  }, []);

  // Redirect bazuar në rol
  const DashboardRedirect = () => {
    if (!role) return <Navigate to="/login" replace />;

    if (role === "student") return <Navigate to="/dashboard/student" replace />;
    if (role === "professor") return <Navigate to="/dashboard/professor" replace />;
    if (role === "admin") return <Navigate to="/dashboard/admin" replace />;

    return <Navigate to="/login" replace />;
  };

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/login"
            element={
              <LoginForm
                onLogin={() => {
                  const token = localStorage.getItem("token");
                  const decoded = parseJwt(token);
                  if (decoded && decoded.roli) {
                    setIsAuthenticated(true);
                    setRole(decoded.roli);
                  } else {
                    setIsAuthenticated(false);
                    setRole(null);
                  }
                }}
              />
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardRedirect />} />

        <Route
          path="/dashboard/student/*"
          element={
            <Dashboard
              role={role}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/dashboard/professor/*"
          element={
            <ProfessorDashboard
              role={role}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="/dashboard/admin/*"
          element={
            <AdminDashboard
              role={role}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
