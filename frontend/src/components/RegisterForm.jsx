import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authServices";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emri: "",
    email: "",
    password: "",
  });

 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await register(formData);
      localStorage.setItem("token", data.token);
      alert("Registration successful");
      navigate("/login")
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.message || "Unknown error"));
      console.error("Registration error:",err)
    }
  };

  
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-semibold text-center">Register</h2>

      <input
        type="text"
        name="emri"
        placeholder="Full Name"
        value={formData.emri}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
