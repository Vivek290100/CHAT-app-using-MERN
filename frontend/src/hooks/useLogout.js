import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setUser} = useAuth()

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-users");
      setUser(null);
    } catch (error) {
      toast.error(error.ErrorMessage)
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;


