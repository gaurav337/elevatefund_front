import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Press: React.FC = () => {
    const pressReleases = [
        {
            id: 1,
            date: 'March 15, 2024',
            title: 'ElevateFund Reaches $500M in Total Investments',
            description: 'Platform milestone demonstrates growing trust in alternative investment opportunities.',
            category: 'Company News'
        },
        {
            id: 2,
            date: 'February 28, 2024',
            title: 'ElevateFund Launches New AI-Powered Investment Matching',
            description: 'Revolutionary technology helps investors find the perfect opportunities.',
            category: 'Product Launch'
        },
        {
            id: 3,
            date: 'January 10, 2024',
            title: 'ElevateFund Expands to Asian Markets',
            description: 'Strategic expansion brings investment opportunities to new regions.',
            category: 'Expansion'
        }
    ];

    const mediaFeatures = [
        {
            id: 1,
            outlet: 'TechCrunch',
            title: 'ElevateFund: Democratizing Investment for the Digital Age',
            date: 'March 20, 2024',
            link: '#',
            logo: '/images/press/techcrunch.svg'
        },
        {
            id: 2,
            outlet: 'Forbes',
            title: 'How ElevateFund is Transforming Private Investment',
            date: 'March 5, 2024',
            link: '#',
            logo: '/images/press/forbes.svg'
        },
        {
            id: 3,
            outlet: 'Bloomberg',
            title: 'ElevateFund Sees Record Growth in Q1 2024',
            date: 'February 15, 2024',
            link: '#',
            logo: '/images/press/bloomberg.svg'
        }
    ];

    const awards = [
        {
            year: '2024',
            title: 'Most Innovative FinTech Platform',
            organization: 'FinTech Awards',
            logo: '/images/awards/fintech-awards.svg'
        },
        {
            year: '2023',
            title: 'Best Investment Platform',
            organization: 'Digital Finance Awards',
            logo: '/images/awards/digital-finance.svg'
        },
        {
            year: '2023',
            title: 'Excellence in Customer Service',
            organization: 'Customer Experience Awards',
            logo: '/images/awards/cx-awards.svg'
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
                    Press & Media
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Latest news, updates, and media coverage about ElevateFund
                </motion.p>
            </header>

            <section className={styles.mediaContact}>
                <h2>Media Contact</h2>
                <p>For press inquiries, please contact:</p>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <strong>Media Relations</strong>
                        <a href="mailto:press@elevatefund.com">press@elevatefund.com</a>
                    </div>
                    <div className={styles.contactItem}>
                        <strong>Press Kit</strong>
                        <Link to="/press-kit" className={styles.pressKitButton}>
                            Download Press Kit
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.pressReleases}>
                <h2>Press Releases</h2>
                <div className={styles.releaseGrid}>
                    {pressReleases.map((release, index) => (
                        <motion.div
                            key={release.id}
                            className={styles.releaseCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <span className={styles.releaseCategory}>{release.category}</span>
                            <time>{release.date}</time>
                            <h3>{release.title}</h3>
                            <p>{release.description}</p>
                            <Link to={`/press/release/${release.id}`} className={styles.readMore}>
                                Read More →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className={styles.mediaFeatures}>
                <h2>In the Media</h2>
                <div className={styles.featureGrid}>
                    {mediaFeatures.map((feature, index) => (
                        <motion.a
                            key={feature.id}
                            href={feature.link}
                            className={styles.featureCard}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.featureLogo}>
                                <img src={feature.logo} alt={feature.outlet} />
                            </div>
                            <h3>{feature.title}</h3>
                            <div className={styles.featureMeta}>
                                <span>{feature.outlet}</span>
                                <time>{feature.date}</time>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            <section className={styles.awards}>
                <h2>Awards & Recognition</h2>
                <div className={styles.awardGrid}>
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            className={styles.awardCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.awardLogo}>
                                <img src={award.logo} alt={award.organization} />
                            </div>
                            <div className={styles.awardInfo}>
                                <span className={styles.awardYear}>{award.year}</span>
                                <h3>{award.title}</h3>
                                <p>{award.organization}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className={styles.subscribe}>
                <h2>Stay Updated</h2>
                <p>Subscribe to our press releases and company updates</p>
                <form className={styles.subscribeForm}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className={styles.subscribeInput}
                    />
                    <button type="submit" className={styles.subscribeButton}>
                        Subscribe
                    </button>
                </form>
            </section>
        </motion.div>
    );
};

export default Press; 