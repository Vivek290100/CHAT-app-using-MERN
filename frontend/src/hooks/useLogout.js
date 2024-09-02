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
      localStorage.removeItem("chat-user");
      setUser(null);
    } catch (error) {
      setLoading(false);
    } finally {
    }
  };
  return { loading, logout };
};

export default useLogout;


