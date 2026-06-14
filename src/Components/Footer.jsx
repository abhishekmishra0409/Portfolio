import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { to: "/",           label: "Home" },
        { to: "/about",      label: "About" },
        { to: "/experience", label: "Experience" },
        { to: "/skills",     label: "Skills" },
        { to: "/projects",   label: "Projects" },
        { to: "/contact",    label: "Contact" },
    ];

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/abhishekmishra04/",
            label: "LinkedIn",
            icon: <FaLinkedin className="text-xl" />,
        },
        {
            href: "https://github.com/abhishekmishra0409",
            label: "GitHub",
            icon: <FaGithub className="text-xl" />,
        },
        {
            href: "https://www.instagram.com/abhishekmishra0409/",
            label: "Instagram",
            icon: <FaInstagram className="text-xl" />,
        },
    ];

    return (
        <footer className="footer-mobile-fix relative z-10 px-4 pb-8 pt-2" role="contentinfo">
            <div className="surface-card mx-auto max-w-7xl rounded-[2rem] px-6 py-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="font-display text-lg font-semibold text-white">Abhishek Mishra</p>
                        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                            Full stack developer building interfaces and APIs with the MERN stack.
                            Open to new opportunities and interesting product challenges.
                        </p>
                        <p className="mt-3 text-xs text-slate-600">
                            &copy; {currentYear} Abhishek Mishra. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-3 md:justify-end">
                        {socialLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="footer-link cosmic-social-btn flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-6 text-center">
                    <nav className="flex flex-wrap justify-center gap-2 text-sm" aria-label="Footer navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="footer-nav-link rounded-full px-3 py-2 text-slate-400 transition hover:bg-white/5"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};

