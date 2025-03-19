"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";
import { toast } from "react-toastify";

const Otp = () => {
  const { verifyOTP, isLoading, error, clearError } = useAuthStore();
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      clearError();
    }
  }, [error, clearError]);

  const handleInputChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      setErrorMessage("OTP is required.");
      toast.error("OTP is required.");
      return;
    }

    const success = await verifyOTP(otp);

    if (success) {
      router.push("/");
      toast.success("Login Successful!", { autoClose: 2000 });
    } else {
      setErrorMessage("Invalid OTP. Please try again.");
      toast.error(errorMsg, { autoClose: 3000 });
    }
  };

  return (
    <div className="flex items-center justify-center mt-20 bg-white px-4">
      <div className="bg-main px-8 py-16 rounded-xl shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/MedglossLogo.svg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold text-white mt-2">Enter OTP</h1>
        </div>

        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 md:py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 pr-12"
            />
            {isLoading && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-5 h-5 border-4 border-gray-300 border-t-pink-500 rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
            disabled={isLoading}
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
