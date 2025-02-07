import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user";
import { loginUser, registerUser, logoutUser } from "../services/api";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: {
    email: string;
    password: string;
    userType: "entrepreneur" | "investor";
    profile: User["profile"];
  }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Validate token and get user data
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);
      const response = await loginUser(email, password);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUser(user);
      navigate(user.userType === "entrepreneur" ? "/entrepreneur-dashboard" : "/investor-hub");
    } catch (err) {
      setError("Invalid credentials");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: {
    email: string;
    password: string;
    userType: "entrepreneur" | "investor";
    profile: User["profile"];
  }) => {
    try {
      setError(null);
      setLoading(true);
      const response = await registerUser(userData);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUser(user);
      navigate(user.userType === "entrepreneur" ? "/entrepreneur-dashboard" : "/investor-hub");
    } catch (err) {
      setError("Registration failed");
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("token");
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    signup: register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext; 