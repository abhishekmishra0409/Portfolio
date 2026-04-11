import { motion } from "framer-motion";
import { TbCalendarEvent, TbCircleCheck } from "react-icons/tb";
import { GiGalaxy, GiMoonOrbit, GiSpaceship } from "react-icons/gi";

/**
 * Experience Section Component
 * Dedicated section showcasing professional experience with modern cards
 */
export const Experience = () => {
  const cleanDuration = (value) =>
    value.replace(/[^\u0020-\u007E]+/g, "-").replace(/-+/g, "-").replace(/\s*-\s*/g, " - ");

  const experiences = [
    {
      id: 1,
      title: "Software / Web Developer",
      company: "BestPeers Infosystem",
      duration: "September 2025 – Present",
      location: "Remote / On-site",
      icon: <GiSpaceship />,
      responsibilities: [
        "Developing scalable web applications using MERN stack (MongoDB, Express, React, Node.js)",
        "Improving UI/UX design and user experience with modern frameworks",
        "Writing comprehensive test cases for quality assurance and bug prevention",
        "Collaborating with cross-functional teams on agile projects",
        "Implementing responsive designs and optimizing application performance"
      ],
      technologies: ["React", "React Native", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript", "Stripe", "Razorpay"],
      isCurrent: true,
      color: "from-cyan-400 to-sky-500"
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "ADM",
      duration: "Internship Period",
      location: "Development Team",
      icon: <GiMoonOrbit />,
      responsibilities: [
        "Worked on multiple frontend and backend projects",
        "Gained hands-on experience in web development technologies",
        "Collaborated with senior developers on real-world applications",
        "Learned best practices in code quality and version control"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      isCurrent: false,
      color: "from-teal-400 to-cyan-500"
    },
    {
      id: 3,
      title: "Freelance Developer",
      company: "Self-Employed",
      duration: "Freelancing",
      location: "Remote",
      icon: <GiGalaxy />,
      responsibilities: [
        "Built websites and web applications for various clients",
        "Designed UI/UX and implemented responsive designs",
        "Managed client relationships and project delivery timelines",
        "Provided technical consultation and maintenance services"
      ],
      technologies: ["React", "Node.js", "MongoDB", "UI/UX Design", "Client Management"],
      isCurrent: false,
      color: "from-indigo-400 to-blue-500"
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
        className="surface-card group relative overflow-hidden rounded-[1.75rem] p-6 transition-all duration-300 hover:border-cyan-400/20 hover:shadow-cyan-500/10 lg:p-8"
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
            <span className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg">
              Live orbit
            </span>
          </motion.div>
        )}

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`rounded-2xl bg-gradient-to-br p-3 text-3xl text-white shadow-lg ${experience.color}`}>
            {experience.icon}
          </div>
          <div className="flex-1">
            <h3 className="mb-1 font-display text-xl font-bold text-white lg:text-2xl">{experience.title}</h3>
            <p className="mb-2 font-semibold text-cyan-300">{experience.company}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <TbCalendarEvent className="text-sky-300 cosmic-icon-glow" />
                {cleanDuration(experience.duration)}
              </span>
              <span className="text-slate-600">|</span>
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-4">
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200">
            <TbCircleCheck className="text-cyan-400 cosmic-icon-glow" />
            Mission objectives
          </h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + idx * 0.05 }}
                className="flex items-start gap-2 text-sm text-slate-400"
              >
                <TbCircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400/70" aria-hidden />
                <span>{resp}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`rounded-full border border-cyan-400/15 bg-gradient-to-r px-3 py-1 text-xs font-medium text-slate-100 ${experience.color}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center lg:mb-16"
      >
        <p className="space-eyebrow justify-center">Flight Log · Career Trajectory</p>
        <h1 className="mt-5 flex flex-wrap items-center justify-center gap-3 font-display text-4xl font-bold text-white lg:text-5xl">
          <GiSpaceship className="h-10 w-10 shrink-0 text-sky-300/95 cosmic-icon-glow lg:h-12 lg:w-12" aria-hidden />
          Building products, shipping features, and supporting teams.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          Building scalable solutions and leading teams to deliver exceptional results
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
