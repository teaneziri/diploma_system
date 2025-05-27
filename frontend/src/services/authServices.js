import axios from "axios";
const API="http://localhost:5000/api/auth";

export const register=async(data)=>{
    const response=await axios.post(`${API}/register`,data)
    return response.data;
}