import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TbArrowRight, TbBriefcase, TbCode, TbDeviceMobile } from "react-icons/tb";

export const First = () => {
    const focusAreas = [
        {
            icon: <TbCode className="text-lg text-blue-400" />,
            title: "Frontend",
            detail: "React, Next.js, Tailwind — responsive, polished interfaces.",
        },
        {
            icon: <TbBriefcase className="text-lg text-blue-300" />,
            title: "Backend",
            detail: "Node.js, Express, MongoDB — scalable APIs and integrations.",
        },
        {
            icon: <TbDeviceMobile className="text-lg text-blue-400" />,
            title: "Mobile",
            detail: "React Native — cross-platform apps for real delivery.",
        },
    ];

    const stats = [
        { value: "2+",     label: "Years experience" },
        { value: "MERN",   label: "Core stack" },
        { value: "SaaS",   label: "Production builds" },
    ];

    return (
        <header className="py-8 sm:py-12 lg:py-16" role="banner">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

                {/* ── LEFT ─────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="flex flex-col gap-7"
                >
                    <div className="space-y-4">
                        <p className="space-eyebrow">Full Stack Developer</p>
                        <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
                            Building scalable web apps and clean interfaces.
                        </h1>
                        <p className="max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
                            I&apos;m <span className="font-semibold text-slate-200">Abhishek Mishra</span> — a full-stack developer specialising in the MERN stack, currently at BestPeers Technology Solutions.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Link to="/projects" className="button-primary">
                            View Projects <TbArrowRight className="text-lg" />
                        </Link>
                        <Link to="/contact" className="button-secondary">
                            Get In Touch
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                        {stats.map((s) => (
                            <div key={s.value} className="surface-card rounded-2xl p-4 text-center sm:p-5">
                                <p className="text-xl font-bold text-white sm:text-2xl">{s.value}</p>
                                <p className="mt-1 text-xs leading-5 text-slate-400">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── RIGHT: profile card ─────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.12 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="w-full max-w-[28rem]">
                        <div className="surface-card rounded-2xl p-5 sm:p-6">

                            {/* Status */}
                            <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                                <span className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.7)]" />
                                    Available for opportunities
                                </span>
                                <span className="text-xs text-slate-500">Indore, India</span>
                            </div>

                            {/* Current role */}
                            <div className="mt-4 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5">
                                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500">Current Role</p>
                                <p className="mt-1.5 text-sm font-semibold text-white">Junior Software Engineer</p>
                                <p className="text-xs text-blue-400">BestPeers Technology Solutions · Sep 2025 – Present</p>
                            </div>

                            {/* Focus areas */}
                            <div className="mt-4 space-y-2.5">
                                {focusAreas.map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3"
                                    >
                                        <div className="mt-0.5 shrink-0">{item.icon}</div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-200">{item.title}</p>
                                            <p className="mt-0.5 text-xs leading-5 text-slate-400">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Tech stack row */}
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "React Native"].map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-blue-400/15 bg-blue-400/8 px-3 py-1 text-xs font-medium text-blue-200"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </header>
    );
};
