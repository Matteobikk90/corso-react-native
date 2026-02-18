import { AXIOS_TIMEOUT, BASE_URL } from "@/constants/api";
import axios from "axios";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: AXIOS_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  // console.log("API REQUEST", config);

  return config;
});

api.interceptors.response.use(
  (response) => {
    // console.log("API RESPONSE", response);
    return response;
  },
  (error) => {
    console.log("API ERROR", error);
    return error;
  }
);
