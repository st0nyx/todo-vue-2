import axios from "axios";

const API_URL = "http://localhost:3000";

export default axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
