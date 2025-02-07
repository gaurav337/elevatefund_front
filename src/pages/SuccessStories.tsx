import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star, TrendingUp, Users, BarChart, Quote } from 'lucide-react';
import './SuccessStories.css';

const SUCCESS_STORIES = [
    {
        id: '1',
        title: 'AI Healthcare Platform',
        description: 'Revolutionizing early disease detection with AI technology',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
        founderImage: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=200',
        founder: 'Dr. Sarah Patel',
        role: 'Founder & CEO',
        fundingRaised: '₹5.2 Crores',
        growth: '325%',
        impact: '50,000+ Patients Served',
        quote: 'ElevateFund provided not just capital, but the strategic guidance and network that helped us scale rapidly.',
        category: 'Healthcare',
        tags: ['AI', 'Healthcare', 'Technology']
    },
    {
        id: '2',
        title: 'Green Energy Solutions',
        description: 'Making renewable energy accessible and affordable',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
        founderImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
        founder: 'Rahul Sharma',
        role: 'Co-founder',
        fundingRaised: '₹8.5 Crores',
        growth: '250%',
        impact: '100K+ Homes Powered',
        quote: "The platform's focus on sustainable investments aligned perfectly with our mission to create environmental impact.",
        category: 'Clean Energy',
        tags: ['Renewable', 'CleanTech', 'Sustainability']
    },
    {
        id: '3',
        title: 'FinTech Revolution',
        description: 'Democratizing financial services for rural India',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800',
        founderImage: 'https://images.unsplash.com/photo-1580518337843-f959e992563b?auto=format&fit=crop&q=80&w=200',
        founder: 'Priya Kapoor',
        role: 'Founder',
        fundingRaised: '₹12 Crores',
        growth: '400%',
        impact: '2M+ Users',
        quote: "ElevateFund's investor network opened doors to partnerships that accelerated our growth exponentially.",
        category: 'Fintech',
        tags: ['Finance', 'Technology', 'Rural Impact']
    }
];

const IMPACT_STATS = [
    { value: '₹100Cr+', label: 'Total Funding Raised', icon: BarChart, color: '#6366F1' },
    { value: '50+', label: 'Successful Startups', icon: Star, color: '#8B5CF6' },
    { value: '300%', label: 'Average Growth', icon: TrendingUp, color: '#10B981' },
    { value: '1M+', label: 'Lives Impacted', icon: Users, color: '#3B82F6' }
];

// Impact Card Component
const ImpactCard = ({ stat }) => (
    <div className="impact-card" style={{ borderColor: stat.color }}>
        <div className="impact-icon-wrapper" style={{ backgroundColor: `${stat.color}15` }}>
            <stat.icon size={24} style={{ color: stat.color }} />
        </div>
        <h3>{stat.value}</h3>
        <p>{stat.label}</p>
    </div>
);

// Success Story Card Component
const StoryCard = ({ story }) => (
    <div key={story.id} className="story-card">
        <div className="story-image-container">
            <img src={story.image} alt={story.title} className="story-image" />
            <div className="story-category">{story.category}</div>
        </div>
        <div className="story-content">
            <div className="story-header">
                <img src={story.founderImage} alt={story.founder} className="founder-image" />
                <div className="founder-info">
                    <h3>{story.founder}</h3>
                    <p>{story.role}</p>
                </div>
            </div>
            <h2>{story.title}</h2>
            <p className="story-description">{story.description}</p>
            <div className="story-metrics">
                <div className="metric">
                    <span className="metric-label">Raised</span>
                    <span className="metric-value">{story.fundingRaised}</span>
                </div>
                <div className="metric">
                    <span className="metric-label">Growth</span>
                    <span className="metric-value">{story.growth}</span>
                </div>
                <div className="metric">
                    <span className="metric-label">Impact</span>
                    <span className="metric-value">{story.impact}</span>
                </div>
            </div>
            <div className="story-quote">
                <Quote size={20} />
                <p>{story.quote}</p>
            </div>
            <div className="story-tags">
                {story.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                ))}
            </div>
            <Link to={`/success-stories/${story.id}`} className="read-more-link">
                Read Full Story
                <ArrowUpRight size={20} />
            </Link>
        </div>
    </div>
);

const SuccessStories: React.FC = () => {
    return (
        <div className="success-stories-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1560285843-9d9d94edff8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Smart Investing" />
                    </div>
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span>Success Stories</span>
                        </div>
                        <h1 className="hero-title">
                            Transforming Ideas into
                            <span className="gradient-text"> Success Stories</span>
                        </h1>
                        <p className="hero-description">
                            Discover how entrepreneurs are building tomorrow&#39;s industry leaders with ElevateFund.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/signup" className="primary-button">
                                Start Investing
                            </Link>
                            <button className="secondary-button">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats Section */}
            <section className="impact-section">
                <div className="container">
                    <div className="impact-grid">
                        {IMPACT_STATS.map((stat, index) => (
                            <ImpactCard key={index} stat={stat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="stories-section">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <span className="section-badge">Featured Stories</span>
                            <h2 className="section-title">Meet Our Success Stories</h2>
                            <p className="section-description">
                                From innovative startups to industry leaders, discover the journeys of our portfolio companies
                            </p>
                        </div>
                    </div>
                    <div className="stories-grid">
                        {SUCCESS_STORIES.map(story => <StoryCard key={story.id} story={story} />)}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <span className="cta-badge">Start Your Journey</span>
                        <h2>Ready to Write Your Success Story?</h2>
                        <p>Join the community of successful entrepreneurs who chose ElevateFund</p>
                        <div className="cta-buttons">
                            <Link to="/register" className="cta-button primary">
                                Start Your Campaign
                                <ArrowUpRight size={20} />
                            </Link>
                            <Link to="/contact" className="cta-button secondary">
                                Talk to Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;
