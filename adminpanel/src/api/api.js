import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4111", //your api URL
});

export default api;
