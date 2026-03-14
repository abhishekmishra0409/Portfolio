import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaBriefcase, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

/**
 * Experience Section Component
 * Dedicated section showcasing professional experience with modern cards
 */
export const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software / Web Developer",
      company: "BestPeers Infosystem",
      duration: "September 2025 – Present",
      location: "Remote / On-site",
      icon: <FaCode />,
      responsibilities: [
        "Developing scalable web applications using MERN stack (MongoDB, Express, React, Node.js)",
        "Improving UI/UX design and user experience with modern frameworks",
        "Writing comprehensive test cases for quality assurance and bug prevention",
        "Collaborating with cross-functional teams on agile projects",
        "Implementing responsive designs and optimizing application performance"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript"],
      isCurrent: true,
      color: "from-cyan-400 to-purple-500"
    },
    {
      id: 2,
      title: "Team Leader",
      company: "ADM",
      duration: "Previous Role",
      location: "Team Management",
      icon: <FaUsers />,
      responsibilities: [
        "Managed a team of 10 people across multiple projects",
        "Handled technical tasks and project coordination",
        "Led team meetings, sprint planning, and code reviews",
        "Mentored junior developers and conducted training sessions"
      ],
      technologies: ["Leadership", "Project Management", "Team Coordination"],
      isCurrent: false,
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      title: "Web Development Intern",
      company: "ADM",
      duration: "Internship Period",
      location: "Development Team",
      icon: <FaBriefcase />,
      responsibilities: [
        "Worked on multiple frontend and backend projects",
        "Gained hands-on experience in web development technologies",
        "Collaborated with senior developers on real-world applications",
        "Learned best practices in code quality and version control"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      isCurrent: false,
      color: "from-indigo-400 to-cyan-500"
    },
    {
      id: 4,
      title: "Freelance Developer",
      company: "Self-Employed",
      duration: "Freelancing",
      location: "Remote",
      icon: <FaCode />,
      responsibilities: [
        "Built websites and web applications for various clients",
        "Designed UI/UX and implemented responsive designs",
        "Managed client relationships and project delivery timelines",
        "Provided technical consultation and maintenance services"
      ],
      technologies: ["React", "Node.js", "MongoDB", "UI/UX Design", "Client Management"],
      isCurrent: false,
      color: "from-green-400 to-teal-500"
    }
  ];

  const ExperienceCard = ({ experience, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        whileHover={{ scale: 1.02, y: -8 }}
        className="group relative bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden"
      >
        {/* Gradient Accent */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${experience.color}`}></div>
        
        {/* Current Badge */}
        {experience.isCurrent && (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="absolute top-4 right-4"
          >
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">
              Current
            </span>
          </motion.div>
        )}

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${experience.color} text-white shadow-lg`}>
            {experience.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">{experience.title}</h3>
            <p className="text-cyan-400 font-semibold mb-2">{experience.company}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="text-purple-400" />
                {experience.duration}
              </span>
              <span className="text-neutral-600">•</span>
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-neutral-300 mb-3 flex items-center gap-2">
            <FaCheckCircle className="text-cyan-400" />
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + idx * 0.05 }}
                className="text-neutral-400 text-sm flex items-start gap-2"
              >
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${experience.color} mt-1 font-bold`}>
                  ▸
                </span>
                <span>{resp}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-700/50">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${experience.color} bg-opacity-20 text-cyan-300 border border-cyan-400/30`}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-12 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 lg:mb-16"
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Building scalable solutions and leading teams to deliver exceptional results
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.id} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
};
