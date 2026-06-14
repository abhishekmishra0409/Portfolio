import { motion } from "framer-motion";
import { TbBriefcase, TbCalendarEvent, TbCircleCheck } from "react-icons/tb";

export const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Junior Software Engineer",
            company: "BestPeers Technology Solutions",
            duration: "September 2025 – Present",
            location: "Indore, MP",
            responsibilities: [
                "Architect and maintain scalable multi-tenant SaaS platforms using Next.js, Node.js, and MySQL",
                "Designed and implemented Role-Based Access Control (RBAC) for enterprise user management",
                "Integrated Stripe for subscription management, checkout flows, and webhook synchronization",
                "Integrated AWS S3 for secure file storage and collaborated across teams for production delivery",
                "Built secure auth workflows using JWT and OAuth industry best practices",
            ],
            technologies: ["Next.js", "Node.js", "MySQL", "TypeScript", "AWS S3", "Stripe", "JWT", "OAuth", "RBAC"],
            isCurrent: true,
            badge: "Current",
            bar: "from-blue-500 to-blue-700",
            iconBg: "from-blue-500 to-blue-700",
        },
        {
            id: 2,
            title: "Web Developer",
            company: "ADM Education & Welfare Society",
            duration: "November 2024 – August 2025",
            location: "Remote",
            responsibilities: [
                "Led backend development for a CRM, managing a team of 5+ developers",
                "Engineered the Maa Foundation website with Razorpay integration for subscription payments",
                "Developed healthcare and business management apps using React.js and Node.js",
                "Translated Figma designs into high-performance Tailwind CSS components",
            ],
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Tailwind CSS"],
            isCurrent: false,
            badge: null,
            bar: "from-blue-400 to-blue-600",
            iconBg: "from-blue-400 to-blue-600",
        },
        {
            id: 3,
            title: "Web Development Intern",
            company: "ADM Education & Welfare Society",
            duration: "May 2024 – November 2024",
            location: "Remote",
            responsibilities: [
                "Built responsive web apps using React.js, HTML, CSS, and JavaScript",
                "Collaborated with senior developers on features, bug fixes, and code reviews",
            ],
            technologies: ["React.js", "HTML", "CSS", "JavaScript"],
            isCurrent: false,
            badge: null,
            bar: "from-blue-300 to-blue-500",
            iconBg: "from-blue-300 to-blue-500",
        },
        {
            id: 4,
            title: "Freelance Developer",
            company: "Self-Employed",
            duration: "Ongoing · Part-time",
            location: "Remote",
            responsibilities: [
                "Build websites and web apps for clients alongside full-time work",
                "Handle design, development, and post-launch maintenance end to end",
                "Manage client relationships and project delivery timelines",
            ],
            technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
            isCurrent: false,
            badge: "Part-time",
            bar: "from-slate-500 to-slate-600",
            iconBg: "from-slate-500 to-slate-600",
        },
    ];

    const ExperienceCard = ({ exp, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="surface-card relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-blue-400/20"
        >
            {/* Top bar */}
            <div className={`absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r ${exp.bar}`} />

            {/* Badge */}
            {exp.badge && (
                <span className="absolute right-4 top-4 rounded-full border border-blue-400/22 bg-blue-400/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-blue-200">
                    {exp.badge}
                </span>
            )}

            {/* Header */}
            <div className="mb-4 flex items-start gap-3.5">
                <div className={`rounded-xl bg-gradient-to-br ${exp.iconBg} p-2.5 text-xl text-white shadow-md`}>
                    <TbBriefcase />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold text-white">{exp.title}</h3>
                    <p className="text-sm font-semibold text-blue-400">{exp.company}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                            <TbCalendarEvent className="text-blue-400" />
                            {exp.duration}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span>{exp.location}</span>
                    </div>
                </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-4">
                <h4 className="mb-2.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    <TbCircleCheck className="text-blue-400" /> Responsibilities
                </h4>
                <ul className="space-y-1.5">
                    {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                            <TbCircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400/60" />
                            <span>{r}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-1.5 border-t border-white/8 pt-4">
                {exp.technologies.map((t) => (
                    <span key={t} className="rounded-full border border-blue-400/15 bg-blue-400/8 px-2.5 py-0.5 text-xs font-medium text-blue-200">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section className="py-10 lg:py-14">
            <motion.div
                initial={{ opacity: 0, y: -16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 text-center lg:mb-14"
            >
                <p className="space-eyebrow justify-center">Work Experience</p>
                <h1 className="mt-4 font-display text-3xl font-bold text-white lg:text-4xl">
                    Building products, shipping features, supporting teams.
                </h1>
                <p className="mx-auto mt-3 max-w-xl text-base text-slate-400">
                    A track record of delivering scalable solutions and working well across teams.
                </p>
            </motion.div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2">
                {experiences.map((exp, i) => <ExperienceCard key={exp.id} exp={exp} index={i} />)}
            </div>
        </section>
    );
};
