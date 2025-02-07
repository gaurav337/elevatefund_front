import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Careers: React.FC = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('all');

    const departments = [
        { id: 'all', name: 'All Departments' },
        { id: 'engineering', name: 'Engineering' },
        { id: 'product', name: 'Product' },
        { id: 'design', name: 'Design' },
        { id: 'marketing', name: 'Marketing' },
        { id: 'operations', name: 'Operations' },
    ];

    const positions = [
        {
            id: 1,
            title: 'Senior Full Stack Engineer',
            department: 'engineering',
            location: 'Remote',
            type: 'Full-time',
            description: 'Join our engineering team to build and scale our investment platform.',
        },
        {
            id: 2,
            title: 'Product Manager',
            department: 'product',
            location: 'New York, NY',
            type: 'Full-time',
            description: 'Lead product strategy and development for our core investment products.',
        },
        {
            id: 3,
            title: 'UI/UX Designer',
            department: 'design',
            location: 'Remote',
            type: 'Full-time',
            description: 'Create beautiful and intuitive user experiences for our platform.',
        },
        {
            id: 4,
            title: 'Growth Marketing Manager',
            department: 'marketing',
            location: 'San Francisco, CA',
            type: 'Full-time',
            description: 'Drive user acquisition and engagement through innovative marketing strategies.',
        },
        {
            id: 5,
            title: 'Operations Analyst',
            department: 'operations',
            location: 'Remote',
            type: 'Full-time',
            description: 'Help scale our operations and improve internal processes.',
        },
    ];

    const filteredPositions = selectedDepartment === 'all'
        ? positions
        : positions.filter(position => position.department === selectedDepartment);

    const benefits = [
        {
            icon: '🌍',
            title: 'Remote-First Culture',
            description: 'Work from anywhere in the world with our distributed team.'
        },
        {
            icon: '💪',
            title: 'Health & Wellness',
            description: 'Comprehensive health coverage and wellness programs.'
        },
        {
            icon: '📚',
            title: 'Learning & Development',
            description: 'Annual learning stipend and professional development opportunities.'
        },
        {
            icon: '💰',
            title: 'Competitive Compensation',
            description: 'Competitive salary, equity, and performance bonuses.'
        },
        {
            icon: '⚡',
            title: 'Work-Life Balance',
            description: 'Flexible working hours and unlimited PTO policy.'
        },
        {
            icon: '🎯',
            title: 'Impact',
            description: 'Work on meaningful projects that shape the future of investing.'
        },
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
                    Join Our Team
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Help us democratize investment opportunities and shape the future of finance
                </motion.p>
            </header>

            <section className={styles.culture}>
                <h2>Our Culture</h2>
                <p>
                    At ElevateFund, we're building a diverse and inclusive team of passionate
                    individuals who are committed to transforming the investment landscape.
                    We value innovation, collaboration, and continuous learning.
                </p>
            </section>

            <section className={styles.benefits}>
                <h2>Benefits & Perks</h2>
                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={styles.benefitCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.benefitIcon}>{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className={styles.openings}>
                <h2>Open Positions</h2>
                <div className={styles.filters}>
                    {departments.map(dept => (
                        <button
                            key={dept.id}
                            className={`${styles.filterButton} ${selectedDepartment === dept.id ? styles.active : ''}`}
                            onClick={() => setSelectedDepartment(dept.id)}
                        >
                            {dept.name}
                        </button>
                    ))}
                </div>

                <div className={styles.positions}>
                    {filteredPositions.map((position, index) => (
                        <motion.div
                            key={position.id}
                            className={styles.positionCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.positionHeader}>
                                <h3>{position.title}</h3>
                                <div className={styles.tags}>
                                    <span className={styles.tag}>{position.location}</span>
                                    <span className={styles.tag}>{position.type}</span>
                                </div>
                            </div>
                            <p>{position.description}</p>
                            <Link to={`/careers/${position.id}`} className={styles.applyButton}>
                                Learn More & Apply
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className={styles.cta}>
                <h2>Don't See the Right Role?</h2>
                <p>
                    We're always looking for talented individuals to join our team.
                    Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <Link to="/careers/general" className={styles.ctaButton}>
                    Submit General Application
                </Link>
            </section>
        </motion.div>
    );
};

export default Careers; 