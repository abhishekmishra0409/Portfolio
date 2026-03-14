import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/AM Logo.png';
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navigation Bar Component with routing and active states
 * Includes main navigation links, mobile menu, and social media icons
 */
export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/experience', label: 'Experience' },
        { path: '/skills', label: 'Skills' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' }
    ];

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (path) => {
        setIsMobileMenuOpen(false);
        navigate(path);
        if (window.innerWidth >= 768) {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav className="mb-2 flex items-center justify-between py-6 sm:py-2 relative z-50" role="navigation" aria-label="Main navigation">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-shrink-0 items-center z-50"
            >
                <Link
                    to="/"
                    aria-label="Home - Abhishek Mishra Portfolio"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <img className="mx-2 w-20" src={logo} alt="Abhishek Mishra Logo - AM" loading="eager" />
                </Link>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                            ? 'text-cyan-400 border-b-2 border-cyan-400'
                            : 'text-neutral-300 hover:text-cyan-400'
                            }`}
                        aria-current={isActive(link.path) ? 'page' : undefined}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden relative z-[100] p-2 text-neutral-300 hover:text-cyan-400 transition-colors touch-manipulation"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                style={{ minWidth: '44px', minHeight: '44px', zIndex: 100 }}
            >
                {isMobileMenuOpen ? (
                    <FaTimes className="text-2xl" />
                ) : (
                    <FaBars className="text-2xl" />
                )}
            </button>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-neutral-900/95 backdrop-blur-sm z-[9998] md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ zIndex: 9998 }}
                        />

                        {/* Mobile Menu Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-64 bg-neutral-900 border-l border-neutral-800 z-[9999] md:hidden overflow-y-auto mobile-sidebar"
                            style={{
                                zIndex: 9999,
                                pointerEvents: 'auto',
                                isolation: 'isolate'
                            }}
                        >
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="absolute top-4 right-4 z-[100000] p-3 text-neutral-300 hover:text-cyan-400 transition-colors touch-manipulation bg-neutral-800/90 rounded-full backdrop-blur-sm shadow-lg border border-neutral-700/50"
                                aria-label="Close mobile menu"
                                style={{
                                    zIndex: 100000,
                                    minWidth: '44px',
                                    minHeight: '44px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    pointerEvents: 'auto',
                                    cursor: 'pointer'
                                }}
                            >
                                <FaTimes className="text-xl" />
                            </button>

                            <div className="flex flex-col p-6 pt-20 z-[500000]" style={{ pointerEvents: 'auto' }}>
                                <nav className="flex flex-col gap-4 mb-8" style={{ pointerEvents: 'auto' }}>
                                    {navLinks.map((link) => (
                                        <button
                                            key={link.path}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleNavClick(link.path);
                                            }}
                                            className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 touch-manipulation w-full z-[991111] ${isActive(link.path)
                                                ? 'text-cyan-400 bg-cyan-400/10 border-l-4 border-cyan-400'
                                                : 'text-neutral-300 hover:text-cyan-400 hover:bg-neutral-800'
                                                }`}
                                            aria-current={isActive(link.path) ? 'page' : undefined}
                                            style={{
                                                pointerEvents: 'auto',
                                                minHeight: '44px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                zIndex: 991111
                                            }}
                                        >
                                            {link.label}
                                        </button>
                                    ))}
                                </nav>

                                <div
                                    className="flex items-center justify-center gap-4 pt-4 border-t border-neutral-800"
                                    style={{ pointerEvents: 'auto' }}
                                >
                                    <a
                                        href="https://drive.google.com/file/d/19r1_IolHkqCuOp64nHSh82X5btLJUquF/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Download Resume"
                                        className="p-2 text-neutral-400 hover:text-cyan-400 transition-colors touch-manipulation"
                                        style={{
                                            pointerEvents: 'auto',
                                            minWidth: '44px',
                                            minHeight: '44px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            zIndex: 1
                                        }}
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4z"></path>
                                            <path d="M12 11a4 4 0 1 0 0 8a4 4 0 0 0 0-8z"></path>
                                            <path d="M16 3L16 7L22 7"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/abhishekmishra04/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn Profile"
                                        className="p-2 text-neutral-400 hover:text-cyan-400 transition-colors touch-manipulation"
                                        style={{
                                            pointerEvents: 'auto',
                                            minWidth: '44px',
                                            minHeight: '44px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            zIndex: 1
                                        }}
                                    >
                                        <FaLinkedin className="text-xl" />
                                    </a>
                                    <a
                                        href="https://github.com/abhishekmishra0409"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Profile"
                                        className="p-2 text-neutral-400 hover:text-cyan-400 transition-colors touch-manipulation"
                                        style={{
                                            pointerEvents: 'auto',
                                            minWidth: '44px',
                                            minHeight: '44px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            zIndex: 1
                                        }}
                                    >
                                        <FaGithub className="text-xl" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/abhishekmishra0409/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram Profile"
                                        className="p-2 text-neutral-400 hover:text-cyan-400 transition-colors touch-manipulation"
                                        style={{
                                            pointerEvents: 'auto',
                                            minWidth: '44px',
                                            minHeight: '44px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            zIndex: 1
                                        }}
                                    >
                                        <FaInstagram className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Social Media Links */}
            <div className="hidden md:flex items-center justify-center gap-4 text-2xl m-8">
                <a
                    href="https://drive.google.com/file/d/19r1_IolHkqCuOp64nHSh82X5btLJUquF/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume - Abhishek Mishra"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4z"></path>
                        <path d="M12 11a4 4 0 1 0 0 8a4 4 0 0 0 0-8z"></path>
                        <path d="M16 3L16 7L22 7"></path>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/abhishekmishra04/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile - Abhishek Mishra"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
                <a
                    href="https://github.com/abhishekmishra0409"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile - Abhishek Mishra"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/abhishekmishra0409/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile - Abhishek Mishra"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37a4 4 0 1 1-7.23 2.94a4 4 0 0 1 7.23-2.94z"></path>
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                    </svg>
                </a>
            </div>
        </nav>
    );
};
