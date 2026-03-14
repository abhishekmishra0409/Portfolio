import aboutImg from "../assets/about.webp";
import { motion } from "framer-motion";
import { Timeline } from "./Timeline.jsx";

/**
 * About Section Component
 * Displays information about Abhishek Mishra with Timeline feature
 */
export const About = () => {
    return (
        <article className="overflow-x-hidden pb-16 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-16">
            {/* Introduction Section */}
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-12 md:my-16 lg:my-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold"
            >
                About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </motion.h1>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 mb-16 lg:mb-24">
                <motion.figure
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                        <img
                            className="relative rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-2xl object-cover transform group-hover:scale-105 transition duration-300"
                            src={aboutImg}
                            alt="Abhishek Mishra - Full Stack Developer and MERN Stack Developer"
                            loading="lazy"
                            width="500"
                            height="600"
                        />
                    </div>
                </motion.figure>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                >
                    <div className="max-w-xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 lg:p-8 shadow-xl">
                        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center lg:text-left bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Abhishek Mishra - Full Stack Developer
                        </h2>
                        <p className="text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed text-center lg:text-left mb-4">
                            I'm <strong className="text-cyan-400">Abhishek Mishra</strong>, a Full Stack Developer and <strong className="text-purple-400">MERN Stack Developer</strong> passionate about building dynamic, responsive, and user-friendly web applications.
                        </p>
                        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed text-center lg:text-left mb-4">
                            With expertise in <strong className="text-cyan-400">React</strong>, <strong className="text-cyan-400">Node.js</strong>, <strong className="text-cyan-400">MongoDB</strong>, <strong className="text-cyan-400">Express.js</strong>, <strong className="text-cyan-400">JavaScript</strong>, <strong className="text-cyan-400">Java</strong>, and <strong className="text-cyan-400">Python</strong>, I specialize in delivering seamless user experiences and scalable solutions.
                        </p>
                        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed text-center lg:text-left">
                            Currently working as a <strong className="text-purple-400">Software/Web Developer at BestPeers Infosystem</strong>, I focus on creating modern web applications that are both performant and maintainable. Let's collaborate to bring your ideas to life!
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Timeline Section */}
            <Timeline />
        </article>
    );
};