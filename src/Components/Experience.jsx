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
                "Architect and maintain scalable multi-tenant SaaS platforms using Next.js, Node.js, and MySQL in an Agile environment",
                "Designed and implemented a robust Role-Based Access Control (RBAC) system for enterprise-grade user and permission management",
                "Integrated Stripe for subscription management, checkout flows, and real-time webhook synchronization",
                "Integrated AWS S3 for secure file storage and collaborated with cross-functional teams to deliver production-ready features",
                "Built secure authentication and authorization workflows using JWT and OAuth industry best practices",
            ],
            technologies: ["Next.js", "Node.js", "MySQL", "TypeScript", "AWS S3", "Stripe", "JWT", "OAuth", "RBAC", "React"],
            isCurrent: true,
            badge: "Current",
            accentFrom: "from-indigo-400",
            accentTo: "to-violet-500",
        },
        {
            id: 2,
            title: "Web Developer",
            company: "ADM Education & Welfare Society",
            duration: "November 2024 – August 2025",
            location: "Remote",
            responsibilities: [
                "Led backend development for a CRM project, managing a team of 5+ developers and driving system integration and performance improvements",
                "Engineered the Maa Foundation website with responsive UI, backend APIs, and Razorpay integration for secure subscription payments",
                "Developed and maintained healthcare and business management applications using React.js and Node.js",
                "Translated Figma designs into high-performance components using Tailwind CSS; optimized frontend and backend performance",
            ],
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Tailwind CSS", "MySQL"],
            isCurrent: false,
            badge: null,
            accentFrom: "from-violet-400",
            accentTo: "to-indigo-500",
        },
        {
            id: 3,
            title: "Web Development Intern",
            company: "ADM Education & Welfare Society",
            duration: "May 2024 – November 2024",
            location: "Remote",
            responsibilities: [
                "Built responsive web applications using React.js, HTML, CSS, and JavaScript",
                "Collaborated with senior developers on feature implementation, bug fixes, and code reviews",
            ],
            technologies: ["React.js", "HTML", "CSS", "JavaScript"],
            isCurrent: false,
            badge: null,
            accentFrom: "from-indigo-500",
            accentTo: "to-blue-600",
        },
        {
            id: 4,
            title: "Freelance Developer",
            company: "Self-Employed",
            duration: "Ongoing · Part-time",
            location: "Remote",
            responsibilities: [
                "Build websites and web applications for various clients alongside full-time work",
                "Design UI/UX and implement responsive, accessible interfaces",
                "Manage client relationships and project delivery timelines end to end",
                "Provide technical consultation and post-launch maintenance services",
            ],
            technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "UI/UX Design"],
            isCurrent: false,
            badge: "Part-time",
            accentFrom: "from-slate-400",
            accentTo: "to-slate-600",
        },
    ];

    const ExperienceCard = ({ experience, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="surface-card group relative overflow-hidden rounded-[1.75rem] p-6 transition-all duration-300 hover:border-indigo-400/20 lg:p-8"
        >
            {/* Top accent bar */}
            <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${experience.accentFrom} ${experience.accentTo}`} />

            {/* Badge */}
            {experience.badge && (
                <div className="absolute right-4 top-4">
                    <span className="rounded-full border border-indigo-400/25 bg-indigo-400/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-200">
                        {experience.badge}
                    </span>
                </div>
            )}

            {/* Header */}
            <div className="mb-4 flex items-start gap-4">
                <div className={`rounded-2xl bg-gradient-to-br ${experience.accentFrom} ${experience.accentTo} p-3 text-2xl text-white shadow-lg`}>
                    <TbBriefcase />
                </div>
                <div className="flex-1">
                    <h3 className="mb-1 font-display text-xl font-bold text-white lg:text-2xl">{experience.title}</h3>
                    <p className="mb-2 font-semibold text-indigo-300">{experience.company}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                            <TbCalendarEvent className="text-indigo-300" />
                            {experience.duration}
                        </span>
                        <span className="text-slate-600">|</span>
                        <span>{experience.location}</span>
                    </div>
                </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-4">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200">
                    <TbCircleCheck className="text-indigo-400" />
                    Responsibilities
                </h4>
                <ul className="space-y-2">
                    {experience.responsibilities.map((resp, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.12 + idx * 0.05 }}
                            className="flex items-start gap-2 text-sm text-slate-400"
                        >
                            <TbCircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-400/70" aria-hidden />
                            <span>{resp}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {experience.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full border border-indigo-400/15 bg-indigo-400/8 px-3 py-1 text-xs font-medium text-indigo-100"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section className="py-12 lg:py-16">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center lg:mb-16"
            >
                <p className="space-eyebrow justify-center">Work Experience</p>
                <h1 className="mt-5 font-display text-4xl font-bold text-white lg:text-5xl">
                    Building products, shipping features, and supporting teams.
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
                    A track record of delivering scalable solutions and working well across teams.
                </p>
            </motion.div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                {experiences.map((experience, index) => (
                    <ExperienceCard key={experience.id} experience={experience} index={index} />
                ))}
            </div>
        </section>
    );
};
