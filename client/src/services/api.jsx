import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY

// baseURL: "https://sametceven-server.vercel.app",
// baseURL: "http://localhost:5000",

const axiosInstance = axios.create({
    baseURL: "https://sametceven-server.vercel.app",
    headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json"
    }
})


export default axiosInstance
