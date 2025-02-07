import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../../components/features/projects/ProjectCard/ProjectCard';
import { Search, Filter, ChevronRight, ArrowRight } from 'lucide-react';
import { useProjectFilters } from '../../hooks/projects/useProjectFilters';
import { mockProjects } from '../../data/mockProjects';
import './BrowseProjects.css';

const FEATURED_CATEGORIES = [
    {
        id: 'tech',
        name: 'Technology',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
        count: '45+ Projects'
    },
    {
        id: 'health',
        name: 'Healthcare',
        image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1200',
        count: '32+ Projects'
    },
    {
        id: 'green',
        name: 'Green Energy',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
        count: '28+ Projects'
    }
];

const SORT_OPTIONS = [
    { value: 'newest', label: 'Newest First' },
    { value: 'funding', label: 'Most Funded' },
    { value: 'ending', label: 'Ending Soon' }
];

export const BrowseProjects = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { filters, filteredProjects, handleFilterChange } = useProjectFilters(mockProjects);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        handleFilterChange({ searchQuery: e.target.value });
    };

    return (
        <div className="browse-projects">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <motion.div
                            className="hero-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1>Discover & Invest in <span className="gradient-text">Tomorrow's Leaders</span></h1>
                            <p>Access curated investment opportunities in India's most promising startups</p>

                            <div className="hero-stats">
                                <div className="stat">
                                    <h4>₹500Cr+</h4>
                                    <p>Total Investments</p>
                                </div>
                                <div className="divider"></div>
                                <div className="stat">
                                    <h4>50,000+</h4>
                                    <p>Active Investors</p>
                                </div>
                                <div className="divider"></div>
                                <div className="stat">
                                    <h4>35%</h4>
                                    <p>Avg. Returns</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="search-container"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="search-bar">
                                <Search className="search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search investment opportunities..."
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                                <button className="filter-button">
                                    <Filter size={20} />
                                    <span>Filters</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="hero-image-container">
                    <img
                        src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=2000"
                        alt="Investment"
                        className="hero-image"
                    />
                    <div className="gradient-overlay"></div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="featured-categories">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Investment Categories</h2>
                        <Link to="/categories" className="view-all">
                            View All Categories
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="categories-grid">
                        {FEATURED_CATEGORIES.map((category) => (
                            <motion.div
                                key={category.id}
                                className="category-card"
                                whileHover={{ y: -5 }}
                            >
                                <div className="category-image">
                                    <img src={category.image} alt={category.name} />
                                </div>
                                <div className="category-content">
                                    <h3>{category.name}</h3>
                                    <p>{category.count}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <h2>Latest Opportunities</h2>
                            <p>Explore our curated selection of high-potential startups</p>
                        </div>
                        <select
                            value={filters.sortBy}
                            onChange={(e) => handleFilterChange({ sortBy: e.target.value as 'newest' | 'funding' | 'ending' })}
                            className="sort-select"
                        >
                            {SORT_OPTIONS.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="projects-grid">
                        {filteredProjects.slice(0, 6).map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>

                    {filteredProjects.length > 6 && (
                        <div className="view-more">
                            <Link to="/projects" className="view-more-button">
                                View More Projects
                                <ChevronRight size={20} />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Investing?</h2>
                        <p>Join thousands of investors building their wealth with ElevateFund</p>
                        <Link to="/signup" className="cta-button">
                            Create Free Account
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BrowseProjects;
