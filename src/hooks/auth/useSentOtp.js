import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function useSentOtp() {
  const { requestOTP, setPhoneNumber: storePhoneNumber } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onLogin = async (mobileNumber) => {
    setLoading(true);
    try {
      storePhoneNumber(mobileNumber);

      const response = await requestOTP(mobileNumber);
      if (response && response.status === 200) {
        toast.success("OTP sent successfully!");
        setTimeout(() => router.push("/otp"), 1500);
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("OTP Request Failed:", error);
      toast.error(
        error?.response?.data?.message || "Please register before login."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    onLogin,
  };
}
