import { motion } from "framer-motion";
import { TbCalendarEvent, TbDeviceGamepad2, TbSparkles, TbAward, TbBriefcase, TbSchool, TbTrophy } from "react-icons/tb";
import { GiChessKnight } from "react-icons/gi";

export const AboutTimeline = () => {
    const education = [
        {
            id: 1,
            title: "B.Tech — Information Technology",
            institution: "Swami Vivekanand College of Engineering (SVCE), Indore, MP",
            year: "Sep 2021 – May 2025 · GPA 7.36 / 10",
            icon: <TbSchool />,
            description:
                "Completed Bachelor's degree in Information Technology with focus on web development and software engineering.",
        },
        {
            id: 2,
            title: "Higher Secondary Education (Class XII)",
            institution: "Govt. Excellence Bal Vinay Mandir, Indore, MP",
            year: "2020 – 2021 · 81%",
            icon: <TbSparkles />,
            description:
                "Completed higher secondary education with strong foundation in mathematics and science.",
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
                "Architect and maintain scalable multi-tenant SaaS platforms using Next.js, Node.js, and MySQL",
                "Designed and implemented RBAC for enterprise-grade user and permission management",
                "Integrated Stripe for subscription management, checkout flows, and webhook synchronization",
                "Built secure authentication workflows using JWT and OAuth industry best practices",
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
                "Led backend development for a CRM project, managing a team of 5+ developers",
                "Engineered the Maa Foundation website with Razorpay integration for secure payments",
                "Developed healthcare and business management applications using React.js and Node.js",
                "Translated Figma designs into high-performance components using Tailwind CSS",
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
                "Built responsive web applications using React.js, HTML, CSS, and JavaScript",
                "Collaborated with senior developers on feature implementation, bug fixes, and code reviews",
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
                "Build websites and web applications for clients alongside full-time work",
                "Design UI/UX and implement responsive, accessible interfaces",
                "Manage client relationships and project delivery timelines end to end",
            ],
            isCurrent: false,
        },
    ];

    const achievements = [
        {
            id: 1,
            title: "2nd Place — Pravah 3.0 Hackathon",
            description: "Built and presented Exchangify, an innovative skill-sharing platform with a barter-based learning system",
            icon: <TbTrophy />,
        },
        {
            id: 2,
            title: "Tech Lead, Google Developer Student Club",
            description: "Organized technical workshops, coding challenges, and mentoring sessions for student members",
            icon: <TbAward />,
        },
        {
            id: 3,
            title: "Event Manager, Taarunyam Techfest",
            description: "Managed technical events, logistics, and operations for the college technology festival",
            icon: <TbSparkles />,
        },
        {
            id: 4,
            title: "Chess Competition Winner",
            description: "Winner of interschool chess competition",
            icon: <GiChessKnight />,
        },
        {
            id: 5,
            title: "Gaming Tournament Winner",
            description: "Winner of mobile gaming tournament",
            icon: <TbDeviceGamepad2 />,
        },
    ];

    const TimelineItem = ({ item, index, type = "education" }) => {
        const isEven = index % 2 === 0;

        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-8 flex w-full items-center ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col lg:mb-12`}
            >
                <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-400 via-violet-400 to-indigo-600 lg:block" />
                <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-indigo-400 via-violet-400 to-indigo-600 lg:hidden" />

                <div className={`ml-12 w-full lg:ml-0 lg:w-5/12 ${isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}>
                    <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="surface-card rounded-[1.5rem] p-6 shadow-xl transition-all duration-300 hover:border-indigo-400/20"
                    >
                        {type === "education" ? (
                            <>
                                <div className="mb-3 flex items-center gap-3">
                                    <div className="text-2xl text-indigo-300">{item.icon}</div>
                                    <div>
                                        <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                                        <p className="text-sm text-indigo-300">{item.institution}</p>
                                    </div>
                                </div>
                                <p className="mb-2 text-sm text-slate-400">{item.year}</p>
                                <p className="text-sm text-slate-400">{item.description}</p>
                            </>
                        ) : (
                            <>
                                <div className="mb-3 flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="text-2xl text-indigo-300">{item.icon}</div>
                                        <div>
                                            <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                                            <p className="text-sm text-indigo-300">{item.company}</p>
                                        </div>
                                    </div>
                                    {item.isCurrent && (
                                        <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
                                            Current
                                        </span>
                                    )}
                                </div>
                                <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                                    <span className="flex items-center gap-2">
                                        <TbCalendarEvent className="text-indigo-300" />
                                        {item.duration}
                                    </span>
                                    <span className="text-slate-600">|</span>
                                    <span>{item.role}</span>
                                </div>
                                <ul className="space-y-2">
                                    {item.responsibilities.map((resp) => (
                                        <li key={resp} className="flex items-start gap-2 text-sm text-slate-400">
                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400/70" />
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </motion.div>
                </div>

                <div className="absolute left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-gradient-to-r from-indigo-400 to-violet-500 lg:block" />
                <div className="absolute left-4 top-0 z-10 h-4 w-4 rounded-full border-4 border-slate-950 bg-gradient-to-r from-indigo-400 to-violet-500 lg:hidden" />
            </motion.div>
        );
    };

    return (
        <div className="py-12 lg:py-16">
            <section className="mb-16 lg:mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center font-display text-3xl font-bold text-gradient lg:text-4xl"
                >
                    Education
                </motion.h2>
                <div className="relative mx-auto max-w-4xl">
                    {education.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} type="education" />
                    ))}
                </div>
            </section>

            <section className="mb-16 lg:mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center font-display text-3xl font-bold text-gradient lg:text-4xl"
                >
                    Experience
                </motion.h2>
                <div className="relative mx-auto max-w-5xl">
                    {experience.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} type="experience" />
                    ))}
                </div>
            </section>

            <section>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 px-4 text-center font-display text-2xl font-bold text-gradient sm:text-3xl lg:mb-12 lg:text-4xl"
                >
                    Achievements
                </motion.h2>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.04, y: -4 }}
                            className="surface-card rounded-[1.5rem] p-6 shadow-xl transition-all duration-300 hover:border-indigo-400/20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-3xl text-indigo-300">{achievement.icon}</div>
                                <div>
                                    <h3 className="mb-1 font-display text-lg font-semibold text-white">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-sm text-slate-400">{achievement.description}</p>
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
