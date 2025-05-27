import axios from "axios";

const API = "http://localhost:5000/api/auth";

// Krijojmë një instancë axios me baseURL
const api = axios.create({
  baseURL: API,
});

// Interceptor për të shtuar token-in në Authorization header në çdo kërkesë
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Funksioni për regjistrim
export const register = async (data) => {
  const response = await api.post("/register", data);
  return response.data;
};

// Funksioni për login
export const login = async (formData) => {
  const response = await api.post("/login", formData);
  return response.data;
};

// Shembull funksioni për të marrë të dhëna me token (e përdor token-in automatikisht)
export const getProfile = async () => {
  const response = await api.get("/profile");
  return response.data;
};

