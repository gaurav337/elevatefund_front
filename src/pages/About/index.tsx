import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const About: React.FC = () => {
    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: '/images/team/sarah.svg',
            description: 'Former investment banker with 15 years of experience in venture capital and a passion for democratizing investment opportunities.'
        },
        {
            name: 'Michael Chen',
            role: 'CTO',
            image: '/images/team/michael.svg',
            description: 'Tech veteran with expertise in building secure financial platforms and a track record of scaling fintech solutions.'
        },
        {
            name: 'Emma Williams',
            role: 'Head of Operations',
            image: '/images/team/emma.svg',
            description: 'Operations expert with a track record of scaling startups and building efficient processes for rapid growth.'
        }
    ];

    const stats = [
        { number: '$500M+', label: 'Total Investments' },
        { number: '1000+', label: 'Successful Projects' },
        { number: '50,000+', label: 'Active Investors' },
        { number: '95%', label: 'Success Rate' }
    ];

    const timeline = [
        {
            year: '2018',
            title: 'The Beginning',
            description: 'ElevateFund was founded with a vision to democratize investment opportunities.'
        },
        {
            year: '2019',
            title: 'Rapid Growth',
            description: 'Reached our first 10,000 investors and $50M in total investments.'
        },
        {
            year: '2020',
            title: 'Global Expansion',
            description: 'Expanded operations to 15 countries and launched our mobile platform.'
        },
        {
            year: '2021',
            title: 'Innovation Leader',
            description: 'Introduced AI-powered investment matching and blockchain security.'
        },
        {
            year: '2022',
            title: 'Industry Recognition',
            description: 'Named "Most Innovative FinTech Platform" and reached $500M in investments.'
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
                    About ElevateFund
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Empowering entrepreneurs and investors to build the future together
                </motion.p>
            </header>

            <section className={styles.mission}>
                <h2>Our Mission</h2>
                <p>
                    At ElevateFund, we believe in democratizing investment opportunities and
                    empowering entrepreneurs to bring their innovative ideas to life. Our
                    platform connects visionary founders with forward-thinking investors,
                    creating a community that drives innovation and sustainable growth.
                </p>
            </section>

            <section className={styles.story}>
                <h2>Our Story</h2>
                <div className={styles.storyContent}>
                    <p>
                        ElevateFund was born from a simple yet powerful idea: make quality investment
                        opportunities accessible to everyone. Our founder, Sarah Johnson, experienced
                        firsthand the barriers that existed in traditional investment landscapes and
                        was determined to create a more inclusive, transparent, and efficient platform.
                    </p>
                    <div className={styles.timeline}>
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.timelineItem}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.timelineYear}>{item.year}</div>
                                <div className={styles.timelineContent}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.stats}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className={styles.statCard}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h3>{stat.number}</h3>
                        <p>{stat.label}</p>
                    </motion.div>
                ))}
            </section>

            <section className={styles.team}>
                <h2>Our Team</h2>
                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className={styles.teamMember}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.memberImage}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    onError={(e) => {
                                        e.currentTarget.src = '/images/placeholder.svg';
                                    }}
                                />
                            </div>
                            <h3>{member.name}</h3>
                            <h4>{member.role}</h4>
                            <p>{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className={styles.cta}>
                <h2>Join Our Journey</h2>
                <p>
                    Whether you're an investor looking for opportunities or an entrepreneur
                    with a vision, we're here to help you succeed.
                </p>
                <div className={styles.ctaButtons}>
                    <Link to="/signup" className={styles.primaryButton}>
                        Get Started
                    </Link>
                    <Link to="/careers" className={styles.secondaryButton}>
                        Join Our Team
                    </Link>
                </div>
            </section>
        </motion.div>
    );
};

export default About; 