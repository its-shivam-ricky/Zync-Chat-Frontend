import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "https://zync-chat-backend.onrender.com/api" : "/api";  //http://localhost:5001

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});