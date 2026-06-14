import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { DiGithubFull } from "react-icons/di";
import { TbBrandNodejs } from "react-icons/tb";
import {
    SiAngular,
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiRazorpay,
    SiReact,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

const SkillBar = ({ name, level, icon, color, note }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="surface-card rounded-2xl p-4 transition-all duration-200"
        >
            <div className="flex items-center gap-3">
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                        <p className="font-display text-sm font-semibold text-white truncate">{name}</p>
                        <span className="flex-shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[0.65rem] font-semibold text-slate-400">
                            {level}%
                        </span>
                    </div>
                    {note && <p className="mt-0.5 text-[0.68rem] text-slate-500 truncate">{note}</p>}
                    <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${level}%` } : { width: 0 }}
                            transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
                            className={`h-full rounded-full bg-gradient-to-r ${color}`}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const TechBadge = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.06 }}
        whileHover={{ y: -4, scale: 1.06, transition: { duration: 0.18 } }}
        className="flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-[rgba(14,22,46,0.55)] px-4 py-2 text-sm font-semibold text-slate-200 shadow-sm transition-all duration-200 hover:border-blue-400/25 hover:bg-blue-500/[0.08] hover:text-blue-200 cursor-default"
    >
        <span className="text-base flex items-center">{item.icon}</span>
        <span>{item.name}</span>
    </motion.div>
);

export const Technology = () => {
    const skills = [
        { name: "React",        level: 95, icon: <RiReactjsLine className="text-cyan-400" />,     color: "from-cyan-400 to-blue-500",     note: "Components, routing, state" },
        { name: "Node.js",      level: 90, icon: <TbBrandNodejs className="text-green-400" />,     color: "from-green-400 to-emerald-500", note: "APIs, auth, integrations" },
        { name: "MongoDB",      level: 88, icon: <SiMongodb className="text-green-500" />,          color: "from-green-500 to-teal-500",    note: "Schemas, aggregation" },
        { name: "Express.js",   level: 92, icon: <SiExpress className="text-gray-300" />,           color: "from-slate-300 to-slate-500",   note: "REST, middleware" },
        { name: "JavaScript",   level: 95, icon: <SiJavascript className="text-yellow-400" />,      color: "from-yellow-400 to-orange-500", note: "ES2022+, async/await" },
        { name: "TypeScript",   level: 85, icon: <SiTypescript className="text-blue-500" />,        color: "from-blue-500 to-blue-600",     note: "Types, generics" },
        { name: "React Native", level: 84, icon: <SiReact className="text-cyan-400" />,             color: "from-cyan-400 to-blue-500",     note: "Cross-platform mobile" },
        { name: "Next.js",      level: 82, icon: <SiNextdotjs className="text-slate-200" />,        color: "from-slate-200 to-slate-500",   note: "SSR, app router" },
    ];

    const badges = [
        { name: "Angular",      icon: <SiAngular className="text-[#dd0031]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
        { name: "MySQL",        icon: <SiMysql className="text-[#00b4d8]" /> },
        { name: "Stripe",       icon: <SiStripe className="text-[#7c85ff]" /> },
        { name: "Razorpay",     icon: <SiRazorpay className="text-[#3395ff]" /> },
        { name: "GitHub",       icon: <DiGithubFull className="text-slate-200 text-2xl" /> },
    ];

    const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

    return (
        <section className="py-12">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -16 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="mx-auto mb-10 text-center"
            >
                <p className="space-eyebrow justify-center">Skills</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-white lg:text-4xl">
                    Technical Expertise
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                    Core languages, frameworks, and tools that power my workflow.
                </p>
            </motion.div>

            {/* Skill bars — 2x4 grid */}
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
                {skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                ))}
            </motion.div>

            {/* Additional tech badges */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 16 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mt-10 border-t border-white/[0.06] pt-8"
            >
                <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Other technologies & tools
                </p>
                <div className="flex flex-wrap justify-center gap-2.5">
                    {badges.map((item, i) => (
                        <TechBadge key={item.name} item={item} index={i} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
