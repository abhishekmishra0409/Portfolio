import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import logo from "../assets/AM Logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {
    TbBriefcase,
    TbCode,
    TbDownload,
    TbFolder,
    TbHome,
    TbMail,
    TbMenu2,
    TbUser,
    TbX,
} from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "../data/personalData.js";
import { scrollToElement } from "../utils/scrollUtils.js";

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { path: "/",           sectionId: "home",       label: "Home",       Icon: TbHome },
        { path: "/about",      sectionId: "about",      label: "About",      Icon: TbUser },
        { path: "/skills",     sectionId: "skills",     label: "Skills",     Icon: TbCode },
        { path: "/projects",   sectionId: "projects",   label: "Projects",   Icon: TbFolder },
        { path: "/contact",    sectionId: "contact",    label: "Contact",    Icon: TbMail },
    ];

    const socialLinks = [
        {
            href: personalData.resumeUrl,
            label: "Download Resume",
            icon: <TbDownload className="text-lg" />,
        },
        {
            href: personalData.linkedinUrl,
            label: "LinkedIn Profile",
            icon: <FaLinkedin className="text-lg" />,
        },
        {
            href: personalData.githubUrl,
            label: "GitHub Profile",
            icon: <FaGithub className="text-lg" />,
        },
        {
            href: personalData.instagramUrl,
            label: "Instagram Profile",
            icon: <FaInstagram className="text-lg" />,
        },
    ];

    useEffect(() => { setIsMobileMenuOpen(false); }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [isMobileMenuOpen]);

    // IntersectionObserver for scroll-spy active section detection
    useEffect(() => {
        const homeAndSectionPaths = ["/", "/about", "/experience", "/skills", "/projects", "/contact"];
        if (!homeAndSectionPaths.includes(location.pathname)) {
            setActiveSection("");
            return;
        }

        const sections = ["home", "about", "timeline", "experience", "skills", "projects", "contact"];
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -50% 0px",
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    // Highlight "About" navigation link when scrolling through the timeline or Experience section
                    if (id === "timeline" || id === "experience") {
                        setActiveSection("about");
                    } else {
                        setActiveSection(id);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [location.pathname]);

    const isActive = (path, sectionId) => {
        const homeAndSectionPaths = ["/", "/about", "/experience", "/skills", "/projects", "/contact"];
        if (homeAndSectionPaths.includes(location.pathname)) {
            return activeSection === sectionId;
        }
        if (path === "/") return location.pathname === "/";
        return location.pathname.startsWith(path);
    };

    const handleNavClick = (path, sectionId) => {
        setIsMobileMenuOpen(false);
        const homeAndSectionPaths = ["/", "/about", "/experience", "/skills", "/projects", "/contact"];
        
        if (homeAndSectionPaths.includes(location.pathname)) {
            // Smooth scroll
            scrollToElement(sectionId, 80);
            // Update URL without page reload
            window.history.pushState(null, "", path);
        } else {
            navigate(path);
        }
    };

    const mobileMenuLayer =
        typeof document !== "undefined"
            ? createPortal(
                  <AnimatePresence>
                      {isMobileMenuOpen && (
                          <>
                              <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="mobile-nav-backdrop fixed inset-0 z-[2147483000] bg-slate-950/92 backdrop-blur-md md:hidden"
                                  style={{ pointerEvents: "auto" }}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  aria-hidden="true"
                              />

                              <motion.div
                                  initial={{ x: "100%" }}
                                  animate={{ x: 0 }}
                                  exit={{ x: "100%" }}
                                  transition={{ type: "spring", damping: 28, stiffness: 280 }}
                                  className="mobile-sidebar mobile-nav-drawer fixed right-0 top-0 z-[2147483001] flex h-[100dvh] max-h-[100dvh] w-[min(20rem,100vw)] flex-col border-l border-white/[0.08] bg-[#0b1222] shadow-[0_0_60px_rgba(0,0,0,0.75)] md:hidden"
                                  style={{ pointerEvents: "auto", isolation: "isolate" }}
                                  role="dialog"
                                  aria-modal="true"
                                  aria-label="Mobile navigation"
                                  onClick={(e) => e.stopPropagation()}
                              >
                                  <div className="surface-card flex min-h-0 flex-1 flex-col overflow-y-auto rounded-none border-0 border-l border-white/10 bg-[rgba(11,18,34,0.98)] shadow-none backdrop-blur-xl">
                                      <button
                                          type="button"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                          className="absolute right-4 top-4 z-[10] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-900/90 text-slate-200 transition hover:border-blue-400/30 hover:text-blue-300"
                                          aria-label="Close mobile menu"
                                      >
                                          <TbX className="text-xl" />
                                      </button>

                                      <div className="flex flex-col p-6 pt-20">
                                          <div className="mb-8 border-b border-white/10 pb-6">
                                              <p className="font-semibold text-white">Navigation</p>
                                              <p className="mt-1 text-sm text-slate-400">Jump to any section.</p>
                                          </div>

                                          <nav className="mb-8 flex flex-col gap-2" aria-label="Mobile pages">
                                              {navLinks.map((link) => {
                                                  const Icon = link.Icon;
                                                  const active = isActive(link.path, link.sectionId);
                                                  return (
                                                      <button
                                                          key={link.path}
                                                          type="button"
                                                          onClick={(e) => {
                                                              e.preventDefault();
                                                              e.stopPropagation();
                                                              handleNavClick(link.path, link.sectionId);
                                                          }}
                                                          className={`flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-base font-medium transition-all duration-200 ${
                                                              active
                                                                  ? "nav-pill-active bg-white/[0.06]"
                                                                  : "text-slate-300 hover:bg-white/8 hover:text-white"
                                                          }`}
                                                          aria-current={active ? "page" : undefined}
                                                      >
                                                          <Icon className="h-5 w-5 shrink-0 opacity-80" aria-hidden />
                                                          {link.label}
                                                      </button>
                                                  );
                                              })}
                                          </nav>

                                          <div className="mt-auto flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-6">
                                              {socialLinks.map((item) => (
                                                  <a
                                                      key={item.label}
                                                      href={item.href}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      aria-label={item.label}
                                                      className="cosmic-social-btn flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-900/80 text-slate-300"
                                                  >
                                                      {item.icon}
                                                  </a>
                                              ))}
                                          </div>
                                      </div>
                                  </div>
                              </motion.div>
                          </>
                      )}
                  </AnimatePresence>,
                  document.body,
              )
            : null;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 w-full border-b border-white/[0.07] bg-[#0b1020]/82 backdrop-blur-md transition-all duration-300 ${
                    isMobileMenuOpen ? "z-[2147483002]" : "z-50"
                }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-shrink-0 items-center"
                    >
                        <Link
                            to="/"
                            aria-label="Home — Abhishek Mishra"
                            onClick={() => handleNavClick("/", "home")}
                            className="flex items-center gap-3"
                        >
                            <img className="w-12 sm:w-14" src={logo} alt="Abhishek Mishra — AM" loading="eager" />
                            <div className="hidden sm:block">
                                <p className="text-sm font-semibold text-slate-100 tracking-tight">
                                    {personalData.name}
                                </p>
                                <p className="mt-0.5 text-xs text-slate-500">{personalData.jobTitle}</p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop nav — text-only pills, no icons */}
                    <div className="hidden md:flex flex-1 items-center justify-center gap-1">
                        {navLinks.map((link) => {
                            const active = isActive(link.path, link.sectionId);
                            return (
                                <button
                                    key={link.path}
                                    onClick={() => handleNavClick(link.path, link.sectionId)}
                                    className={`nav-pill ${active ? "nav-pill-active" : ""}`}
                                    aria-current={active ? "page" : undefined}
                                >
                                    {link.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="hidden items-center justify-center gap-2 text-slate-300 md:flex">
                        {socialLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="cosmic-social-btn flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>

                    <button
                        className="relative z-[100] flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:text-blue-300 md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <TbX className="text-xl" /> : <TbMenu2 className="text-xl" />}
                    </button>
                </div>
            </nav>
            {mobileMenuLayer}
        </>
    );
};

