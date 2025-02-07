import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Twitter, Linkedin, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { images } from '../../utils/mediaAssets';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { path: '/browse-projects', label: 'Browse Projects' },
        { path: '/how-it-works', label: 'How It Works' },
        { path: '/success-stories', label: 'Success Stories' },
        { path: '/about', label: 'About Us' }
    ];

    const footerLinks = {
        company: [
            { path: '/about', label: 'About Us' },
            { path: '/team', label: 'Our Team' },
            { path: '/careers', label: 'Careers' },
            { path: '/press', label: 'Press' },
            { path: '/blog', label: 'Blog' }
        ],
        resources: [
            { path: '/guides', label: 'Guides' },
            { path: '/faq', label: 'FAQ' },
            { path: '/support', label: 'Support' }
        ],
        legal: [
            { path: '/privacy', label: 'Privacy Policy' },
            { path: '/terms', label: 'Terms of Service' },
            { path: '/compliance', label: 'Compliance' }
        ]
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Navbar */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <nav className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center space-x-2 flex-shrink-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <img
                                src={images.logo.main}
                                alt="ElevateFund"
                                className="h-8 w-auto"
                            />
                            <span className={`text-lg font-bold transition-colors duration-200 ${isScrolled
                                ? 'text-gray-900 dark:text-white'
                                : 'text-white'
                                }`}>
                                ElevateFund
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.path)
                                        ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                                        : isScrolled
                                            ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Auth Buttons */}
                        <div className="hidden md:flex items-center space-x-2">
                            {user ? (
                                <>
                                    <Link
                                        to="/dashboard"
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isScrolled
                                            ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isScrolled
                                            ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="md:hidden border-t dark:border-gray-800"
                            >
                                <div className="py-4 space-y-2">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            className={`block px-4 py-2 text-base font-medium rounded-lg ${isActive(link.path)
                                                ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    {user ? (
                                        <>
                                            <Link
                                                to="/dashboard"
                                                className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                                            >
                                                Dashboard
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-left"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                to="/login"
                                                className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                to="/signup"
                                                className="block px-4 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
                                            >
                                                Sign Up
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-16 md:pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Brand and Social */}
                        <div className="lg:col-span-2">
                            <Link to="/" className="flex items-center space-x-2 mb-6">
                                <img
                                    src={images.logo.main}
                                    alt="ElevateFund"
                                    className="h-8 w-auto"
                                />
                                <span className="text-lg font-bold text-gray-900 dark:text-white">
                                    ElevateFund
                                </span>
                            </Link>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                                Empowering entrepreneurs and investors to build a better future together. Join our community of innovators and change-makers.
                            </p>
                            <div className="flex items-center space-x-4 mb-8">
                                <a href="mailto:contact@elevatefund.com" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                    <Mail className="w-5 h-5" />
                                </a>
                                <a href="tel:+1234567890" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                    <Phone className="w-5 h-5" />
                                </a>
                                <a href="https://twitter.com/elevatefund" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com/company/elevatefund" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://facebook.com/elevatefund" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="https://instagram.com/elevatefund" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                                Resources
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                                Legal
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-base text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                        <div className="text-center">
                            <p className="text-base text-gray-600 dark:text-gray-400">
                                &copy; {new Date().getFullYear()} ElevateFund. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout; 