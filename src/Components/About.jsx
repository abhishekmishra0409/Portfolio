import { motion } from "framer-motion";
import { TbComet } from "react-icons/tb";
import { AboutTimeline } from "./AboutTimeline.jsx";

/**
 * About Section Component
 * Displays information about Abhishek Mishra with about-page highlights
 */
export const About = () => {
    const strengths = [
        "Product-minded frontend implementation",
        "API and database integration across the MERN stack",
        "Responsive interfaces with clean interaction design",
        "Ownership from concept to deployed experience",
    ];
    const overviewCards = [
        {
            title: "Current Role",
            value: "Software / Web Developer",
            detail: "BestPeers Infosystem",
        },
        {
            title: "Primary Stack",
            value: "React, Node.js, MongoDB",
            detail: "Next.js, React Native, Stripe, Razorpay",
        },
        {
            title: "Working Style",
            value: "Product-first execution",
            detail: "Clean UI, reliable APIs, and practical shipping speed",
        },
    ];

    return (
        <article className="overflow-x-hidden py-4 md:py-6">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.7 }}
                className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
            >
                <p className="space-eyebrow justify-center">Habitat Ring · Origin</p>
                <h1 className="mt-5 flex flex-wrap items-center justify-center gap-3 font-display text-4xl font-bold text-white sm:text-5xl">
                    <TbComet className="h-9 w-9 shrink-0 text-teal-300/95 cosmic-icon-glow sm:h-11 sm:w-11" aria-hidden />
                    Bringing product clarity to full-stack builds.
                </h1>
                <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                    I care about how a project looks, feels, and performs in production, not just how it compiles.
                </p>
            </motion.div>

            <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:gap-12">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.6 }}
                    className="flex w-full justify-center lg:justify-start"
                >
                    <div className="surface-card w-full max-w-3xl rounded-[2rem] p-6 lg:p-8">
                        <h2 className="font-display text-2xl font-semibold text-white lg:text-3xl">
                            Abhishek Mishra, a developer who likes thoughtful interfaces and strong foundations.
                        </h2>
                        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                            I&apos;m <strong className="text-cyan-300">Abhishek Mishra</strong>, a full stack developer focused on building dynamic, responsive, and user-friendly web applications that balance product polish with maintainable engineering.
                        </p>
                        <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
                            With hands-on experience in <strong className="text-slate-200">React</strong>, <strong className="text-slate-200">Node.js</strong>, <strong className="text-slate-200">MongoDB</strong>, <strong className="text-slate-200">Express.js</strong>, <strong className="text-slate-200">JavaScript</strong>, <strong className="text-slate-200">Java</strong>, and <strong className="text-slate-200">Python</strong>, I enjoy turning messy requirements into clean user experiences and scalable systems.
                        </p>
                        <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
                            Currently working as a <strong className="text-sky-300">Software / Web Developer at BestPeers Infosystem</strong>, I focus on building modern web products that feel fast, reliable, and ready to grow. Let&apos;s build something sharp together.
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {strengths.map((strength) => (
                                <div key={strength} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-300">
                                    {strength}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.6 }}
                    className="grid gap-4"
                >
                    <div className="surface-card rounded-[2rem] p-6 lg:p-7">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">How I Work</p>
                        <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                            Designing interfaces and engineering the systems behind them.
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                            I enjoy working where frontend clarity, backend reliability, and real product constraints need to come together in one practical build.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-1">
                        {overviewCards.map((card) => (
                            <div key={card.title} className="surface-card rounded-[1.6rem] p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{card.title}</p>
                                <p className="mt-3 font-display text-xl font-semibold text-white">{card.value}</p>
                                <p className="mt-2 text-sm leading-6 text-slate-400">{card.detail}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <AboutTimeline />
        </article>
    );
};
