import { motion } from "framer-motion";
import { TbCode, TbDeviceMobile, TbLayoutGrid, TbCircleCheck, TbBriefcase, TbMail, TbMapPin } from "react-icons/tb";
import { personalData } from "../data/personalData.js";

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.10 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.50 } },
};

const strengths = [
    {
        icon: <TbLayoutGrid className="text-xl text-blue-400" />,
        bg: "from-blue-500/10 to-blue-500/5",
        border: "border-blue-500/20",
        title: "Full Stack",
        desc: "End-to-end delivery — from pixel-perfect UI to production APIs.",
    },
    {
        icon: <TbCode className="text-xl text-sky-400" />,
        bg: "from-sky-500/10 to-sky-500/5",
        border: "border-sky-500/20",
        title: "Clean Code",
        desc: "Readable, maintainable architecture over clever shortcuts.",
    },
    {
        icon: <TbDeviceMobile className="text-xl text-indigo-400" />,
        bg: "from-indigo-500/10 to-indigo-500/5",
        border: "border-indigo-500/20",
        title: "Mobile Apps",
        desc: "React Native for cross-platform apps that feel truly native.",
    },
    {
        icon: <TbCircleCheck className="text-xl text-emerald-400" />,
        bg: "from-emerald-500/10 to-emerald-500/5",
        border: "border-emerald-500/20",
        title: "Reliability",
        desc: "JWT, OAuth, RBAC — security and correctness baked in from day one.",
    },
];

export const About = () => {
    return (
        <article className="py-12 lg:py-16">
            {/* Section header */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-12 max-w-2xl text-center"
            >
                <p className="space-eyebrow justify-center">About</p>
                <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
                    Bringing product clarity to full-stack builds.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-400">
                    A developer who builds interfaces people enjoy and APIs teams trust.
                </p>
            </motion.div>

            {/* Bio + Quick Info */}
            <div className="mb-6 grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-6">
                {/* Bio card */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -24 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="surface-card relative overflow-hidden rounded-2xl p-6 lg:p-8"
                >
                    {/* Subtle gradient accent top bar */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-500 via-sky-400 to-transparent" />

                    {/* Avatar + name */}
                    <div className="mb-6 flex items-center gap-4">
                        <div className="relative flex-shrink-0">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-600/40 to-indigo-700/40 shadow-lg shadow-blue-900/20">
                                <span className="font-display text-2xl font-bold text-white select-none">AM</span>
                            </div>
                            {/* Online dot */}
                            <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#0d1626] bg-emerald-400" />
                        </div>
                        <div>
                            <h3 className="font-display text-xl font-bold text-white">{personalData.name}</h3>
                            <p className="text-sm font-medium text-blue-400">Full Stack Developer</p>
                            <p className="text-xs text-slate-500">MERN & Next.js</p>
                        </div>
                    </div>

                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-blue-400/70 mb-3">Bio</p>
                    <p className="text-base leading-7 text-slate-300">
                        Full-stack developer with 2+ years building production-grade web applications with the
                        MERN stack and Next.js. I care equally about what users experience and what the code does underneath.
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                        Currently shipping scalable SaaS features at{" "}
                        <span className="font-semibold text-slate-200">{personalData.currentCompany}</span> while
                        taking on freelance projects in parallel. I thrive at the intersection of design thinking
                        and engineering precision.
                    </p>
                </motion.div>

                {/* Quick info card */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 24 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="surface-card rounded-2xl p-6 flex flex-col gap-3"
                >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-blue-400/70 mb-1">Quick Info</p>

                    {[
                        { icon: <TbBriefcase className="text-blue-400 h-4 w-4" />, label: "Role",     value: personalData.currentRole },
                        { icon: <TbBriefcase className="text-sky-400  h-4 w-4" />, label: "Company",  value: personalData.currentCompany },
                        { icon: <TbMapPin    className="text-indigo-400 h-4 w-4" />, label: "Location", value: personalData.locationShort },
                        {
                            icon: <TbMail className="text-emerald-400 h-4 w-4" />,
                            label: "Email",
                            value: personalData.email,
                            href: `mailto:${personalData.email}`,
                        },
                    ].map(({ icon, label, value, href }) => (
                        <div
                            key={label}
                            className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3.5 py-3"
                        >
                            <div className="mt-0.5 flex-shrink-0">{icon}</div>
                            <div className="min-w-0">
                                <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-slate-500">{label}</p>
                                {href ? (
                                    <a href={href} className="mt-0.5 block truncate text-sm text-blue-400 hover:text-blue-300 transition-colors">
                                        {value}
                                    </a>
                                ) : (
                                    <p className="mt-0.5 truncate text-sm text-slate-200">{value}</p>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="mt-auto flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.07] px-3.5 py-2.5">
                        <span className="relative flex h-2 w-2 flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        <p className="text-xs font-semibold text-emerald-300">Open to new opportunities</p>
                    </div>
                </motion.div>
            </div>

            {/* Strength cards */}
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 lg:grid-cols-4"
            >
                {strengths.map((s) => (
                    <motion.div
                        key={s.title}
                        variants={fadeUp}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className={`surface-card relative overflow-hidden rounded-2xl p-5 cursor-default`}
                    >
                        {/* Gradient bg accent */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${s.bg} pointer-events-none`} />
                        <div className="relative">
                            <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border ${s.border} bg-white/[0.04]`}>
                                {s.icon}
                            </div>
                            <h3 className="font-display text-base font-semibold text-white">{s.title}</h3>
                            <p className="mt-1.5 text-xs leading-5 text-slate-400">{s.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </article>
    );
};
