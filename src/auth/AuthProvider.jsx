import { useEffect, useRef, useState } from "react";
import { refreshToken as refreshTokenApi } from "../api/auth";
import { AuthContext } from "../context/AuthContext";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const stored = localStorage.getItem("auth");
    return stored ? JSON.parse(stored) : null;
  });

  const refreshTimeoutRef = useRef(null);

  const loginUser = (data) => {
    setAuth(data);
    localStorage.setItem("auth", JSON.stringify(data));
  };

  const logoutUser = () => {
    setAuth(null);
    localStorage.removeItem("auth");
  };

  useEffect(() => {
    if (!auth?.AccessTokenExpiresAt || !auth?.RefreshToken) return;
    const now = new Date();
    const expiry = new Date(auth.AccessTokenExpiresAt);
    const timeUntilExpiry = expiry - now;

    if (timeUntilExpiry <= 0) {
      console.warn("Access token already expired. Attempting refresh...");
      triggerRefresh();
      return;
    }

    const refreshIn = Math.max(timeUntilExpiry - 60000, 5000);
    refreshTimeoutRef.current = setTimeout(triggerRefresh, refreshIn);

    return () => clearTimeout(refreshTimeoutRef.current);
  }, [auth]);

  const triggerRefresh = async () => {
    try {
      const newAuth = await refreshTokenApi(auth.Token, auth.RefreshToken);
      loginUser(newAuth);
    } catch (error) {
      console.error("Failed to refresh token", error);
      logoutUser();
    }
  };

  const value = { auth, loginUser, logoutUser };
  console.log(new Date(auth?.AccessTokenExpiresAt).toLocaleString());

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
