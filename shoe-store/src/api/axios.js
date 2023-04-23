import axios from "axios";
const server = axios.create({
  baseURL: "https://localhost:7016/",
  withCredentials: true,
});

export default server;
