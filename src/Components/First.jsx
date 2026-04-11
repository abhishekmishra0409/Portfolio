import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TbArrowRight, TbDatabase, TbDeviceMobile, TbRadar2, TbRocket, TbServer2 } from "react-icons/tb";
import { GiRingedPlanet, GiSatelliteCommunication } from "react-icons/gi";

const textVariant = {
    initial: {
        opacity: 0,
        y: 32,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.12,
        },
    },
};

/**
 * Hero/First Section Component
 * Main landing section with introduction and call-to-action
 */
export const First = () => {
    const stats = [
        { value: "MERN", label: "Production-ready full stack builds" },
        { value: "React", label: "Frontend systems with polished UX" },
        { value: "Node", label: "Reliable APIs and integrations" },
    ];
    const missionTracks = [
        {
            title: "Frontend Orbit",
            detail: "Interfaces that feel fast, clear, and deliberate.",
            icon: <GiRingedPlanet className="text-2xl text-cyan-300 cosmic-icon-glow" />,
        },
        {
            title: "Backend Core",
            detail: "APIs, databases, and integrations built to stay dependable.",
            icon: <TbServer2 className="text-2xl text-sky-300 cosmic-icon-glow" />,
        },
        {
            title: "Mobile Signal",
            detail: "React Native builds and payment-ready feature execution.",
            icon: <TbDeviceMobile className="text-2xl text-indigo-300 cosmic-icon-glow" />,
        },
    ];
    const cosmicNodes = [
        { label: "UI Systems", orbit: "top-10 left-8" },
        { label: "APIs", orbit: "top-20 right-8" },
        { label: "Payments", orbit: "bottom-28 left-10" },
        { label: "Mobile", orbit: "bottom-12 right-14" },
    ];
    const orbitStats = [
        {
            label: "Launch Stack",
            value: "React / Node",
            icon: <TbRocket className="text-lg text-cyan-300 cosmic-icon-glow" />,
        },
        {
            label: "Data Layer",
            value: "MongoDB",
            icon: <TbDatabase className="text-lg text-sky-300 cosmic-icon-glow" />,
        },
        {
            label: "Integrations",
            value: "Stripe / Razorpay",
            icon: <GiSatelliteCommunication className="text-lg text-indigo-300 cosmic-icon-glow" />,
        },
    ];
    const stack = ["React", "Next.js", "React Native", "Node.js", "MongoDB", "Stripe", "Razorpay"];
    const missionPillars = [
        "Design-first interfaces",
        "Scalable backend delivery",
        "Product-ready integrations",
    ];

    return (
        <header className="relative overflow-hidden py-6 sm:py-8 lg:py-12" role="banner">
            <div className="grid min-h-[calc(100vh-8rem)] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={textVariant}
                    className="flex flex-col gap-6 lg:gap-8"
                >
                    <motion.div variants={textVariant} className="space-y-5">
                        <p className="space-eyebrow">
                            Launch Bay · Orbit 01
                        </p>
                        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
                            Launching product ideas into clean interfaces, stable APIs, and real-world builds.
                        </h1>
                        <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                            I design and engineer full stack experiences with a space-station mindset: every screen, service, and integration should feel intentional, reliable, and ready for pressure.
                        </p>
                    </motion.div>

                    <motion.div variants={textVariant} className="flex flex-wrap gap-4">
                        <Link to="/projects" className="button-primary">
                            View Projects
                            <TbArrowRight className="text-lg" />
                        </Link>
                        <Link to="/contact" className="button-secondary">
                            Let&apos;s Connect
                        </Link>
                    </motion.div>

                    <motion.div variants={textVariant} className="flex flex-wrap gap-2">
                        {missionPillars.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-cyan-400/15 bg-cyan-400/8 px-4 py-2 text-sm font-medium text-cyan-100/90"
                            >
                                {item}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div variants={textVariant} className="grid gap-4 sm:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.value} className="cosmic-hud-card surface-card rounded-3xl p-5">
                                <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                                <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.2 }}
                    className="relative flex items-center justify-center lg:justify-end"
                >
                    <div className="absolute inset-auto h-56 w-56 rounded-full bg-cyan-400/10 blur-[120px] sm:h-80 sm:w-80" />
                    <div className="home-cosmos-panel surface-card relative w-full max-w-[34rem] rounded-[2rem] p-5 sm:p-6">
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300/75">
                            <span className="flex items-center gap-2">
                                <TbRadar2 className="h-4 w-4 text-cyan-300/90 cosmic-icon-glow" aria-hidden />
                                Mission Control
                            </span>
                            <span className="font-display text-[0.65rem] tracking-[0.35em] text-cyan-200/80">UTC 2026</span>
                        </div>

                        <div className="mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                            <div className="rounded-[1.75rem] border border-cyan-400/10 bg-[radial-gradient(circle_at_30%_30%,_rgba(56,189,248,0.2),_transparent_22%),radial-gradient(circle_at_70%_65%,_rgba(129,140,248,0.24),_transparent_24%),linear-gradient(180deg,_rgba(10,18,35,0.96)_0%,_rgba(4,9,19,0.98)_100%)] p-5">
                                <div className="hero-orbit relative mx-auto aspect-square max-w-[18rem] rounded-full border border-cyan-400/10">
                                    <div className="absolute inset-[12%] rounded-full border border-dashed border-cyan-400/20"></div>
                                    <div className="absolute inset-[26%] rounded-full border border-indigo-400/15"></div>
                                    <div className="hero-planet absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.85),_rgba(103,232,249,0.35)_18%,_rgba(37,99,235,0.75)_52%,_rgba(49,46,129,0.92)_100%)] shadow-[0_0_60px_rgba(59,130,246,0.28)]"></div>
                                    {cosmicNodes.map((node) => (
                                        <div key={node.label} className={`absolute ${node.orbit}`}>
                                            <div className="flex flex-col items-center gap-2">
                                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.85)]"></span>
                                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300/80">
                                                    {node.label}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Primary Orbit</p>
                                    <p className="mt-2 text-base font-semibold text-white">UI systems, backend services, and product launch readiness.</p>
                                </div>
                            </div>

                            <div className="grid gap-3">
                                {missionTracks.map((item) => (
                                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1">{item.icon}</div>
                                            <div>
                                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300/85">{item.title}</p>
                                                <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 grid gap-3 sm:grid-cols-3">
                            {orbitStats.map((item) => (
                                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <div className="flex items-center gap-2 text-slate-200">
                                        {item.icon}
                                        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
                                    </div>
                                    <p className="mt-3 text-sm font-semibold text-white">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};
