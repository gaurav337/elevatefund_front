import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const Privacy: React.FC = () => {
    const sections = [
        {
            title: 'Introduction',
            content: 'This Privacy Policy explains how ElevateFund ("we," "us," or "our") collects, uses, and protects your personal information when you use our investment platform and services.'
        },
        {
            title: 'Information We Collect',
            content: 'We collect information that you provide directly to us, including but not limited to: name, email address, phone number, address, financial information, and investment preferences. We also automatically collect certain information about your device and usage of our platform.'
        },
        {
            title: 'How We Use Your Information',
            content: 'We use your information to provide and improve our services, process your investments, communicate with you, and comply with legal obligations. We may also use your information for marketing purposes with your consent.'
        },
        {
            title: 'Information Sharing',
            content: 'We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our platform, processing transactions, and providing services to you.'
        },
        {
            title: 'Data Security',
            content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
            title: 'Your Rights',
            content: 'You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information.'
        },
        {
            title: 'Cookies and Tracking',
            content: 'We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences.'
        },
        {
            title: 'Updates to Privacy Policy',
            content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our platform.'
        },
        {
            title: 'Contact Us',
            content: 'If you have any questions about this Privacy Policy or our privacy practices, please contact us at privacy@elevatefund.com.'
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
                    Privacy Policy
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
                {sections.map((section, index) => (
                    <motion.section
                        key={index}
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

            <section className={styles.contact}>
                <h2>Questions about our Privacy Policy?</h2>
                <p>Our team is here to help you understand how we protect your privacy.</p>
                <a href="mailto:privacy@elevatefund.com" className={styles.contactButton}>
                    Contact Privacy Team
                </a>
            </section>
        </motion.div>
    );
};

export default Privacy; 