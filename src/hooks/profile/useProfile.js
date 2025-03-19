import Api from "@/services/Api";
import { useState } from "react";

const useProfile = () => {
  const [isLoading, setLoading] = useState(false);
  const onUpdateProfile = async () => {
    try {
      setLoading(true);
      const response = await Api.put("/api/v1/auth/update-user", formData);
      return response.data;
    } catch (err) {
      setLoading(false);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    onUpdateProfile,
    isLoading,
  };
};

export default useProfile;
