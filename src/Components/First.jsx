import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TbArrowRight, TbBriefcase, TbCode, TbDeviceMobile } from "react-icons/tb";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.1 } },
};

export const First = () => {
    const stats = [
        { value: "MERN",  label: "Full-stack production builds" },
        { value: "React", label: "Polished frontend systems" },
        { value: "Node",  label: "Reliable APIs and integrations" },
    ];

    const focusAreas = [
        {
            icon: <TbCode className="text-xl text-indigo-300" />,
            title: "Frontend Development",
            detail: "React, Next.js, Tailwind — responsive interfaces with clean interaction design.",
        },
        {
            icon: <TbBriefcase className="text-xl text-violet-300" />,
            title: "Backend Development",
            detail: "Node.js, Express, MongoDB — reliable APIs, databases, and Stripe / Razorpay integrations.",
        },
        {
            icon: <TbDeviceMobile className="text-xl text-indigo-200" />,
            title: "Mobile Development",
            detail: "React Native — cross-platform mobile apps built for real product delivery.",
        },
    ];

    const stack = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "React Native", "Stripe"];

    return (
        <header className="relative overflow-hidden py-6 sm:py-8 lg:py-12" role="banner">
            <div className="grid min-h-[calc(100vh-8rem)] items-center gap-10 lg:grid-cols-2 lg:gap-14">

                {/* ── LEFT: headline + CTAs ────────────────────── */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeUp}
                    className="flex flex-col gap-6 lg:gap-8"
                >
                    <motion.div variants={fadeUp} className="space-y-5">
                        <p className="space-eyebrow">Full Stack Developer</p>

                        <h1 className="font-display text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.5rem]">
                            Building clean interfaces and reliable APIs.
                        </h1>

                        <p className="max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                            I&apos;m <span className="font-semibold text-slate-200">Abhishek Mishra</span>, a full-stack developer
                            specialising in the MERN stack. I turn product ideas into polished UIs and dependable
                            backend services — from first commit to production.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                        <Link to="/projects" className="button-primary">
                            View Projects
                            <TbArrowRight className="text-lg" />
                        </Link>
                        <Link to="/contact" className="button-secondary">
                            Get In Touch
                        </Link>
                    </motion.div>

                    {/* Tech pills */}
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                        {stack.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-indigo-400/15 bg-indigo-400/8 px-4 py-1.5 text-sm font-medium text-indigo-200/90"
                            >
                                {item}
                            </span>
                        ))}
                    </motion.div>

                    {/* Stats row */}
                    <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.value} className="cosmic-hud-card surface-card rounded-2xl p-5">
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ── RIGHT: developer profile card ───────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.15 }}
                    className="relative flex items-center justify-center lg:justify-end"
                >
                    {/* Subtle glow behind card */}
                    <div className="absolute inset-auto h-64 w-64 rounded-full bg-indigo-500/8 blur-[100px]" />

                    <div className="surface-card relative w-full max-w-[30rem] rounded-2xl p-5 sm:p-6">

                        {/* Status bar */}
                        <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                            <span className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                                Available for opportunities
                            </span>
                            <span className="text-xs text-slate-500">Indore, India</span>
                        </div>

                        {/* Current role */}
                        <div className="mt-4 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-4">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-slate-500">
                                Current Role
                            </p>
                            <p className="mt-2 text-base font-semibold text-white">Junior Software Engineer</p>
                            <p className="mt-0.5 text-sm text-indigo-300">BestPeers Technology Solutions · Sept 2025 – Present</p>
                        </div>

                        {/* Focus areas */}
                        <div className="mt-4 space-y-3">
                            {focusAreas.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5"
                                >
                                    <div className="mt-0.5 shrink-0">{item.icon}</div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-200">{item.title}</p>
                                        <p className="mt-1 text-xs leading-5 text-slate-400">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tech badges */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-indigo-400/15 bg-indigo-400/8 px-3 py-1 text-xs font-medium text-indigo-200"
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
