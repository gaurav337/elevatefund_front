import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const HowItWorks: React.FC = () => {
    const navigate = useNavigate();

    const steps = [
        {
            number: '1',
            title: 'Register & Create Profile',
            description: 'Sign up as an entrepreneur or investor. Complete your profile with relevant information and verification documents.',
            icon: '/images/icons/register.svg',
            link: '/signup'
        },
        {
            number: '2',
            title: 'Submit or Browse Projects',
            description: 'Entrepreneurs can submit detailed project proposals while investors can browse through vetted opportunities.',
            icon: '/images/icons/browse.svg',
            link: '/browse-projects'
        },
        {
            number: '3',
            title: 'Due Diligence',
            description: 'Thorough verification and due diligence on all projects to ensure quality and reliability.',
            icon: '/images/icons/verify.svg',
            link: '/investor-hub'
        },
        {
            number: '4',
            title: 'Connect & Invest',
            description: 'Investors can connect with entrepreneurs, conduct meetings, and make informed investment decisions.',
            icon: '/images/icons/invest.svg',
            link: '/browse-projects'
        }
    ];

    const features = [
        {
            icon: '/images/icons/secure.svg',
            title: 'Secure Platform',
            description: 'State-of-the-art security measures to protect your data and transactions.',
            link: '/security'
        },
        {
            icon: '/images/icons/support.svg',
            title: 'Expert Support',
            description: 'Dedicated team of experts to guide you through the process.',
            link: '/support'
        },
        {
            icon: '/images/icons/transparent.svg',
            title: 'Transparent Process',
            description: 'Clear and transparent investment process with regular updates.',
            link: '/success-stories'
        }
    ];

    const handleStepClick = (link: string) => {
        navigate(link);
    };

    const handleFeatureClick = (link: string) => {
        navigate(link);
    };

    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className={styles.header}>
                <motion.h1
                    className={styles.title}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    How It Works
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Your journey to successful investments starts here
                </motion.p>
            </header>

            <section className={styles.stepsSection}>
                <h2 className={styles.stepsTitle}>
                    Simple Steps to Get Started
                </h2>
                <div className={styles.stepsContainer}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.step}
                            onClick={() => handleStepClick(step.link)}
                            whileHover={{ y: -8, cursor: 'pointer' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            role="button"
                            tabIndex={0}
                        >
                            <div className={styles.stepIcon}>
                                <img
                                    src={step.icon}
                                    alt=""
                                    onError={(e) => {
                                        e.currentTarget.src = '/images/icons/placeholder.svg';
                                    }}
                                />
                            </div>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className={styles.whyChooseSection}>
                <h2 className={styles.whyChooseTitle}>Why Choose Our Platform</h2>
                <div className={styles.features}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.feature}
                            onClick={() => handleFeatureClick(feature.link)}
                            whileHover={{ y: -8, cursor: 'pointer' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            role="button"
                            tabIndex={0}
                        >
                            <img
                                src={feature.icon}
                                alt=""
                                className={styles.featureIcon}
                                onError={(e) => {
                                    e.currentTarget.src = '/images/icons/placeholder.svg';
                                }}
                            />
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <motion.section
                className={styles.cta}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
                <p className={styles.ctaDescription}>
                    Join our platform today and be part of the future of investment
                </p>
                <Link
                    to="/signup"
                    className={styles.ctaButton}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/signup');
                    }}
                >
                    Create Account
                </Link>
            </motion.section>
        </motion.div>
    );
};

export default HowItWorks; 