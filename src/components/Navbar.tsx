import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";
import Logo from './Logo';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <motion.div
            className="navbar-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            <Link to="/how-it-works" className="nav-link">
              How it Works
            </Link>
            <Link to="/browse-projects" className="nav-link">
              Browse Projects
            </Link>
            <Link to="/success-stories" className="nav-link">
              Success Stories
            </Link>

            {user ? (
              <div className="navbar-buttons">
                <Button variant="ghost" onClick={handleLogout}>
                  Log Out
                </Button>
                <Button
                  variant="primary"
                  to={user.userType === 'entrepreneur' ? '/entrepreneur-dashboard' : '/dashboard'}
                  as={Link}
                >
                  Dashboard
                </Button>
              </div>
            ) : (
              <div className="navbar-buttons">
                <Button variant="ghost" to="/login" as={Link}>
                  Log In
                </Button>
                <Button variant="primary" to="/signup" as={Link}>
                  Start Your Campaign
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-button">
            <button onClick={toggleMenu} className="mobile-menu-button">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-items">
          <Link to="/how-it-works" className="mobile-menu-item">
            How it Works
          </Link>
          <Link to="/browse-projects" className="mobile-menu-item">
            Browse Projects
          </Link>
          <Link to="/success-stories" className="mobile-menu-item">
            Success Stories
          </Link>
          {user ? (
            <>
              <Link to={user.userType === 'entrepreneur' ? '/entrepreneur-dashboard' : '/dashboard'} className="mobile-menu-item">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="mobile-menu-item">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="mobile-menu-item">
                Log In
              </Link>
              <Link to="/signup" className="mobile-menu-item">
                Start Your Campaign
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
