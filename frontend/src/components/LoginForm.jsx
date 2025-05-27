import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authServices";
import { toast } from "react-toastify";

const LoginForm = ({ onLogin }) => {  // merr onLogin nga props për të njoftuar App
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // heq errorin kur ndryshon input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const data = await login(formData);
      localStorage.setItem("token", data.token);
      toast.success("Login successful!");
      setError("");
      if (onLogin) onLogin(); // thërret callback për të përditësuar gjendjen e login në App
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password");
      toast.error("Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">Login</h2>

      {error && (
        <div className="text-red-600 text-sm bg-red-100 p-2 rounded">{error}</div>
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        autoComplete="email"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        autoComplete="current-password"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
