import axios from "axios";

const baseURL = process.env.BACKEND_URL;
// const isServer = typeof window === "undefined";
const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
