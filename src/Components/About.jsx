import { motion } from "framer-motion";
import { AboutTimeline } from "./AboutTimeline.jsx";

export const About = () => {
    const strengths = [
        "Product-minded frontend implementation",
        "Full-stack API and database integration",
        "Responsive UI with clean interaction design",
        "End-to-end ownership from concept to production",
    ];

    const overviewCards = [
        { title: "Current Role",    value: "Junior Software Engineer",   detail: "BestPeers Technology Solutions" },
        { title: "Primary Stack",   value: "React · Node.js · MongoDB",  detail: "Next.js · React Native · TypeScript" },
        { title: "Working Style",   value: "Product-first execution",    detail: "Clean UI, reliable APIs, practical speed" },
    ];

    return (
        <article className="overflow-x-hidden py-4 md:py-8">
            {/* Header */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-12 max-w-2xl text-center lg:mb-16"
            >
                <p className="space-eyebrow justify-center">About</p>
                <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
                    Bringing product clarity to full-stack builds.
                </h1>
                <p className="mt-4 text-base leading-7 text-slate-400">
                    I care about how a product looks, feels, and performs — not just how it compiles.
                </p>
            </motion.div>

            {/* Two-col layout */}
            <div className="mb-16 grid gap-6 lg:mb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
                {/* Left: Bio + strengths */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.55 }}
                >
                    <div className="surface-card h-full rounded-2xl p-6 lg:p-8">
                        <h2 className="font-display text-2xl font-semibold text-white">
                            A developer who values thoughtful interfaces and strong foundations.
                        </h2>
                        <p className="mt-4 text-base leading-7 text-slate-400">
                            I&apos;m <strong className="text-slate-200">Abhishek Mishra</strong>, a full-stack developer building
                            dynamic web applications with the MERN stack. I focus on product polish, maintainable code,
                            and real delivery — currently shipping as a <strong className="text-slate-200">Junior Software Engineer at BestPeers Technology Solutions</strong>.
                        </p>

                        <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                            {strengths.map((s) => (
                                <div key={s} className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300">
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right: How I Work + overview cards */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 24 }}
                    transition={{ duration: 0.55 }}
                    className="flex flex-col gap-4"
                >
                    <div className="surface-card rounded-2xl p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">How I Work</p>
                        <h3 className="mt-3 font-display text-xl font-semibold text-white">
                            Frontend clarity meets backend reliability.
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                            I enjoy working where design precision, engineering depth, and product constraints need to come together in one practical build.
                        </p>
                    </div>

                    <div className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
                        {overviewCards.map((card) => (
                            <div key={card.title} className="surface-card rounded-2xl p-4">
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-500">{card.title}</p>
                                <p className="mt-2 font-display text-base font-semibold text-white">{card.value}</p>
                                <p className="mt-1 text-xs leading-5 text-slate-400">{card.detail}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <AboutTimeline />
        </article>
    );
};
