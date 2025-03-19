import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import CryptoJS from "crypto-js"; // ✅ Import crypto-js

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || "mysecretkey"; // ✅ Use an environment variable for security

// Encrypt function
const encryptData = (data) => {
  if (!data) return null;
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

// Decrypt function
const decryptData = (ciphertext) => {
  if (!ciphertext) return null;
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
};

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      otpSent: false,
      token: "",
      phoneNumber: "",

      // Set phone number in the store
      setPhoneNumber: (mobileNumber) => set({ phoneNumber: mobileNumber }),

      // Request OTP
      requestOTP: async (mobileNumber) => {
        set({ isLoading: true, error: null });

        try {
          const response = await axios.post(
            `${BASE_URL}/api/v1/auth/send-otp`,
            { mobileNumber }
          );

          console.log("OTP Response:", response);

          set({
            isLoading: false,
            otpSent: true,
            phoneNumber: mobileNumber,
          });

          return response.data;
        } catch (error) {
          set({
            isLoading: false,
            error: error.response?.data?.message || "Failed to send OTP",
          });

          return false;
        }
      },

      // Verify OTP
      verifyOTP: async (otp) => {
        set({ isLoading: true, error: null });

        try {
          const response = await axios.post(
            `${BASE_URL}/api/v1/auth/verify-otp`,
            {
              mobileNumber: get().phoneNumber, // ✅ Get phone number from store
              otp,
            }
          );

          // Encrypt data before storing it
          const encryptedUser = encryptData(response.data.user);
          const encryptedToken = encryptData(response.data.token);

          set({
            isLoading: false,
            isAuthenticated: true,
            user: encryptedUser, // Store encrypted user data
            otpSent: false,
            token: encryptedToken, // Store encrypted token
          });

          return true;
        } catch (error) {
          set({
            isLoading: false,
            error: error.response?.data?.message || "Invalid OTP",
          });

          return false;
        }
      },

      // Logout
      logout: async () => {
        set({ isLoading: true });

        try {
          const token = decryptData(get().token); // Decrypt token before sending request

          await axios.post(
            `${BASE_URL}/api/v1/auth/logout`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Clear local storage and reset auth state
          localStorage.removeItem("auth-storage");

          set({
            isAuthenticated: false,
            user: null,
            isLoading: false,
            otpSent: false,
            phoneNumber: "",
            error: null,
            token: "",
          });

          return true;
        } catch (error) {
          set({
            isLoading: false,
            error: error.response?.data?.message || "Failed to logout",
          });

          return false;
        }
      },

      // Clear errors
      clearError: () => set({ error: null }),

      // Get decrypted user data
      getUser: () => {
        return decryptData(get().user);
      },

      // Get decrypted token
      getToken: () => {
        return decryptData(get().token);
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
