import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authServices";
import { toast } from "react-toastify";


const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emri: "",
    email: "",
    password: "",
  });
  
   
  const [errors, setErrors] = useState({
  emri: "",
  email: "",
  password: "",
});

 const newErrors = { emri: "", email: "", password: "" };
  let hasError = false;



 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if(!formData.emri || !formData.email || !formData.password){
        newErrors.emri = "All fields are required.";
    hasError = true;
    }

    if(formData.password.length <6){
       

        newErrors.password = "Password must be at least 6 characters long.";
    hasError = true;
    }

    const emailDomain="ubt-uni.net";
    if(!formData.email.endsWith(emailDomain)){

         newErrors.email = "Only UBT emails (ending with @ubt-uni.net) are allowed.";
    hasError = true;
        
    }

     if (hasError) {
    setErrors(newErrors);
    return;
  }

    try {
      const data = await register(formData);
      localStorage.setItem("token", data.token);
      toast.success("Registration successful!");
      navigate("/login")
    } catch (err) {
      toast.error("Registration failed!");
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
    {errors.emri && <p className="text-red-600 text-sm">{errors.emri}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

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
