import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { TbComet, TbRadar2, TbSatellite } from "react-icons/tb";
import { GiGalaxy } from "react-icons/gi";

/**
 * Footer Component
 * Provides footer with links and copyright information
 * Fixed for mobile clickability with proper z-index and touch targets
 */
export const Footer = ({ themeClass = "theme-home" }) => {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className={themeClass}>
        <footer 
            className="footer-mobile-fix relative z-10 px-4 pb-8 pt-2" 
            role="contentinfo"
        >
            <div className="surface-card mx-auto max-w-7xl rounded-[2rem] px-6 py-8">
                <div className="mb-6 flex flex-wrap items-center justify-center gap-3 border-b border-white/10 pb-6 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 md:justify-start">
                    <span className="inline-flex items-center gap-2 text-cyan-300/90">
                        <TbRadar2 className="h-4 w-4 cosmic-icon-glow" aria-hidden />
                        Station uplink
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="inline-flex items-center gap-2">
                        <TbSatellite className="h-4 w-4 text-indigo-300/90" aria-hidden />
                        All systems nominal
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="inline-flex items-center gap-2">
                        <TbComet className="h-4 w-4 text-violet-300/80" aria-hidden />
                        Cosmic portfolio v1
                    </span>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="flex items-center justify-center gap-2 font-display text-lg font-semibold text-white md:justify-start">
                            <GiGalaxy className="h-6 w-6 text-cyan-300/90 cosmic-icon-glow" aria-hidden />
                            Abhishek Mishra
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            Full stack engineer building interfaces and APIs with a deep-space mindset — precise telemetry, clean
                            orbits, and launches that survive real traffic.
                        </p>
                        <p className="mt-2 text-sm text-slate-500">&copy; {currentYear} · Signal preserved across the void.</p>
                    </div>
                    
                    <div className="flex items-center gap-4 footer-social-links">
                        <a 
                            href="https://www.linkedin.com/in/abhishekmishra04/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="footer-link cosmic-social-btn flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-300"
                        >
                            <FaLinkedin className="text-xl" />
                        </a>
                        <a 
                            href="https://github.com/abhishekmishra0409" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="footer-link cosmic-social-btn flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-300"
                        >
                            <FaGithub className="text-xl" />
                        </a>
                        <a 
                            href="https://www.instagram.com/abhishekmishra0409/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Instagram Profile"
                            className="footer-link cosmic-social-btn flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-300"
                        >
                            <FaInstagram className="text-xl" />
                        </a>
                    </div>
                </div>
                
                <div className="footer-nav mt-6 border-t border-white/10 pt-6 text-center">
                    <nav className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link 
                            to="/" 
                            className="footer-nav-link rounded-full px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            className="footer-nav-link rounded-full px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
                        >
                            About
                        </Link>
                        <Link 
                            to="/experience" 
                            className="footer-nav-link rounded-full px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
                        >
                            Experience
                        </Link>
                        <Link 
                            to="/skills" 
                            className="footer-nav-link rounded-full px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
                        >
                            Skills
                        </Link>
                        <Link 
                            to="/projects" 
                            className="footer-nav-link rounded-full px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
                        >
                            Projects
                        </Link>
                        <Link 
                            to="/contact" 
                            className="footer-nav-link rounded-full px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
        </div>
    );
};
