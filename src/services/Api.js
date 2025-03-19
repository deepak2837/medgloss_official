// api.js
import axios from "axios";
import useAuthStore from "@/store/authStore";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Create an Axios instance
const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to dynamically add the token
Api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // Get the decrypted token directly from the store
      const token = useAuthStore.getState().getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// GET request
export const get = async (endpoint, params = {}) => {
  try {
    const response = await Api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};

// POST request
export const post = async (endpoint, data) => {
  try {
    const response = await Api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("POST request error:", error);
    throw error;
  }
};

// PUT request
export const put = async (endpoint, data) => {
  try {
    const response = await Api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("PUT request error:", error);
    throw error;
  }
};

// DELETE request
export const deleteRequest = async (endpoint) => {
  try {
    const response = await Api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("DELETE request error:", error);
    throw error;
  }
};

export default Api;
