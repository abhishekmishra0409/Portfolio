import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TbAtom } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { DiGithubFull, DiJava } from "react-icons/di";
import { TbBrandNodejs } from "react-icons/tb";
import {
    SiAngular,
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiPython,
    SiRazorpay,
    SiReact,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

const floatVariants = (duration) => ({
    initial: { y: -8 },
    animate: {
        y: [8, -8],
        transition: {
            duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const SkillBar = ({ name, level, icon, color, note }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">{icon}</span>
                    <div>
                        <p className="font-display text-lg font-semibold text-white">{name}</p>
                        <p className="text-sm text-slate-400">{note}</p>
                    </div>
                </div>
                <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm font-semibold text-slate-200">
                    {level}%
                </span>
            </div>

            <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-900/90">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${color}`}
                />
            </div>
        </motion.div>
    );
};

const TechBadge = ({ item }) => {
    return (
        <motion.div
            variants={floatVariants(item.duration)}
            initial="initial"
            animate="animate"
            whileHover={{ y: -6, scale: 1.03 }}
            className="group rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5 shadow-[0_18px_40px_rgba(2,8,23,0.32)] transition-all duration-300 hover:border-cyan-400/25"
        >
            <div className={`inline-flex rounded-2xl bg-gradient-to-br ${item.color} p-3 text-3xl text-white shadow-lg`}>
                {item.icon}
            </div>
            <p className="mt-4 font-display text-lg font-semibold text-white">{item.name}</p>
            <p className="mt-1 text-sm text-slate-400">{item.label}</p>
        </motion.div>
    );
};

/**
 * Technology/Skills Section Component
 * Displays technical skills and technologies with a more structured showcase layout
 */
export const Technology = () => {
    const skills = [
        {
            name: "React",
            level: 95,
            icon: <RiReactjsLine className="text-cyan-400" />,
            color: "from-cyan-400 to-blue-500",
            note: "Component systems, routing, and polished UI flows",
        },
        {
            name: "Node.js",
            level: 90,
            icon: <TbBrandNodejs className="text-green-400" />,
            color: "from-green-400 to-emerald-500",
            note: "API design, backend logic, and integrations",
        },
        {
            name: "MongoDB",
            level: 88,
            icon: <SiMongodb className="text-green-500" />,
            color: "from-green-500 to-teal-500",
            note: "Schema thinking and scalable data handling",
        },
        {
            name: "Express.js",
            level: 92,
            icon: <SiExpress className="text-gray-300" />,
            color: "from-slate-300 to-slate-500",
            note: "REST APIs and middleware-based backend architecture",
        },
        {
            name: "JavaScript",
            level: 95,
            icon: <SiJavascript className="text-yellow-400" />,
            color: "from-yellow-400 to-orange-500",
            note: "Core language fluency across frontend and backend",
        },
        {
            name: "TypeScript",
            level: 85,
            icon: <SiTypescript className="text-blue-500" />,
            color: "from-blue-500 to-indigo-600",
            note: "Typed application code and safer large-scale changes",
        },
        {
            name: "React Native",
            level: 84,
            icon: <SiReact className="text-cyan-400" />,
            color: "from-cyan-400 to-indigo-500",
            note: "Cross-platform mobile UI and app feature delivery",
        },
        {
            name: "Next.js",
            level: 82,
            icon: <SiNextdotjs className="text-slate-200" />,
            color: "from-slate-200 to-slate-500",
            note: "App routing, SSR patterns, and production-ready frontend structure",
        },
    ];

    const focusAreas = [
        {
            title: "Frontend Systems",
            description: "Responsive interfaces, interaction polish, and reusable UI structure.",
            metric: "React / Tailwind / JS",
        },
        {
            title: "Backend Delivery",
            description: "Practical APIs, database flow, and dependable feature implementation.",
            metric: "Node / Express / MongoDB",
        },
        {
            title: "Product Craft",
            description: "Balancing user experience, maintainability, and shipping speed.",
            metric: "Design-minded execution",
        },
    ];

    const badges = [
        {
            name: "React",
            label: "Frontend architecture",
            icon: <RiReactjsLine />,
            color: "from-cyan-400 to-blue-500",
            duration: 2.6,
        },
        {
            name: "Node.js",
            label: "API and services",
            icon: <TbBrandNodejs />,
            color: "from-green-400 to-emerald-500",
            duration: 3,
        },
        {
            name: "MongoDB",
            label: "Data layer",
            icon: <SiMongodb />,
            color: "from-green-500 to-teal-500",
            duration: 2.8,
        },
        {
            name: "Express.js",
            label: "Server routing",
            icon: <SiExpress />,
            color: "from-slate-300 to-slate-500",
            duration: 2.3,
        },
        {
            name: "TypeScript",
            label: "Type-safe scaling",
            icon: <SiTypescript />,
            color: "from-blue-500 to-indigo-600",
            duration: 2.5,
        },
        {
            name: "JavaScript",
            label: "Core language",
            icon: <SiJavascript />,
            color: "from-yellow-400 to-orange-500",
            duration: 2.4,
        },
        {
            name: "React Native",
            label: "Mobile app delivery",
            icon: <SiReact />,
            color: "from-cyan-400 to-indigo-500",
            duration: 2.55,
        },
        {
            name: "Next.js",
            label: "App architecture",
            icon: <SiNextdotjs />,
            color: "from-slate-200 to-slate-500",
            duration: 2.7,
        },
        {
            name: "Angular",
            label: "Framework versatility",
            icon: <SiAngular />,
            color: "from-red-500 to-rose-600",
            duration: 2.9,
        },
        {
            name: "Tailwind CSS",
            label: "Design implementation",
            icon: <SiTailwindcss />,
            color: "from-cyan-400 to-teal-400",
            duration: 2.6,
        },
        {
            name: "MySQL",
            label: "Relational data",
            icon: <SiMysql />,
            color: "from-blue-500 to-indigo-500",
            duration: 2.8,
        },
        {
            name: "Python",
            label: "Utilities and scripting",
            icon: <SiPython />,
            color: "from-blue-400 to-cyan-500",
            duration: 2.2,
        },
        {
            name: "Java",
            label: "Core engineering",
            icon: <DiJava />,
            color: "from-red-500 to-pink-500",
            duration: 2.5,
        },
        {
            name: "Stripe",
            label: "Online payments",
            icon: <SiStripe />,
            color: "from-violet-500 to-indigo-600",
            duration: 2.45,
        },
        {
            name: "Razorpay",
            label: "Payment gateway",
            icon: <SiRazorpay />,
            color: "from-sky-400 to-blue-600",
            duration: 2.35,
        },
        {
            name: "GitHub",
            label: "Version workflow",
            icon: <DiGithubFull />,
            color: "from-slate-200 to-slate-500",
            duration: 2.4,
        },
    ];

    return (
        <section className="pb-24">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.8 }}
                className="mx-auto mb-14 mt-12 max-w-3xl text-center lg:mb-16 lg:mt-16"
            >
                <p className="space-eyebrow justify-center">Constellation · Systems Map</p>
                <h1 className="mt-5 flex flex-wrap items-center justify-center gap-3 font-display text-4xl font-bold text-white lg:text-5xl">
                    <TbAtom className="h-10 w-10 shrink-0 text-violet-300/95 cosmic-icon-glow lg:h-12 lg:w-12" aria-hidden />
                    A sharper, product-ready view of the tools behind the work.
                </h1>
                <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                    The focus is not just knowing technologies, but using them together to build clean interfaces, stable APIs, and better product experiences.
                </p>
            </motion.div>

            <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    className="space-y-8"
                >
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="surface-card rounded-[1.75rem] p-5">
                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Core Stack</p>
                            <p className="mt-3 font-display text-2xl font-bold text-white">MERN</p>
                            <p className="mt-2 text-sm leading-6 text-slate-400">Primary workflow for modern full stack products.</p>
                        </div>
                        <div className="surface-card rounded-[1.75rem] p-5">
                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Strength</p>
                            <p className="mt-3 font-display text-2xl font-bold text-white">UI + API</p>
                            <p className="mt-2 text-sm leading-6 text-slate-400">Comfortable across frontend polish and backend delivery.</p>
                        </div>
                        <div className="surface-card rounded-[1.75rem] p-5">
                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Coverage</p>
                            <p className="mt-3 font-display text-2xl font-bold text-white">16+</p>
                            <p className="mt-2 text-sm leading-6 text-slate-400">Technologies used across projects and production work.</p>
                        </div>
                    </div>

                    <div className="surface-card rounded-[2rem] p-6 lg:p-8">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Capability Snapshot</p>
                                <h2 className="mt-3 font-display text-2xl font-semibold text-white lg:text-3xl">
                                    Where I add the most value
                                </h2>
                            </div>
                            <p className="max-w-sm text-sm leading-6 text-slate-400">
                                I&apos;m strongest where product thinking, responsive UI, and full stack execution need to meet.
                            </p>
                        </div>

                        <div className="mt-6 space-y-4">
                            {focusAreas.map((area) => (
                                <div key={area.title} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <h3 className="font-display text-lg font-semibold text-white">{area.title}</h3>
                                            <p className="mt-2 text-sm leading-6 text-slate-400">{area.description}</p>
                                        </div>
                                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                                            {area.metric}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: 0.05 }}
                    className="surface-card rounded-[2rem] p-6 lg:p-8"
                >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Proficiency Board</p>
                            <h2 className="mt-3 font-display text-2xl font-semibold text-white lg:text-3xl">
                                Daily-use development strengths
                            </h2>
                        </div>
                        <p className="max-w-sm text-sm leading-6 text-slate-400">
                            A practical view of the technologies I rely on most often while building products.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 lg:grid-cols-2">
                        {skills.map((skill) => (
                            <SkillBar key={skill.name} {...skill} />
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 28 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-16"
            >
                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="font-display text-3xl font-bold text-white">
                            The wider technology mix behind the portfolio
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-slate-400">
                        These are the tools and frameworks I move across depending on the problem, team, and product requirements.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                    {badges.map((item) => (
                        <TechBadge key={item.name} item={item} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
