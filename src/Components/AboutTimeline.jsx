import { motion } from "framer-motion";
import { TbCalendarEvent, TbSparkles, TbAward, TbBriefcase, TbSchool, TbTrophy, TbDeviceGamepad2 } from "react-icons/tb";
import { GiChessKnight } from "react-icons/gi";

export const AboutTimeline = () => {
    const education = [
        {
            id: 1,
            title: "B.Tech — Information Technology",
            institution: "Swami Vivekanand College of Engineering (SVCE), Indore, MP",
            year: "Sep 2021 – May 2025 · GPA 7.36 / 10",
            icon: <TbSchool />,
            description: "Completed B.Tech in IT with focus on web development and software engineering.",
        },
        {
            id: 2,
            title: "Higher Secondary (Class XII)",
            institution: "Govt. Excellence Bal Vinay Mandir, Indore, MP",
            year: "2020 – 2021 · 81%",
            icon: <TbSparkles />,
            description: "Completed Class XII with a strong foundation in mathematics and science.",
        },
    ];

    const experience = [
        {
            id: 1,
            title: "Junior Software Engineer",
            company: "BestPeers Technology Solutions",
            duration: "September 2025 – Present",
            role: "Current Role",
            icon: <TbBriefcase />,
            responsibilities: [
                "Architect and maintain scalable multi-tenant SaaS platforms using Next.js and MySQL",
                "Designed and implemented RBAC for enterprise-grade permission management",
                "Integrated Stripe for subscription management and webhook synchronization",
                "Built secure auth workflows using JWT and OAuth industry best practices",
            ],
            isCurrent: true,
        },
        {
            id: 2,
            title: "Web Developer",
            company: "ADM Education & Welfare Society",
            duration: "November 2024 – August 2025",
            role: "Full-time · Remote",
            icon: <TbBriefcase />,
            responsibilities: [
                "Led backend development for a CRM, managing a team of 5+ developers",
                "Built the Maa Foundation website with Razorpay integration",
                "Developed healthcare apps using React.js and Node.js",
            ],
            isCurrent: false,
        },
        {
            id: 3,
            title: "Web Development Intern",
            company: "ADM Education & Welfare Society",
            duration: "May 2024 – November 2024",
            role: "Internship · Remote",
            icon: <TbBriefcase />,
            responsibilities: [
                "Built responsive web apps using React.js, HTML, CSS, and JavaScript",
                "Collaborated with senior developers on features, bug fixes, and code reviews",
            ],
            isCurrent: false,
        },
        {
            id: 4,
            title: "Freelance Developer",
            company: "Self-Employed",
            duration: "Ongoing · Part-time",
            role: "Independent Work",
            icon: <TbBriefcase />,
            responsibilities: [
                "Build web applications for clients alongside full-time work",
                "Handle design, development, and post-launch maintenance end to end",
            ],
            isCurrent: false,
        },
    ];

    const achievements = [
        {
            id: 1,
            title: "2nd Place — Pravah 3.0 Hackathon",
            description: "Built Exchangify — a barter-based skill-sharing platform",
            icon: <TbTrophy />,
        },
        {
            id: 2,
            title: "Tech Lead, GDSC",
            description: "Organised workshops, coding challenges, and mentoring at Google Developer Student Club",
            icon: <TbAward />,
        },
        {
            id: 3,
            title: "Event Manager, Taarunyam Techfest",
            description: "Managed technical events and logistics for the college tech festival",
            icon: <TbSparkles />,
        },
        {
            id: 4,
            title: "Chess Competition Winner",
            description: "Won interschool chess competition",
            icon: <GiChessKnight />,
        },
        {
            id: 5,
            title: "Gaming Tournament Winner",
            description: "Won mobile gaming tournament",
            icon: <TbDeviceGamepad2 />,
        },
    ];

    const TimelineItem = ({ item, index, type = "education" }) => {
        const isEven = index % 2 === 0;
        return (
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative mb-8 flex w-full items-center ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col lg:mb-10`}
            >
                {/* Timeline line */}
                <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 lg:block" />
                <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-blue-500 to-blue-600 lg:hidden" />

                <div className={`ml-12 w-[calc(100%-3rem)] lg:ml-0 lg:w-5/12 ${isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}>
                    <motion.div
                        whileHover={{ y: -3 }}
                        className="surface-card rounded-2xl p-5 transition-all duration-300 hover:border-blue-400/20"
                    >
                        {type === "education" ? (
                            <>
                                <div className="mb-3 flex items-center gap-3">
                                    <div className="text-xl text-blue-400">{item.icon}</div>
                                    <div>
                                        <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                                        <p className="text-xs text-blue-300">{item.institution}</p>
                                    </div>
                                </div>
                                <p className="mb-1.5 text-xs text-slate-400">{item.year}</p>
                                <p className="text-sm text-slate-400">{item.description}</p>
                            </>
                        ) : (
                            <>
                                <div className="mb-2.5 flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="text-xl text-blue-400">{item.icon}</div>
                                        <div>
                                            <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                                            <p className="text-xs text-blue-300">{item.company}</p>
                                        </div>
                                    </div>
                                    {item.isCurrent && (
                                        <span className="shrink-0 rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-blue-200">
                                            Current
                                        </span>
                                    )}
                                </div>
                                <div className="mb-2.5 flex flex-wrap gap-2 text-xs text-slate-400">
                                    <span className="flex items-center gap-1.5">
                                        <TbCalendarEvent className="text-blue-400" />
                                        {item.duration}
                                    </span>
                                    <span className="text-slate-600">·</span>
                                    <span>{item.role}</span>
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 z-10 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-4 border-[#060a12] bg-blue-500 lg:block" />
                <div className="absolute left-4 top-0 z-10 h-3.5 w-3.5 rounded-full border-4 border-[#060a12] bg-blue-500 lg:hidden" />
            </motion.div>
        );
    };

    return (
        <div className="space-y-16 py-8 lg:space-y-20 lg:py-12">
            {/* Education */}
            <section>
                <motion.h2
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center font-display text-2xl font-bold text-gradient lg:text-3xl"
                >
                    Education
                </motion.h2>
                <div className="relative mx-auto max-w-4xl">
                    {education.map((item, i) => <TimelineItem key={item.id} item={item} index={i} type="education" />)}
                </div>
            </section>

            {/* Experience */}
            <section id="experience">
                <motion.h2
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center font-display text-2xl font-bold text-gradient lg:text-3xl"
                >
                    Experience
                </motion.h2>
                <div className="relative mx-auto max-w-4xl">
                    {experience.map((item, i) => <TimelineItem key={item.id} item={item} index={i} type="experience" />)}
                </div>
            </section>

            {/* Achievements */}
            <section>
                <motion.h2
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center font-display text-2xl font-bold text-gradient lg:text-3xl"
                >
                    Achievements
                </motion.h2>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {achievements.map((a, i) => (
                        <motion.div
                            key={a.id}
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.07 }}
                            whileHover={{ y: -3 }}
                            className="surface-card rounded-2xl p-5 transition-all duration-300 hover:border-blue-400/20"
                        >
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 shrink-0 text-2xl text-blue-400">{a.icon}</div>
                                <div>
                                    <h3 className="font-display text-sm font-semibold text-white">{a.title}</h3>
                                    <p className="mt-1 text-xs leading-5 text-slate-400">{a.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutTimeline;
