import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Blog: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Posts' },
        { id: 'investment', name: 'Investment Tips' },
        { id: 'startup', name: 'Startup Growth' },
        { id: 'technology', name: 'Technology' },
        { id: 'market', name: 'Market Insights' },
    ];

    const featuredPosts = [
        {
            id: 1,
            title: 'The Future of Alternative Investments in 2024',
            excerpt: 'Explore emerging trends and opportunities in the alternative investment landscape.',
            category: 'investment',
            author: 'Sarah Johnson',
            date: 'March 20, 2024',
            readTime: '8 min read',
            image: '/images/blog/future-investments.jpg'
        },
        {
            id: 2,
            title: 'How to Scale Your Startup Successfully',
            excerpt: 'Key strategies and lessons learned from successful startup founders.',
            category: 'startup',
            author: 'Michael Chen',
            date: 'March 18, 2024',
            readTime: '6 min read',
            image: '/images/blog/startup-scaling.jpg'
        }
    ];

    const posts = [
        {
            id: 3,
            title: 'AI in Investment: Beyond the Hype',
            excerpt: 'Understanding the real applications of AI in modern investment strategies.',
            category: 'technology',
            author: 'Emma Williams',
            date: 'March 15, 2024',
            readTime: '5 min read',
            image: '/images/blog/ai-investment.jpg'
        },
        {
            id: 4,
            title: '2024 Market Outlook: Opportunities and Risks',
            excerpt: 'A comprehensive analysis of market trends and potential investment opportunities.',
            category: 'market',
            author: 'Sarah Johnson',
            date: 'March 12, 2024',
            readTime: '7 min read',
            image: '/images/blog/market-outlook.jpg'
        },
        {
            id: 5,
            title: 'Building a Sustainable Investment Portfolio',
            excerpt: 'How to incorporate ESG factors into your investment strategy.',
            category: 'investment',
            author: 'Michael Chen',
            date: 'March 10, 2024',
            readTime: '6 min read',
            image: '/images/blog/sustainable-investing.jpg'
        },
        {
            id: 6,
            title: 'From Idea to IPO: A Startup Journey',
            excerpt: 'Following the journey of a successful startup from conception to public offering.',
            category: 'startup',
            author: 'Emma Williams',
            date: 'March 8, 2024',
            readTime: '9 min read',
            image: '/images/blog/startup-journey.jpg'
        }
    ];

    const filteredPosts = selectedCategory === 'all'
        ? posts
        : posts.filter(post => post.category === selectedCategory);

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
                    ElevateFund Blog
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Insights, analysis, and guides for investors and entrepreneurs
                </motion.p>
            </header>

            <section className={styles.featured}>
                <h2>Featured Posts</h2>
                <div className={styles.featuredGrid}>
                    {featuredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            className={styles.featuredPost}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.featuredImage}>
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className={styles.featuredContent}>
                                <span className={styles.category}>{categories.find(c => c.id === post.category)?.name}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <div className={styles.postMeta}>
                                    <span>{post.author}</span>
                                    <span>•</span>
                                    <time>{post.date}</time>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <Link to={`/blog/${post.id}`} className={styles.readMore}>
                                    Read Article →
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section className={styles.allPosts}>
                <div className={styles.postsHeader}>
                    <h2>Latest Articles</h2>
                    <div className={styles.categories}>
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.postsGrid}>
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            className={styles.postCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.postImage}>
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className={styles.postContent}>
                                <span className={styles.category}>{categories.find(c => c.id === post.category)?.name}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <div className={styles.postMeta}>
                                    <span>{post.author}</span>
                                    <span>•</span>
                                    <time>{post.date}</time>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <Link to={`/blog/${post.id}`} className={styles.readMore}>
                                    Read Article →
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section className={styles.subscribe}>
                <h2>Stay Updated</h2>
                <p>Get the latest insights and analysis delivered to your inbox</p>
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

export default Blog; 