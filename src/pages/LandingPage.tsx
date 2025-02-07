import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronRight,
  Shield,
  Users,
  BarChart,
  Rocket,
  Target,
  TrendingUp,
  ArrowRight,
  Globe,
  Briefcase
} from 'lucide-react';
import './LandingPage.css';

// Interfaces for type safety
interface Stat {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface Startup {
  title: string;
  description: string;
  image: string;
  category: string;
  progress: number;
  raised: string;
  target: string;
}

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

// Stat Types are assigned
const STATS: Stat[] = [
  { value: "₹500Cr+", label: "Total Investment", icon: BarChart, color: "#6366F1" },
  { value: "200+", label: "Funded Startups", icon: Rocket, color: "#8B5CF6" },
  { value: "50,000+", label: "Active Investors", icon: Users, color: "#10B981" },
  { value: "35%", label: "Avg. Returns", icon: TrendingUp, color: "#3B82F6" }
];

// Types for Startups assigned
const FEATURED_STARTUPS: Startup[] = [
  {
    title: "TechMed Solutions",
    description: "AI-powered medical diagnostics platform",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800",
    category: "Healthcare",
    progress: 75,
    raised: "₹3.5 Cr",
    target: "₹5 Cr"
  },
  {
    title: "GreenEnergy",
    description: "Renewable energy storage solutions",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    category: "Clean Tech",
    progress: 60,
    raised: "₹2.8 Cr",
    target: "₹4 Cr"
  },
  {
    title: "FinSecure",
    description: "Next-gen cybersecurity for fintech",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    category: "Fintech",
    progress: 85,
    raised: "₹4.2 Cr",
    target: "₹5 Cr"
  }
];

// Types for Features set
const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Secure Investment",
    description: "Bank-grade security protocols and complete transparency",
    color: "#6366F1"
  },
  {
    icon: Target,
    title: "Curated Opportunities",
    description: "Thoroughly vetted startups with proven traction",
    color: "#8B5CF6"
  },
  {
    icon: Globe,
    title: "Diverse Portfolio",
    description: "Access to various sectors and investment sizes",
    color: "#10B981"
  },
  {
    icon: Briefcase,
    title: "Expert Support",
    description: "Dedicated investment advisors and detailed analytics",
    color: "#3B82F6"
  }
];

// Main Landing Page Component
const LandingPage: React.FC = () => {
  return (
    <div className="landing-page" role="main">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>
              Invest in Tomorrow's
              <span className="gradient-text"> Game-Changers</span>
            </h1>
            <p>
              Join India's premier investment platform connecting visionary investors
              with high-potential startups. Start your investment journey today.
            </p>
            <div className="hero-cta">
              <Link to="/signup" className="primary-button" aria-label="Start Investing Now">
                Start Investing
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
              <Link to="/browse-projects" className="secondary-button" aria-label="Explore our startup portfolio">
                Explore Startups
                <ChevronRight size={20} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-image"
            aria-hidden="true"  // Hide image from screen readers, if purely decorative
          >
            <img
              src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Visionary Investors"
              className="main-image"
            />
          </motion.div>
           <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="stats-grid"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
              >
                <stat.icon size={24} style={{ color: stat.color }} aria-hidden="true" />
                <div>
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Startups Section */}
      <section className="featured-section">
        <div className="section-header container">
          <h2>Featured Opportunities</h2>
          <p>Exclusive investment opportunities closing soon</p>
        </div>
        <div className="featured-grid container">
          {FEATURED_STARTUPS.map((startup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="startup-card"
            >
              <div className="startup-image">
                <img src={startup.image} alt={startup.title} />
                <span className="category-badge">{startup.category}</span>
              </div>
              <div className="startup-content">
                <h3>{startup.title}</h3>
                <p>{startup.description}</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${startup.progress}%` }}
                  ></div>
                </div>
                <div className="funding-stats">
                  <span>Raised: {startup.raised}</span>
                  <span>Target: {startup.target}</span>
                </div>
                <Link to={`/projects/${index + 1}`} className="view-details" aria-label={`Learn more about ${startup.title}`}>
                  View Details
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header container">
          <h2>Why Choose ElevateFund</h2>
          <p>Your trusted partner in startup investments</p>
        </div>
        <div className="features-grid container">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="feature-card"
            >
              <div
                className="feature-icon"
                style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
              >
                <feature.icon size={24} aria-hidden="true" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content container">
          <h2>Ready to Start Your Investment Journey?</h2>
          <p>Join thousands of investors building their wealth with ElevateFund</p>
          <div className="cta-buttons">
            <Link to="/signup" className="primary-button" aria-label="Open Free investment Account and Start Here Now">
              Create Free Account
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
            <Link to="/how-it-works" className="secondary-button" aria-label="Learn more details and instructions on how your accounts and payments operate">
              Learn How It Works
              <ChevronRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;