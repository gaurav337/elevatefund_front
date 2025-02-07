import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const FAQ: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('general');
    const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

    const categories = [
        { id: 'general', name: 'General' },
        { id: 'investment', name: 'Investment Process' },
        { id: 'account', name: 'Account Management' },
        { id: 'security', name: 'Security' },
        { id: 'legal', name: 'Legal & Compliance' },
    ];

    const faqs = {
        general: [
            {
                id: 1,
                question: 'What is ElevateFund?',
                answer: 'ElevateFund is a modern investment platform that connects entrepreneurs with investors, making quality investment opportunities accessible to a broader audience while helping innovative startups raise capital efficiently.'
            },
            {
                id: 2,
                question: 'How does ElevateFund work?',
                answer: 'Our platform vets and lists promising investment opportunities. Investors can browse projects, perform due diligence using our tools, and invest in opportunities that match their criteria. We handle all the paperwork and provide ongoing updates about investments.'
            },
            {
                id: 3,
                question: 'Who can use ElevateFund?',
                answer: 'Both accredited and non-accredited investors can use ElevateFund, though some investment opportunities may be limited to accredited investors due to regulatory requirements. Entrepreneurs can apply to list their projects after passing our vetting process.'
            }
        ],
        investment: [
            {
                id: 4,
                question: 'What is the minimum investment amount?',
                answer: 'The minimum investment varies by opportunity but typically starts at $1,000. Each project clearly displays its minimum investment requirement.'
            },
            {
                id: 5,
                question: 'How are returns distributed?',
                answer: 'Returns are distributed according to each project\'s specific terms, which are clearly outlined in the investment documentation. Distributions can be quarterly, annual, or event-based depending on the investment structure.'
            },
            {
                id: 6,
                question: 'How do you select investment opportunities?',
                answer: 'We have a rigorous due diligence process that evaluates business models, market potential, team capabilities, financials, and legal compliance. Only about 5% of applications make it through our vetting process.'
            }
        ],
        account: [
            {
                id: 7,
                question: 'How do I create an account?',
                answer: 'Click the "Sign Up" button, fill out your basic information, verify your email, and complete your investor profile. The process typically takes less than 10 minutes.'
            },
            {
                id: 8,
                question: 'Can I invest as an entity?',
                answer: 'Yes, you can invest as an LLC, corporation, trust, or other entity. You\'ll need to provide appropriate documentation during the account setup process.'
            },
            {
                id: 9,
                question: 'How do I track my investments?',
                answer: 'Your dashboard provides real-time updates on all your investments, including performance metrics, important documents, and upcoming distributions.'
            }
        ],
        security: [
            {
                id: 10,
                question: 'How do you protect investor information?',
                answer: 'We use bank-level encryption and security measures to protect your data. Our platform undergoes regular security audits and complies with all relevant data protection regulations.'
            },
            {
                id: 11,
                question: 'Are my investments insured?',
                answer: 'While investments themselves are not insured, we maintain professional liability insurance and ensure all investments are properly structured and documented.'
            }
        ],
        legal: [
            {
                id: 12,
                question: 'What regulations do you comply with?',
                answer: 'We comply with all applicable SEC regulations, including Regulation D, Regulation A+, and Regulation CF. We\'re registered as a funding portal and maintain all necessary licenses.'
            },
            {
                id: 13,
                question: 'What documents will I receive?',
                answer: 'You\'ll receive subscription agreements, operating agreements, tax documents (K-1s), and regular investment updates. All documents are available electronically in your dashboard.'
            }
        ]
    };

    const toggleQuestion = (id: number) => {
        setExpandedQuestions(prev =>
            prev.includes(id)
                ? prev.filter(q => q !== id)
                : [...prev, id]
        );
    };

    const isExpanded = (id: number) => expandedQuestions.includes(id);

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
                    Frequently Asked Questions
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Find answers to common questions about ElevateFund
                </motion.p>
            </header>

            <div className={styles.content}>
                <aside className={styles.categories}>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </aside>

                <section className={styles.questions}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {faqs[activeCategory as keyof typeof faqs].map(faq => (
                                <motion.div
                                    key={faq.id}
                                    className={styles.questionCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <button
                                        className={`${styles.questionButton} ${isExpanded(faq.id) ? styles.expanded : ''}`}
                                        onClick={() => toggleQuestion(faq.id)}
                                    >
                                        <span>{faq.question}</span>
                                        <span className={styles.arrow}>
                                            {isExpanded(faq.id) ? '−' : '+'}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {isExpanded(faq.id) && (
                                            <motion.div
                                                className={styles.answer}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p>{faq.answer}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </section>
            </div>

            <section className={styles.support}>
                <h2>Still have questions?</h2>
                <p>Our support team is here to help you with any questions you may have.</p>
                <div className={styles.supportButtons}>
                    <Link to="/support" className={styles.primaryButton}>
                        Contact Support
                    </Link>
                    <Link to="/guides" className={styles.secondaryButton}>
                        View Guides
                    </Link>
                </div>
            </section>
        </motion.div>
    );
};

export default FAQ; 