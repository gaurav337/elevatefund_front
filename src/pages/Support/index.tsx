import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const Support: React.FC = () => {
    const [activeTab, setActiveTab] = useState('faq');
    const [showChat, setShowChat] = useState(false);

    const handleContactAction = (action: string) => {
        switch (action) {
            case 'support@elevatefund.com':
                window.location.href = `mailto:${action}`;
                break;
            case 'Start Chat':
                setShowChat(true);
                break;
            default:
                window.location.href = `tel:${action.replace(/\D/g, '')}`;
                break;
        }
    };

    const faqs = [
        {
            question: 'How do I get started with investing?',
            answer: 'Getting started is easy! Simply create an account, complete your investor profile, and browse through our vetted investment opportunities.'
        },
        {
            question: 'What are the minimum investment requirements?',
            answer: 'The minimum investment amount varies by project, typically starting from $1,000. Each project clearly displays its minimum investment requirement.'
        },
        {
            question: 'How is my investment protected?',
            answer: 'We implement strict due diligence processes, secure payment systems, and legal frameworks to protect your investments.'
        },
        {
            question: 'What types of projects can I invest in?',
            answer: 'We offer a diverse range of investment opportunities across technology, real estate, healthcare, renewable energy, and more.'
        }
    ];

    const supportChannels = [
        {
            icon: '📧',
            title: 'Email Support',
            description: '24/7 email support with response within 24 hours',
            action: 'support@elevatefund.com'
        },
        {
            icon: '💬',
            title: 'Live Chat',
            description: 'Available Monday to Friday, 9 AM - 6 PM EST',
            action: 'Start Chat'
        },
        {
            icon: '📞',
            title: 'Phone Support',
            description: 'Premium support for verified investors',
            action: '+1 (555) 123-4567'
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
                    Support Center
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    We're here to help you succeed in your investment journey
                </motion.p>
            </header>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'faq' ? styles.active : ''}`}
                    onClick={() => setActiveTab('faq')}
                >
                    FAQ
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'contact' ? styles.active : ''}`}
                    onClick={() => setActiveTab('contact')}
                >
                    Contact Us
                </button>
            </div>

            {activeTab === 'faq' && (
                <motion.section
                    className={styles.faqSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className={styles.faqGrid}>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className={styles.faqItem}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className={styles.question}>{faq.question}</h3>
                                <p className={styles.answer}>{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {activeTab === 'contact' && (
                <motion.section
                    className={styles.contactSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className={styles.channelsGrid}>
                        {supportChannels.map((channel, index) => (
                            <motion.div
                                key={index}
                                className={styles.channel}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.channelIcon}>{channel.icon}</div>
                                <h3 className={styles.channelTitle}>{channel.title}</h3>
                                <p className={styles.channelDescription}>{channel.description}</p>
                                <button
                                    className={styles.channelAction}
                                    onClick={() => handleContactAction(channel.action)}
                                >
                                    {channel.action}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {showChat && (
                <motion.div
                    className={styles.chatModal}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                >
                    <div className={styles.chatHeader}>
                        <h3>Live Chat Support</h3>
                        <button onClick={() => setShowChat(false)} className={styles.closeChat}>×</button>
                    </div>
                    <div className={styles.chatBody}>
                        <div className={styles.message}>
                            <p>Welcome to ElevateFund support! How can we help you today?</p>
                            <small>Support Agent • Just now</small>
                        </div>
                    </div>
                    <div className={styles.chatInput}>
                        <input type="text" placeholder="Type your message..." />
                        <button>Send</button>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Support; 