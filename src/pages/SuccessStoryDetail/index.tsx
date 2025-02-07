import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

interface SuccessStory {
    id: number;
    companyName: string;
    founderName: string;
    image: string;
    description: string;
    fundingRaised: number;
    industry: string;
    yearFunded: number;
    quote: string;
    founderImage: string;
    videoUrl?: string;
    metrics: {
        label: string;
        value: string;
    }[];
    socialLinks: {
        website: string;
        linkedin: string;
    };
    awards: string[];
}

const mockSuccessStories: SuccessStory[] = [
    {
        id: 1,
        companyName: "GreenTech Solutions",
        founderName: "Sarah Chen",
        image: "/images/success-stories/greentech.jpg",
        description: "GreenTech Solutions revolutionized the renewable energy sector with their innovative solar storage technology. Starting from a small research project, they've grown into a market leader in sustainable energy solutions.",
        fundingRaised: 5000000,
        industry: "Clean Energy",
        yearFunded: 2020,
        quote: "ElevateFund didn't just provide capital; they became true partners in our mission to create a sustainable future.",
        founderImage: "/images/team/sarah.svg",
        videoUrl: "https://youtube.com/watch?v=example1",
        metrics: [
            { label: "Annual Revenue", value: "$12M+" },
            { label: "Team Size", value: "50+" },
            { label: "Market Presence", value: "12 Countries" }
        ],
        socialLinks: {
            website: "https://greentech-example.com",
            linkedin: "https://linkedin.com/company/greentech"
        },
        awards: [
            "Sustainability Innovation Award 2022",
            "Tech Startup of the Year 2021",
            "Climate Action Pioneer 2023"
        ]
    },
    {
        id: 2,
        companyName: "HealthAI",
        founderName: "Dr. Michael Roberts",
        image: "/images/success-stories/healthai.jpg",
        description: "HealthAI is transforming healthcare diagnostics through artificial intelligence. Their platform has helped thousands of healthcare providers improve patient outcomes through early disease detection.",
        fundingRaised: 8000000,
        industry: "Healthcare Technology",
        yearFunded: 2019,
        quote: "With ElevateFund's support, we were able to scale our AI solutions and impact healthcare delivery worldwide.",
        founderImage: "/images/team/michael.svg",
        videoUrl: "https://youtube.com/watch?v=example2",
        metrics: [
            { label: "Patients Helped", value: "1M+" },
            { label: "Hospital Partners", value: "200+" },
            { label: "Accuracy Rate", value: "99.9%" }
        ],
        socialLinks: {
            website: "https://healthai-example.com",
            linkedin: "https://linkedin.com/company/healthai"
        },
        awards: [
            "Healthcare Innovation Award 2023",
            "AI Excellence Award 2022",
            "Best MedTech Startup 2021"
        ]
    }
];

const SuccessStoryDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const story = mockSuccessStories.find(s => s.id === Number(id));

    if (!story) {
        return (
            <div className={styles.notFound}>
                <h1>Story Not Found</h1>
                <button onClick={() => navigate('/success-stories')} className={styles.backButton}>
                    Back to Success Stories
                </button>
            </div>
        );
    }

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
                <img src={story.image} alt={story.companyName} className={styles.storyImage} />
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>{story.companyName}</h1>
                    <p className={styles.industry}>{story.industry}</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <section className={styles.description}>
                        <h2>The Story</h2>
                        <p>{story.description}</p>
                    </section>

                    <section className={styles.metrics}>
                        <h2>Impact & Growth</h2>
                        <div className={styles.metricsGrid}>
                            {story.metrics.map((metric, index) => (
                                <div key={index} className={styles.metricCard}>
                                    <h3>{metric.value}</h3>
                                    <p>{metric.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <blockquote className={styles.quote}>
                        <p>"{story.quote}"</p>
                        <footer>- {story.founderName}</footer>
                    </blockquote>

                    {story.videoUrl && (
                        <section className={styles.video}>
                            <h2>Watch Their Journey</h2>
                            <div className={styles.videoWrapper}>
                                {/* Video embed would go here */}
                                <div className={styles.videoPlaceholder}>
                                    Video Coming Soon
                                </div>
                            </div>
                        </section>
                    )}
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.founderCard}>
                        <h3>Founder</h3>
                        <div className={styles.founder}>
                            <img src={story.founderImage} alt={story.founderName} />
                            <div>
                                <h4>{story.founderName}</h4>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.statsCard}>
                        <div className={styles.stat}>
                            <h3>Funding Raised</h3>
                            <p>${(story.fundingRaised / 1000000).toFixed(1)}M</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>Year Founded</h3>
                            <p>{story.yearFunded}</p>
                        </div>
                    </div>

                    <div className={styles.awardsCard}>
                        <h3>Awards & Recognition</h3>
                        <ul>
                            {story.awards.map((award, index) => (
                                <li key={index}>{award}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.linksCard}>
                        <h3>Connect</h3>
                        <div className={styles.socialLinks}>
                            <a href={story.socialLinks.website} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                Visit Website
                            </a>
                            <a href={story.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </motion.div>
    );
};

export default SuccessStoryDetail; 