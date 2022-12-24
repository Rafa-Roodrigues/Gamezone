import axios from "axios";

export const api = axios.create({
  baseURL: "https://gamezone-five.vercel.app/api"
  // baseURL: "http://localhost:3000/api"
});
