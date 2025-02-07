import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Rocket, Target, LightbulbIcon, ArrowUpRight, Zap, CheckCircle } from 'lucide-react';
import './HowItWorks.css';

const PROCESS_STEPS = [
    {
        number: '01',
        title: 'Create Your Profile',
        description: 'Set up your investor profile in minutes. Define your investment preferences and risk appetite.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        features: ['Quick KYC Process', 'Smart Risk Assessment', 'Portfolio Preferences'],
        color: '#6366F1'
    },
    {
        number: '02',
        title: 'Discover Opportunities',
        description: 'Browse through curated investment opportunities matched to your preferences.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        features: ['AI-Powered Matching', 'Detailed Analytics', 'Due Diligence Reports'],
        color: '#8B5CF6'
    },
    {
        number: '03',
        title: 'Make Smart Investments',
        description: 'Invest with confidence using our secure platform and expert guidance.',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800',
        features: ['Secure Transactions', 'Portfolio Tracking', 'Real-time Updates'],
        color: '#10B981'
    }
];

const BENEFITS = [
    {
        icon: Target,
        title: 'Smart Matching',
        description: 'Our AI algorithms match you with the perfect investment opportunities based on your preferences and goals.',
        color: '#6366F1',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800'
    },
    {
        icon: ShieldCheck,
        title: 'Secure & Compliant',
        description: 'Bank-grade security and full regulatory compliance ensure your investments are always protected.',
        color: '#8B5CF6',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800'
    },
    {
        icon: Zap,
        title: 'Quick & Easy',
        description: 'Start investing in minutes with our streamlined onboarding process and intuitive platform.',
        color: '#10B981',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800'
    },
    {
        icon: Users,
        title: 'Expert Support',
        description: '24/7 access to investment advisors and a dedicated support team to guide your journey.',
        color: '#3B82F6',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800'
    }
];

const FAQ_ITEMS = [
    {
        question: 'How do I get started with Elevate Fund?',
        answer: 'Getting started is easy! Simply create an account, complete your investor profile, and you can start exploring investment opportunities right away. Our KYC process is quick and seamless.'
    },
    {
        question: 'What types of investments can I make?',
        answer: 'We offer a diverse range of investment opportunities including tech startups, sustainable energy projects, and healthcare innovations. Each opportunity is thoroughly vetted by our team.'
    },
    {
        question: 'How is my investment protected?',
        answer: 'We implement bank-grade security measures and are fully compliant with regulatory requirements. Your investments are protected through legal structures and regular audits.'
    },
    {
        question: 'What are the minimum investment amounts?',
        answer: 'Minimum investments vary by opportunity, typically starting from ₹1 lakh. This allows you to build a diverse portfolio across multiple ventures.'
    }
];

const HowItWorks: React.FC = () => {
    return (
        <div className="how-it-works">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span>Simple & Transparent Process</span>
                        </div>
                        <h1 className="hero-title">
                            Your Journey to
                            <span className="gradient-text"> Smart Investing</span>
                        </h1>
                        <p className="hero-description">
                            We've simplified the investment process to help you start building your portfolio with confidence. Follow our easy three-step process to begin your investment journey.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/signup" className="primary-button">
                                Start Investing
                            </Link>
                            <button className="secondary-button">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Smart Investing" />
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <span className="section-badge">How It Works</span>
                            <h2 className="section-title">Three Simple Steps</h2>
                            <p className="section-description">
                                Follow our streamlined process to begin your investment journey
                            </p>
                        </div>
                    </div>
                    <div className="process-grid">
                        {PROCESS_STEPS.map((step, index) => (
                            <div key={index} className="process-card">
                                <div className="process-image-container">
                                    <img src={step.image} alt={step.title} className="process-image" />
                                    <div className="step-number" style={{ backgroundColor: step.color }}>
                                        {step.number}
                                    </div>
                                </div>
                                <div className="process-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="process-features">
                                        {step.features.map((feature, i) => (
                                            <span key={i} className="feature-tag">
                                                <CheckCircle size={14} />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Benefits Section */}
            <section className="benefits-section">
                <div className="container">
                    <div className="section-header">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="section-badge">Platform Benefits</span>
                            <h2 className="section-title">Why Choose Elevate Fund</h2>
                            <p className="section-description">
                                Experience the advantages of our modern investment platform
                            </p>
                        </motion.div>
                    </div>
                    <div className="benefits-grid">
                        {BENEFITS.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="benefit-card"
                            >
                                <div className="benefit-icon-wrapper" style={{ backgroundColor: `${benefit.color}15` }}>
                                    <benefit.icon className="benefit-icon" style={{ color: benefit.color }} />
                                </div>
                                <div className="benefit-content">
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                                <img src={benefit.image} alt={benefit.title} className="benefit-illustration" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="section-badge">FAQ</span>
                            <h2 className="section-title">Common Questions</h2>
                            <p className="section-description">
                                Find answers to frequently asked questions about our platform
                            </p>
                        </motion.div>
                    </div>
                    <div className="faq-grid">
                        {FAQ_ITEMS.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="faq-card"
                            >
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="cta-content"
                    >
                        <span className="cta-badge">Get Started Today</span>
                        <h2>Ready to Start Your Investment Journey?</h2>
                        <p>Join thousands of investors who trust Elevate Fund to grow their wealth</p>
                        <div className="cta-buttons">
                            <Link to="/signup" className="cta-button primary">
                                Create Free Account
                                <ArrowUpRight size={20} />
                            </Link>
                            <Link to="/contact" className="cta-button secondary">
                                Talk to an Expert
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks; 