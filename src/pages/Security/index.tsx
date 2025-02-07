import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const Security: React.FC = () => {
    const securityFeatures = [
        {
            icon: '🔒',
            title: 'End-to-End Encryption',
            description: 'All data transmitted through our platform is encrypted using industry-standard protocols.'
        },
        {
            icon: '🛡️',
            title: 'Two-Factor Authentication',
            description: 'Additional layer of security for your account with 2FA support.'
        },
        {
            icon: '📱',
            title: 'Biometric Authentication',
            description: 'Support for fingerprint and face recognition on compatible devices.'
        },
        {
            icon: '🔍',
            title: 'Regular Security Audits',
            description: 'Continuous monitoring and testing of our security infrastructure.'
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
                    Security First
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Your security is our top priority. We employ industry-leading security measures to protect your data and investments.
                </motion.p>
            </header>

            <section className={styles.featuresSection}>
                <div className={styles.featuresGrid}>
                    {securityFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.feature}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.featureIcon}>{feature.icon}</div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className={styles.certificationSection}>
                <h2 className={styles.sectionTitle}>Security Certifications</h2>
                <div className={styles.certifications}>
                    <div className={styles.certification}>
                        <div className={styles.certificationIcon}>🏆</div>
                        <h3>ISO 27001</h3>
                        <p>Information Security Management</p>
                    </div>
                    <div className={styles.certification}>
                        <div className={styles.certificationIcon}>✅</div>
                        <h3>SOC 2 Type II</h3>
                        <p>Security and Privacy Controls</p>
                    </div>
                    <div className={styles.certification}>
                        <div className={styles.certificationIcon}>🔐</div>
                        <h3>PCI DSS</h3>
                        <p>Payment Card Industry Security</p>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Security; 