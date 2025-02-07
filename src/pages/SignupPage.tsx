import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../contexts/AuthContext";
import favicon from "../assets/favicon.svg";
import { images } from "../utils/mediaAssets";
import "./SignupPage.css";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  firstName: string;
  lastName: string;
  company: string;
  position: string;
}

const SignupPage: React.FC = () => {
  const { signup, error: authError } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    firstName: "",
    lastName: "",
    company: "",
    position: "",
  });
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      await signup({
        email: formData.email,
        password: formData.password,
        userType: "investor",
        profile: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phone,
          company: formData.company,
          position: formData.position,
        },
      });
    } catch (err: any) {
      setError(err.message || "Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "confirmPassword" || name === "password") {
      setError("");
    }
  };

  return (
    <div className="signup-page-container">
      {/* Left Side - Form Section */}
      <div className="signup-form-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="signup-form-container"
        >
          <div className="signup-header">
            <Link to="/" className="signup-logo-link">
              <img src={favicon} alt="ElevateFund Logo" className="signup-logo" />
              <span className="signup-brand-text">ElevateFund</span>
            </Link>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="signup-title"
            >
              Create your account
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="signup-subtitle"
            >
              Join ElevateFund today
            </motion.p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            {(error || authError) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="signup-error"
              >
                {error || authError}
              </motion.div>
            )}

            <div className="signup-inputs">
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="signup-input"
              />

              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
                className="signup-input"
              />

              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                autoComplete="new-password"
                className="signup-input"
              />

              <Input
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="signup-input"
              />

              <Input
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="signup-input"
              />
            </div>

            <div className="signup-submit">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="signup-submit-button"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </div>
          </form>

          <div className="signup-divider">
            <div className="divider-line"></div>
            <div className="divider-text">or</div>
            <div className="divider-line"></div>
          </div>

          <p className="signup-prompt">
            <span className="prompt-text">Already have an account?</span>{" "}
            <Link to="/login" className="signup-link">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Image Section */}
      <div className="signup-image-section">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="signup-image-motion-container"
        >
          <img
            src={images.auth.signupBg}
            alt="Investment Team"
            className="signup-image"
          />
          <div className="signup-image-gradient-overlay"></div>
          <div className="signup-image-info">
            <h2 className="signup-image-title">Start Your Investment Journey</h2>
            <p className="signup-image-subtitle">
              Join thousands of successful investors and entrepreneurs on ElevateFund
            </p>
            <div className="signup-image-stats">
              <div className="signup-image-stat">
                <div className="stat-value">500+</div>
                <div className="stat-label">Successful Projects</div>
              </div>
              <div className="signup-image-stat">
                <div className="stat-value">$100M+</div>
                <div className="stat-label">Total Investments</div>
              </div>
              <div className="signup-image-stat">
                <div className="stat-value">50k+</div>
                <div className="stat-label">Active Investors</div>
              </div>
              <div className="signup-image-stat">
                <div className="stat-value">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;