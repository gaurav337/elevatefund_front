import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mockProjects } from '../../../data/mockProjects';
import { formatCurrency } from '../../../utils/formatting/currency';
import { calculateProgress, calculateDaysLeft } from '../../../utils/calculations/projectCalculations';
import styles from './styles.module.css';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = mockProjects.find(p => p.id === id);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h1>Project Not Found</h1>
                <button onClick={() => navigate('/browse-projects')} className={styles.backButton}>
                    Back to Projects
                </button>
            </div>
        );
    }

    const progress = calculateProgress(project.currentFunding, project.fundingGoal);
    const daysLeft = calculateDaysLeft(project.endDate);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <button onClick={handleBack} className={styles.backButton}>
                ← Back
            </button>

            <div className={styles.header}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
                <div className={styles.headerContent}>
                    <div className={styles.tags}>
                        {project.tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                    <h1 className={styles.title}>{project.title}</h1>
                    <p className={styles.location}>{project.location}</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <section className={styles.description}>
                        <h2>About the Project</h2>
                        <p>{project.description}</p>
                    </section>

                    <section className={styles.details}>
                        <h2>Project Details</h2>
                        <div className={styles.detailsGrid}>
                            <div className={styles.detailItem}>
                                <h3>Team Size</h3>
                                <p>{project.teamSize} members</p>
                            </div>
                            <div className={styles.detailItem}>
                                <h3>Stage</h3>
                                <p>{project.stage}</p>
                            </div>
                            <div className={styles.detailItem}>
                                <h3>Risk Level</h3>
                                <p>{project.risk}</p>
                            </div>
                            <div className={styles.detailItem}>
                                <h3>Category</h3>
                                <p>{project.category}</p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.documents}>
                        <h2>Documents</h2>
                        <div className={styles.documentList}>
                            <a href="#" className={styles.document}>
                                <span>Business Plan</span>
                                <span>PDF • 2.4 MB</span>
                            </a>
                            <a href="#" className={styles.document}>
                                <span>Financial Projections</span>
                                <span>PDF • 1.8 MB</span>
                            </a>
                            <a href="#" className={styles.document}>
                                <span>Team Overview</span>
                                <span>PDF • 1.2 MB</span>
                            </a>
                        </div>
                    </section>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.fundingCard}>
                        <div className={styles.fundingHeader}>
                            <div className={styles.fundingAmount}>
                                <h3>Funding Goal</h3>
                                <p>{formatCurrency(project.fundingGoal)}</p>
                            </div>
                            <div className={styles.fundingProgress}>
                                <h3>Progress</h3>
                                <p>{progress.toFixed(1)}%</p>
                            </div>
                        </div>

                        <div className={styles.progressBar}>
                            <div
                                className={styles.progress}
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className={styles.fundingStats}>
                            <div>
                                <h4>Raised</h4>
                                <p>{formatCurrency(project.currentFunding)}</p>
                            </div>
                            <div>
                                <h4>Investors</h4>
                                <p>{Math.floor(Math.random() * 50) + 10}</p>
                            </div>
                            <div>
                                <h4>Days Left</h4>
                                <p>{daysLeft}</p>
                            </div>
                        </div>

                        <button className={styles.investButton}>
                            Invest in Project
                        </button>

                        <div className={styles.minimumInvestment}>
                            <p>Minimum investment: {formatCurrency(5000)}</p>
                        </div>
                    </div>

                    <div className={styles.founderCard}>
                        <h3>Project Founder</h3>
                        <div className={styles.founder}>
                            <img src="/images/team/sarah.svg" alt="Founder" />
                            <div>
                                <h4>Sarah Johnson</h4>
                                <p>CEO & Founder</p>
                            </div>
                        </div>
                        <button className={styles.contactButton}>
                            Contact Founder
                        </button>
                    </div>
                </aside>
            </div>
        </motion.div>
    );
};

export default ProjectDetail; 