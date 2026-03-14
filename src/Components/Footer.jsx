import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

/**
 * Footer Component
 * Provides footer with links and copyright information
 * Fixed for mobile clickability with proper z-index and touch targets
 */
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer 
            className="bg-neutral-900 border-t border-neutral-800 py-8 px-4 relative z-10 footer-mobile-fix" 
            role="contentinfo"
        >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-neutral-400 text-sm text-center md:text-left">
                        <p>&copy; {currentYear} <strong>Abhishek Mishra</strong>. All rights reserved.</p>
                        <p className="mt-1">Full Stack Developer | MERN Developer | React Developer</p>
                    </div>
                    
                    <div className="flex items-center gap-4 footer-social-links">
                        <a 
                            href="https://www.linkedin.com/in/abhishekmishra04/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="text-neutral-400 hover:text-cyan-400 transition-colors p-2 touch-manipulation footer-link"
                        >
                            <FaLinkedin className="text-xl" />
                        </a>
                        <a 
                            href="https://github.com/abhishekmishra0409" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="text-neutral-400 hover:text-cyan-400 transition-colors p-2 touch-manipulation footer-link"
                        >
                            <FaGithub className="text-xl" />
                        </a>
                        <a 
                            href="https://www.instagram.com/abhishekmishra0409/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Instagram Profile"
                            className="text-neutral-400 hover:text-cyan-400 transition-colors p-2 touch-manipulation footer-link"
                        >
                            <FaInstagram className="text-xl" />
                        </a>
                    </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-neutral-800 text-center footer-nav">
                    <nav className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link 
                            to="/" 
                            className="text-neutral-400 hover:text-cyan-400 transition-colors px-3 py-2 touch-manipulation footer-nav-link"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-neutral-400 hover:text-cyan-400 transition-colors px-3 py-2 touch-manipulation footer-nav-link"
                        >
                            About
                        </Link>
                        <Link 
                            to="/experience" 
                            className="text-neutral-400 hover:text-cyan-400 transition-colors px-3 py-2 touch-manipulation footer-nav-link"
                        >
                            Experience
                        </Link>
                        <Link 
                            to="/skills" 
                            className="text-neutral-400 hover:text-cyan-400 transition-colors px-3 py-2 touch-manipulation footer-nav-link"
                        >
                            Skills
                        </Link>
                        <Link 
                            to="/projects" 
                            className="text-neutral-400 hover:text-cyan-400 transition-colors px-3 py-2 touch-manipulation footer-nav-link"
                        >
                            Projects
                        </Link>
                        <Link 
                            to="/contact" 
                            className="text-neutral-400 hover:text-cyan-400 transition-colors px-3 py-2 touch-manipulation footer-nav-link"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};
