"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Add this import
import Cookies from "js-cookie";
import useAuthStore from "@/store/authStore";

// Initialize context with default values
const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Add router here
  const {} = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token, { expires: 7, secure: true });
    setIsLoggedIn(true);
    router.push("/"); // Move router.push inside login function
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/"); // Optionally add redirect on logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
