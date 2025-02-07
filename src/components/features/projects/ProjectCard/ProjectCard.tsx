import { memo } from 'react';
import { motion } from 'framer-motion';
import { ProjectCardProps } from './types';
import { cardVariants, progressVariants } from './animations';
import { formatCurrency } from '../../../../utils/formatting/currency';
import styles from './styles.module.css';

const ProjectImage = memo(({ image, title, stage, risk }: {
    image: string;
    title: string;
    stage: string;
    risk: string;
}) => {
    const riskClass = styles[`risk${risk}` as keyof typeof styles];
    return (
        <div className={styles.projectImage} role="img" aria-label={`${title} project image`}>
            <img
                src={image}
                alt={title}
                loading="lazy"
                onError={(e) => {
                    e.currentTarget.src = '/images/placeholder.jpg';
                    e.currentTarget.alt = 'Project image placeholder';
                }}
            />
            <div className={styles.projectStage} role="status">{stage}</div>
            <div className={`${styles.projectRisk} ${riskClass}`} role="status" aria-label={`Risk level: ${risk}`}>
                Risk: {risk}
            </div>
        </div>
    );
});

const ProjectTags = memo(({ tags }: { tags: string[] }) => (
    <div className={styles.tags} role="list" aria-label="Project tags">
        {tags.map((tag, index) => (
            <motion.span
                key={`${tag}-${index}`}
                className={styles.tag}
                whileHover={{ scale: 1.1 }}
                role="listitem"
            >
                #{tag}
            </motion.span>
        ))}
    </div>
));

const ProjectProgress = memo(({ currentFunding, fundingGoal, progressPercentage }: {
    currentFunding: number;
    fundingGoal: number;
    progressPercentage: number;
}) => (
    <div className={styles.fundingProgress}>
        <div
            className={styles.progressBar}
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Project funding progress"
        >
            <motion.div
                className={styles.progress}
                variants={progressVariants}
                initial="initial"
                animate="animate"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
        </div>
        <div className={styles.fundingDetails}>
            <span>{formatCurrency(currentFunding)} raised</span>
            <span>{formatCurrency(fundingGoal)} goal</span>
        </div>
    </div>
));

export const ProjectCard = memo(({ project, onLearnMore }: ProjectCardProps) => {
    const handleLearnMore = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (onLearnMore) {
            onLearnMore(project);
        }
    };

    return (
        <motion.article
            className={styles.projectCard}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            whileHover="hover"
            layout
            role="article"
            aria-label={`Project: ${project.title}`}
        >
            <ProjectImage
                image={project.image}
                title={project.title}
                stage={project.stage}
                risk={project.risk}
            />

            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.details} role="list" aria-label="Project details">
                    <div className={styles.detailItem} role="listitem">
                        <span className={styles.detailIcon} aria-hidden="true">📍</span>
                        <span>{project.location}</span>
                    </div>
                    <div className={styles.detailItem} role="listitem">
                        <span className={styles.detailIcon} aria-hidden="true">👥</span>
                        <span>Team Size: {project.teamSize}</span>
                    </div>
                    <div className={styles.detailItem} role="listitem">
                        <span className={styles.detailIcon} aria-hidden="true">⏳</span>
                        <span>{project.daysLeft} days left</span>
                    </div>
                </div>

                <ProjectTags tags={project.tags} />

                <ProjectProgress
                    currentFunding={project.currentFunding}
                    fundingGoal={project.fundingGoal}
                    progressPercentage={project.progressPercentage}
                />

                <motion.button
                    className={styles.investButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLearnMore}
                    aria-label={`Learn more about ${project.title}`}
                >
                    Learn More
                </motion.button>
            </div>
        </motion.article>
    );
}); 