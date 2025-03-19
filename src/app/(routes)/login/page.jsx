"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import useSentOtp from "@/hooks/auth/useSentOtp";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const router = useRouter();
  const { loading, onLogin } = useSentOtp();

  const handleInputChange = (e) => {
    const input = e.target.value;

    // Allow only numbers and limit to 10 digits
    if (/^\d{0,10}$/.test(input)) {
      setMobileNumber(input);
      setErrorMessage(null);
    } else {
      setErrorMessage("Mobile number must be exactly 10 digits.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      setErrorMessage("Mobile number must be exactly 10 digits.");
      return;
    }
    await onLogin(mobileNumber);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setSignUpLoading(true);
    toast.info("Redirecting to Sign Up...");
    setTimeout(() => {
      router.push("/register");
      setSignUpLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center mt-20 bg-white px-4">
      <div className="bg-main px-8 py-10 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/MedglossLogo.svg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-gray-100">Login</h1>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-2 md:py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 ${
                errorMessage
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-pink-400"
              }`}
            />
            {loading && (
              <FiLoader className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-500 animate-spin text-xl" />
            )}
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-white font-semibold rounded-lg shadow-md hover:scale-[1.02] transition transform disabled:opacity-50"
            disabled={loading || mobileNumber.length !== 10}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <FiLoader className="animate-spin mr-2" />
                Processing...
              </div>
            ) : (
              "Login"
            )}
          </button>

          <button
            onClick={handleSignUp}
            className="w-full flex justify-center items-center text-gray-100 text-base"
            disabled={signUpLoading}
          >
            {signUpLoading ? (
              <>
                <FiLoader className="animate-spin mr-2" /> Redirecting...
              </>
            ) : (
              "Sign Up here"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
