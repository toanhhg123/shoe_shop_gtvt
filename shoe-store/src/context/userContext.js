import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { getUserCurrent } from "../api/auth";
const { createContext } = require("react");

export const AuthContext = createContext();

const AuthContextCmp = ({ children }) => {
  const [cookies, setCookies] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    loadCookies();
  }, []);
  const loadCookies = () => {
    const cookie = Cookies.get("X-Access-Token");
    if (cookie) {
      getUserCurrent().then((data) => setUser(data));
      setCookies(cookie);
    }
  };
  const clearCookies = () => {
    const cookie = Cookies.get("X-Access-Token");
    if (cookie) Cookies.remove("X-Access-Token");

    setCookies("");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ cookies, loadCookies, clearCookies, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextCmp;
