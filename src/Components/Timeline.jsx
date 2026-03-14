import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaCode, FaUsers, FaAward } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';

/**
 * Timeline Component
 * Displays Education, Experience, and Achievements in a modern timeline layout
 */
export const Timeline = () => {
  const education = [
    {
      id: 1,
      title: "B.Tech in Information Technology",
      institution: "Swami Vivekanand College",
      year: "2020 - 2024",
      icon: <FaGraduationCap />,
      description: "Completed Bachelor's degree in Information Technology with focus on web development and software engineering."
    },
    {
      id: 2,
      title: "Schooling",
      institution: "Excellence Bal Vinay Mandir School",
      year: "Completed",
      icon: <HiAcademicCap />,
      description: "Completed primary and secondary education with strong foundation in mathematics and science."
    }
  ];

  const experience = [
    {
      id: 1,
      title: "Software / Web Developer",
      company: "BestPeers Infosystem",
      duration: "September 2025 – Present",
      role: "Current Experience",
      icon: <FaCode />,
      responsibilities: [
        "Developing scalable web applications using MERN stack",
        "Improving UI/UX design and user experience",
        "Writing comprehensive test cases for quality assurance",
        "Collaborating with cross-functional teams on projects"
      ],
      isCurrent: true
    },
    {
      id: 2,
      title: "Team Leader",
      company: "ADM",
      duration: "Previous Role",
      role: "Leadership Experience",
      icon: <FaUsers />,
      responsibilities: [
        "Managed a team of 10 people",
        "Handled technical tasks and project coordination",
        "Led team meetings and sprint planning"
      ],
      isCurrent: false
    },
    {
      id: 3,
      title: "Web Development Intern",
      company: "ADM",
      duration: "Internship Period",
      role: "Internship Experience",
      icon: <FaBriefcase />,
      responsibilities: [
        "Worked on multiple frontend and backend projects",
        "Gained hands-on experience in web development",
        "Collaborated with senior developers"
      ],
      isCurrent: false
    },
    {
      id: 4,
      title: "Freelance Developer",
      company: "Self-Employed",
      duration: "Freelancing",
      role: "Freelancing Experience",
      icon: <FaCode />,
      responsibilities: [
        "Built websites and web applications for clients",
        "Designed UI/UX and implemented responsive designs",
        "Managed client relationships and project delivery"
      ],
      isCurrent: false
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "Won first place in a competitive hackathon",
      icon: <FaTrophy />
    },
    {
      id: 2,
      title: "Tech Lead at GDSC",
      description: "Served as Tech Lead at Google Developer Student Club",
      icon: <FaUsers />
    },
    {
      id: 3,
      title: "Chess Competition Winner",
      description: "Winner of interschool chess competition",
      icon: <FaAward />
    },
    {
      id: 4,
      title: "Gaming Tournament Winner",
      description: "Winner of mobile gaming tournament",
      icon: <FaTrophy />
    },
    {
      id: 5,
      title: "Techfest Management",
      description: "Managed technical games in college techfest (Taarunyam)",
      icon: <FaAward />
    }
  ];

  const TimelineItem = ({ item, index, type }) => {
    const isEven = index % 2 === 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative flex items-center w-full ${type === 'experience' && isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } flex-col mb-8 lg:mb-12`}
      >
        {/* Timeline Line - Hidden on mobile, visible on desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-indigo-500 hidden lg:block"></div>

        {/* Timeline Line - Mobile vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-indigo-500 lg:hidden"></div>

        {/* Content Card */}
        <div className={`w-full lg:w-5/12 ml-12 lg:ml-0 ${isEven ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
          }`}>
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
          >
            {type === 'education' && (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl text-cyan-400">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-cyan-400 text-sm">{item.institution}</p>
                  </div>
                </div>
                <p className="text-purple-400 text-sm mb-2">{item.year}</p>
                <p className="text-neutral-400 text-sm">{item.description}</p>
              </>
            )}

            {type === 'experience' && (
              <>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl text-cyan-400">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-cyan-400">{item.company}</p>
                    </div>
                  </div>
                  {item.isCurrent && (
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs font-semibold rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-purple-400 text-sm mb-3">{item.duration}</p>
                <ul className="space-y-2">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-neutral-400 text-sm flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </div>

        {/* Timeline Dot - Desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-4 border-neutral-900 z-10 hidden lg:block"></div>

        {/* Timeline Dot - Mobile */}
        <div className="absolute left-4 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-4 border-neutral-900 z-10 lg:hidden"></div>
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
        className="bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <div className="text-3xl text-cyan-400">{achievement.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">{achievement.title}</h3>
            <p className="text-neutral-400 text-sm">{achievement.description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="py-12 lg:py-20">
      {/* Education Timeline */}
      <section className="mb-16 lg:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          {education.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} type="education" />
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-16 lg:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>
        <div className="relative max-w-5xl mx-auto">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} type="experience" />
          ))}
        </div>
      </section>

      {/* Achievements Grid */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent px-4"
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};
