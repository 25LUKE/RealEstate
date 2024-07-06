import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8000/api", // Calling the URL from the Server
  withCredentials: true,
});

export default apiRequest;