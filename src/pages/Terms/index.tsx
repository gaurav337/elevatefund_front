import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Terms: React.FC = () => {
    const sections = [
        {
            title: 'Agreement to Terms',
            content: 'By accessing or using ElevateFund\'s platform and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
        },
        {
            title: 'Eligibility',
            content: 'You must be at least 18 years old and capable of forming a binding contract to use our services. Certain investment opportunities may have additional eligibility requirements.'
        },
        {
            title: 'Account Registration',
            content: 'You agree to provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.'
        },
        {
            title: 'Investment Risks',
            content: 'All investments carry risk, and past performance does not guarantee future results. You should carefully consider your investment objectives and risk tolerance before investing.'
        },
        {
            title: 'Platform Rules',
            content: 'Users must comply with all applicable laws and regulations. Prohibited activities include market manipulation, fraudulent behavior, and unauthorized use of the platform.'
        },
        {
            title: 'Fees and Charges',
            content: 'We charge fees for certain services as outlined in our Fee Schedule. We reserve the right to modify our fee structure with appropriate notice to users.'
        },
        {
            title: 'Intellectual Property',
            content: 'All content and materials on our platform are protected by intellectual property rights. You may not copy, modify, or distribute our content without permission.'
        },
        {
            title: 'Privacy and Data Protection',
            content: 'Your use of our platform is also governed by our Privacy Policy. We collect and process personal data in accordance with applicable privacy laws.'
        },
        {
            title: 'Limitation of Liability',
            content: 'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.'
        },
        {
            title: 'Termination',
            content: 'We reserve the right to suspend or terminate your account for violations of these terms or for any other reason at our discretion.'
        },
        {
            title: 'Changes to Terms',
            content: 'We may modify these terms at any time. Continued use of our platform after changes constitutes acceptance of the modified terms.'
        },
        {
            title: 'Governing Law',
            content: 'These terms are governed by and construed in accordance with applicable laws. Any disputes shall be resolved in the appropriate courts of jurisdiction.'
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
                    Terms of Service
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Last updated: March 2024
                </motion.p>
            </header>

            <div className={styles.content}>
                <div className={styles.tableOfContents}>
                    <h2>Table of Contents</h2>
                    <ul>
                        {sections.map((section, index) => (
                            <li key={index}>
                                <a href={`#section-${index}`}>{section.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {sections.map((section, index) => (
                    <motion.section
                        key={index}
                        id={`section-${index}`}
                        className={styles.section}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h2>{section.title}</h2>
                        <p>{section.content}</p>
                    </motion.section>
                ))}
            </div>

            <section className={styles.related}>
                <h2>Related Policies</h2>
                <div className={styles.relatedLinks}>
                    <Link to="/privacy" className={styles.relatedLink}>
                        Privacy Policy
                    </Link>
                    <Link to="/compliance" className={styles.relatedLink}>
                        Compliance
                    </Link>
                    <Link to="/security" className={styles.relatedLink}>
                        Security
                    </Link>
                </div>
            </section>

            <section className={styles.contact}>
                <h2>Questions about our Terms?</h2>
                <p>Our legal team is here to help you understand our terms of service.</p>
                <a href="mailto:legal@elevatefund.com" className={styles.contactButton}>
                    Contact Legal Team
                </a>
            </section>
        </motion.div>
    );
};

export default Terms; 