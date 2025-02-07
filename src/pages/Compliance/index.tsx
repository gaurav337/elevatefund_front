import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Compliance: React.FC = () => {
    const sections = [
        {
            title: 'Regulatory Framework',
            content: 'ElevateFund operates in compliance with all applicable securities laws and regulations, including SEC regulations, FINRA rules, and state-specific requirements.'
        },
        {
            title: 'Investment Company Act',
            content: 'We maintain compliance with the Investment Company Act of 1940 and related regulations governing investment vehicles and securities offerings.'
        },
        {
            title: 'Anti-Money Laundering (AML)',
            content: 'Our robust AML program includes customer identification, transaction monitoring, and reporting of suspicious activities in accordance with the Bank Secrecy Act.'
        },
        {
            title: 'Know Your Customer (KYC)',
            content: 'We implement comprehensive KYC procedures to verify investor identities and ensure compliance with regulatory requirements for customer due diligence.'
        },
        {
            title: 'Data Protection',
            content: 'Our platform adheres to strict data protection standards, including GDPR and CCPA requirements, to safeguard investor information and maintain privacy.'
        },
        {
            title: 'Risk Disclosure',
            content: 'We provide transparent risk disclosures for all investment opportunities, ensuring investors are fully informed about potential risks and rewards.'
        },
        {
            title: 'Accredited Investor Verification',
            content: 'For applicable offerings, we maintain rigorous processes to verify accredited investor status in accordance with SEC requirements.'
        },
        {
            title: 'Reporting Requirements',
            content: 'We fulfill all regulatory reporting obligations, including periodic filings with relevant authorities and timely disclosure of material information.'
        }
    ];

    const certifications = [
        {
            title: 'SOC 2 Type II',
            description: 'Certified for security, availability, and confidentiality controls',
            icon: '🔒'
        },
        {
            title: 'ISO 27001',
            description: 'Information security management system certification',
            icon: '🛡️'
        },
        {
            title: 'GDPR Compliant',
            description: 'European Union data protection standards',
            icon: '🔐'
        },
        {
            title: 'CCPA Compliant',
            description: 'California Consumer Privacy Act standards',
            icon: '📋'
        }
    ];

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
                    Compliance & Regulations
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Our commitment to regulatory compliance and investor protection
                </motion.p>
            </header>

            <div className={styles.content}>
                <section className={styles.overview}>
                    <h2>Compliance Overview</h2>
                    <p>
                        At ElevateFund, we maintain the highest standards of regulatory compliance
                        to protect our investors and maintain the integrity of our platform.
                        Our comprehensive compliance program is designed to meet and exceed
                        all applicable regulatory requirements.
                    </p>
                </section>

                <section className={styles.certifications}>
                    <h2>Certifications & Standards</h2>
                    <div className={styles.certificationGrid}>
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className={styles.certificationCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.certificationIcon}>{cert.icon}</div>
                                <h3>{cert.title}</h3>
                                <p>{cert.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className={styles.framework}>
                    <h2>Regulatory Framework</h2>
                    <div className={styles.frameworkGrid}>
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                className={styles.frameworkCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3>{section.title}</h3>
                                <p>{section.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className={styles.resources}>
                    <h2>Compliance Resources</h2>
                    <div className={styles.resourceLinks}>
                        <Link to="/terms" className={styles.resourceLink}>
                            Terms of Service
                        </Link>
                        <Link to="/privacy" className={styles.resourceLink}>
                            Privacy Policy
                        </Link>
                        <a
                            href="/documents/compliance-manual.pdf"
                            className={styles.resourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Compliance Manual
                        </a>
                    </div>
                </section>
            </div>

            <section className={styles.contact}>
                <h2>Compliance Inquiries</h2>
                <p>For compliance-related questions or concerns, please contact our compliance team.</p>
                <a href="mailto:compliance@elevatefund.com" className={styles.contactButton}>
                    Contact Compliance Team
                </a>
            </section>
        </motion.div>
    );
};

export default Compliance; 