import { Link } from "react-router-dom";
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-logo">
            <Logo className="scale-110" />
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">About</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about" className="footer-link">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/team" className="footer-link">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="footer-link">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="footer-link">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="footer-link">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="footer-link">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="footer-link">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:contact@elevatefund.com" className="footer-link">
                  contact@elevatefund.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="footer-link">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="footer-link">
                123 Startup Street<br />
                Tech Hub, IN 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} ElevateFund. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
