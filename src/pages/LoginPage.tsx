import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../contexts/AuthContext";
import favicon from "../assets/favicon.svg";
import { images } from "../utils/mediaAssets";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
    } catch (err: any) {
      setError(err.message || "Failed to log in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-container">
      {/* Left side - Image Section */}
      <div className="login-page-image-section">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="login-image-motion-container"
        >
          <img
            src={images.auth.loginBg}
            alt="Investment Success"
            className="login-page-image"
          />
          <div className="login-image-gradient-overlay"></div>
          <div className="login-image-info">
            <h2 className="login-image-title">
              Welcome Back to ElevateFund
            </h2>
            <p className="login-image-subtitle">
              Access your investment portfolio and explore new opportunities
            </p>
            <div className="login-image-stats">
              <div className="login-image-stat">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Portfolio Access</div>
              </div>
              <div className="login-image-stat">
                <div className="stat-value">100%</div>
                <div className="stat-label">Secure Platform</div>
              </div>
              <div className="login-image-stat">
                <div className="stat-value">10k+</div>
                <div className="stat-label">Daily Transactions</div>
              </div>
              <div className="login-image-stat">
                <div className="stat-value">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right side - Form Section */}
      <div className="login-page-form-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="login-form-container"
        >
          <div className="login-header">
            <Link to="/" className="login-logo-link">
              <img src={favicon} alt="ElevateFund Logo" className="login-logo" />
              <span className="login-brand-text">ElevateFund</span>
            </Link>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="login-welcome-title"
            >
              Welcome back
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="login-welcome-subtitle"
            >
              Sign in to your account
            </motion.p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="login-error"
              >
                {error}
              </motion.div>
            )}

            <div className="login-inputs">
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="login-input"
              />
              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
                className="login-input"
              />
            </div>

            <div className="login-options">
              <div className="remember-me">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="remember-checkbox"
                />
                <label htmlFor="remember-me" className="remember-label">
                  Remember me
                </label>
              </div>
              <div className="forgot-password">
                <Link to="/forgot-password" className="forgot-password-link">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="login-submit">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="login-submit-button"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>

          <div className="login-divider">
            <div className="divider-line"></div>
            <div className="divider-text">or</div>
            <div className="divider-line"></div>
          </div>

          <p className="signup-prompt">
            <span className="signup-text">Don't have an account?</span>{" "}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;