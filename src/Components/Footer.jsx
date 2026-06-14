import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { personalData } from "../data/personalData.js";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            href: personalData.linkedinUrl,
            label: "LinkedIn",
            icon: <FaLinkedin className="text-xl" />,
        },
        {
            href: personalData.githubUrl,
            label: "GitHub",
            icon: <FaGithub className="text-xl" />,
        },
        {
            href: personalData.instagramUrl,
            label: "Instagram",
            icon: <FaInstagram className="text-xl" />,
        },
    ];

    return (
        <footer className="footer-mobile-fix relative z-10 w-full border-t border-white/5 bg-[#060a12]/80 px-4 py-8 sm:px-6 lg:px-8" role="contentinfo">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="font-display text-lg font-semibold text-white">{personalData.name}</p>
                        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                            Full stack developer building interfaces and APIs with the MERN stack.
                            Open to new opportunities and interesting product challenges.
                        </p>
                        <p className="mt-3 text-xs text-slate-600">
                            &copy; {currentYear} {personalData.name}. All rights reserved.
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
            </div>
        </footer>
    );
};

