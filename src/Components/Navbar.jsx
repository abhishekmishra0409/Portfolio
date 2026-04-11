import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import logo from "../assets/AM Logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {
    TbAntennaBars5,
    TbMenu2,
    TbPlanet,
    TbRadar2,
    TbRocket,
    TbSatellite,
    TbTopologyStarRing,
    TbX,
} from "react-icons/tb";
import { GiRingedPlanet } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Navigation — cosmic sector links + station-style chrome
 */
export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    const navLinks = [
        { path: "/", label: "Home", Icon: TbPlanet },
        { path: "/about", label: "About", Icon: GiRingedPlanet },
        { path: "/experience", label: "Experience", Icon: TbRocket },
        { path: "/skills", label: "Skills", Icon: TbTopologyStarRing },
        { path: "/projects", label: "Projects", Icon: TbSatellite },
        { path: "/contact", label: "Contact", Icon: TbAntennaBars5 },
    ];

    const socialLinks = [
        {
            href: "https://drive.google.com/file/d/19r1_IolHkqCuOp64nHSh82X5btLJUquF/view?usp=sharing",
            label: "Download mission dossier (resume)",
            icon: <TbRadar2 className="text-lg cosmic-icon-glow" />,
        },
        {
            href: "https://www.linkedin.com/in/abhishekmishra04/",
            label: "LinkedIn Profile",
            icon: <FaLinkedin className="text-lg" />,
        },
        {
            href: "https://github.com/abhishekmishra0409",
            label: "GitHub Profile",
            icon: <FaGithub className="text-lg" />,
        },
        {
            href: "https://www.instagram.com/abhishekmishra0409/",
            label: "Instagram Profile",
            icon: <FaInstagram className="text-lg" />,
        },
    ];

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (path) => {
        setIsMobileMenuOpen(false);
        navigate(path);
        if (window.innerWidth >= 768) {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
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
                                  className="mobile-sidebar mobile-nav-drawer fixed right-0 top-0 z-[2147483001] flex h-[100dvh] max-h-[100dvh] w-[min(20rem,100vw)] flex-col border-l border-white/15 bg-[#030712] shadow-[0_0_60px_rgba(0,0,0,0.75)] md:hidden"
                                  style={{
                                      pointerEvents: "auto",
                                      isolation: "isolate",
                                  }}
                                  role="dialog"
                                  aria-modal="true"
                                  aria-label="Mobile navigation"
                                  onClick={(e) => e.stopPropagation()}
                              >
                                  <div className="surface-card flex min-h-0 flex-1 flex-col overflow-y-auto rounded-none border-0 border-l border-white/10 bg-[rgba(3,7,18,0.97)] shadow-none backdrop-blur-xl">
                                      <button
                                          type="button"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                          className="absolute right-4 top-4 z-[10] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-900/90 text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300"
                                          aria-label="Close mobile menu"
                                      >
                                          <TbX className="text-xl" />
                                      </button>

                                      <div className="flex flex-col p-6 pt-20">
                                          <div className="mb-8 border-b border-white/10 pb-6">
                                              <p className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                                                  <TbTopologyStarRing className="text-cyan-300 cosmic-icon-glow" aria-hidden />
                                                  Stellar navigation
                                              </p>
                                              <p className="mt-2 text-sm leading-6 text-slate-400">
                                                  Plot a course to any sector — work log, skills grid, mission archive, or comms relay.
                                              </p>
                                          </div>

                                          <nav className="mb-8 flex flex-col gap-2" aria-label="Mobile pages">
                                              {navLinks.map((link) => {
                                                  const Icon = link.Icon;
                                                  return (
                                                      <button
                                                          key={link.path}
                                                          type="button"
                                                          onClick={(e) => {
                                                              e.preventDefault();
                                                              e.stopPropagation();
                                                              handleNavClick(link.path);
                                                          }}
                                                          className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-base font-semibold transition-all duration-200 ${
                                                              isActive(link.path)
                                                                  ? "nav-pill-active bg-white/[0.08]"
                                                                  : "text-slate-300 hover:bg-white/10 hover:text-white"
                                                          }`}
                                                          aria-current={isActive(link.path) ? "page" : undefined}
                                                      >
                                                          <Icon className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
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
                className={`sticky top-4 ${isMobileMenuOpen ? "z-[2147483002]" : "z-50"}`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="surface-card flex items-center justify-between gap-4 rounded-[1.75rem] px-4 py-3 sm:px-5 lg:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45 }}
                    className="flex flex-shrink-0 items-center"
                >
                    <Link
                        to="/"
                        aria-label="Home - Abhishek Mishra Portfolio"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3"
                    >
                        <span className="relative">
                            <img className="w-14 sm:w-16" src={logo} alt="Abhishek Mishra Logo - AM" loading="eager" />
                            <TbSatellite
                                className="absolute -right-1 -top-1 h-5 w-5 text-cyan-300/90 cosmic-icon-glow sm:h-6 sm:w-6"
                                aria-hidden
                            />
                        </span>
                        <div className="hidden sm:block">
                            <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-slate-200">
                                Abhishek Mishra
                            </p>
                            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-400">
                                <TbRocket className="h-3.5 w-3.5 text-cyan-400/80" aria-hidden />
                                Mission specialist · Full stack
                            </p>
                        </div>
                    </Link>
                </motion.div>

                <div className="hidden md:flex flex-1 items-center justify-center gap-1 lg:gap-2">
                    {navLinks.map((link) => {
                        const Icon = link.Icon;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-pill ${isActive(link.path) ? "nav-pill-active" : ""}`}
                                aria-current={isActive(link.path) ? "page" : undefined}
                            >
                                <Icon className="h-4 w-4 shrink-0 opacity-85 cosmic-icon-glow" aria-hidden />
                                {link.label}
                            </Link>
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
                            className="cosmic-social-btn flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                <button
                    className="relative z-[100] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:text-cyan-300 md:hidden"
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
