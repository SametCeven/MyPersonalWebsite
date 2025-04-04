import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY

//baseURL: "https://sametceven-server.vercel.app",

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json"
    }
})


export default axiosInstance
