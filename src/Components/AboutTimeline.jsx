import { motion } from "framer-motion";
import { TbCalendarEvent, TbDeviceGamepad2, TbSparkles } from "react-icons/tb";
import {
    GiChessKnight,
    GiGalaxy,
    GiMoonOrbit,
    GiRingedPlanet,
    GiSpaceship,
    GiStarFormation,
    GiStarMedal,
} from "react-icons/gi";

/**
 * AboutTimeline Component
 * Displays education and achievements in the about page
 */
export const AboutTimeline = () => {
  const cleanDuration = (value) =>
    value.replace(/[^\u0020-\u007E]+/g, "-").replace(/-+/g, "-").replace(/\s*-\s*/g, " - ");

  const education = [
    {
      id: 1,
      title: "B.Tech in Information Technology",
      institution: "Swami Vivekanand College",
      year: "2020 - 2024",
      icon: <GiRingedPlanet />,
      description: "Completed Bachelor's degree in Information Technology with focus on web development and software engineering."
    },
    {
      id: 2,
      title: "Schooling",
      institution: "Excellence Bal Vinay Mandir School",
      year: "Completed",
      icon: <TbSparkles />,
      description: "Completed primary and secondary education with strong foundation in mathematics and science."
    }
  ];

  const experience = [
    {
      id: 1,
      title: "Software / Web Developer",
      company: "BestPeers Infosystem",
      duration: "September 2025 - Present",
      role: "Current Role",
      icon: <GiSpaceship />,
      responsibilities: [
        "Developing scalable web applications using MERN stack",
        "Improving UI/UX design and user experience with modern frameworks",
        "Writing comprehensive test cases for quality assurance and bug prevention",
        "Collaborating with cross-functional teams on agile projects"
      ],
      isCurrent: true
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "ADM",
      duration: "Internship Period",
      role: "Internship Experience",
      icon: <GiMoonOrbit />,
      responsibilities: [
        "Worked on multiple frontend and backend projects",
        "Gained hands-on experience in web development technologies",
        "Collaborated with senior developers on real-world applications"
      ],
      isCurrent: false
    },
    {
      id: 3,
      title: "Freelance Developer",
      company: "Self-Employed",
      duration: "Freelancing",
      role: "Independent Work",
      icon: <GiGalaxy />,
      responsibilities: [
        "Built websites and web applications for various clients",
        "Designed UI/UX and implemented responsive designs",
        "Managed client relationships and project delivery timelines"
      ],
      isCurrent: false
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "Won first place in a competitive hackathon",
      icon: <GiStarMedal />
    },
    {
      id: 2,
      title: "Tech Lead at GDSC",
      description: "Served as Tech Lead at Google Developer Student Club",
      icon: <GiStarFormation />
    },
    {
      id: 3,
      title: "Chess Competition Winner",
      description: "Winner of interschool chess competition",
      icon: <GiChessKnight />
    },
    {
      id: 4,
      title: "Gaming Tournament Winner",
      description: "Winner of mobile gaming tournament",
      icon: <TbDeviceGamepad2 />
    },
    {
      id: 5,
      title: "Techfest Management",
      description: "Managed technical games in college techfest (Taarunyam)",
      icon: <TbSparkles />
    }
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
        <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-cyan-400 via-sky-400 to-indigo-500 lg:block"></div>
        <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-sky-400 to-indigo-500 lg:hidden"></div>

        <div className={`ml-12 w-full lg:ml-0 lg:w-5/12 ${isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}>
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="surface-card rounded-[1.5rem] p-6 shadow-xl transition-all duration-300 hover:border-cyan-400/20 hover:shadow-cyan-500/10"
          >
            {type === "education" ? (
              <>
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-2xl text-cyan-300">{item.icon}</div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-cyan-300">{item.institution}</p>
                  </div>
                </div>
                <p className="mb-2 text-sm text-sky-300">{item.year}</p>
                <p className="text-sm text-slate-400">{item.description}</p>
              </>
            ) : (
              <>
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl text-cyan-300">{item.icon}</div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-cyan-300">{item.company}</p>
                    </div>
                  </div>
                  {item.isCurrent && (
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      Live orbit
                    </span>
                  )}
                </div>
                <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <TbCalendarEvent className="text-sky-300 cosmic-icon-glow" />
                    {cleanDuration(item.duration)}
                  </span>
                  <span className="text-slate-600">|</span>
                  <span>{item.role}</span>
                </div>
                <ul className="space-y-2">
                  {item.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1 text-cyan-300">-</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </div>

        <div className="absolute left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-500 lg:block"></div>
        <div className="absolute left-4 top-0 z-10 h-4 w-4 rounded-full border-4 border-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-500 lg:hidden"></div>
      </motion.div>
    );
  };

  const AchievementCard = ({ achievement, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="surface-card rounded-[1.5rem] p-6 shadow-xl transition-all duration-300 hover:border-cyan-400/20 hover:shadow-cyan-500/10"
      >
        <div className="flex items-center gap-4">
          <div className="text-3xl text-cyan-300">{achievement.icon}</div>
          <div>
            <h3 className="mb-1 font-display text-lg font-semibold text-white">{achievement.title}</h3>
            <p className="text-sm text-slate-400">{achievement.description}</p>
          </div>
        </div>
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
          Training arc · Education
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
          Prior missions · Experience
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
          Star log · Achievements
        </motion.h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutTimeline;
