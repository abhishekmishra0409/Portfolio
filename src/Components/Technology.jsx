import {RiReactjsLine} from "react-icons/ri";
import {DiGithubFull, DiJava} from "react-icons/di";
import {TbBrandNodejs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import {SiExpress} from "react-icons/si";
import {SiMysql} from "react-icons/si";
import {SiAngular} from "react-icons/si";
import {SiNextdotjs} from "react-icons/si";
import {SiTailwindcss} from "react-icons/si";
import {SiTypescript} from "react-icons/si";
import {SiJavascript, SiPython} from "react-icons/si";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const iconVarients = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

/**
 * Skill Progress Bar Component
 */
const SkillBar = ({ name, level, icon, color }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-xl">{icon}</span>
                    <span className="text-neutral-300 font-medium">{name}</span>
                </div>
                <span className="text-neutral-400 text-sm">{level}%</span>
            </div>
            <div className="w-full bg-neutral-800 rounded-full h-2.5 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${color} rounded-full shadow-lg`}
                />
            </div>
        </motion.div>
    );
};

/**
 * Technology/Skills Section Component
 * Displays technical skills and technologies with animated icons and progress bars
 */
export const Technology = () => {
    const skills = [
        { name: "React", level: 95, icon: <RiReactjsLine className="text-cyan-400" />, color: "from-cyan-400 to-blue-500" },
        { name: "Node.js", level: 90, icon: <TbBrandNodejs className="text-green-400" />, color: "from-green-400 to-emerald-500" },
        { name: "MongoDB", level: 88, icon: <SiMongodb className="text-green-500" />, color: "from-green-500 to-teal-500" },
        { name: "Express.js", level: 92, icon: <SiExpress className="text-gray-300" />, color: "from-gray-300 to-gray-400" },
        { name: "JavaScript", level: 95, icon: <SiJavascript className="text-yellow-400" />, color: "from-yellow-400 to-orange-500" },
        { name: "TypeScript", level: 85, icon: <SiTypescript className="text-blue-600" />, color: "from-blue-600 to-indigo-600" },
        { name: "Java", level: 80, icon: <DiJava className="text-red-500" />, color: "from-red-500 to-pink-500" },
        { name: "Python", level: 75, icon: <SiPython className="text-blue-400" />, color: "from-blue-400 to-cyan-500" },
        { name: "Angular", level: 82, icon: <SiAngular className="text-red-600" />, color: "from-red-600 to-rose-600" },
        { name: "Next.js", level: 88, icon: <SiNextdotjs className="text-white" />, color: "from-white to-gray-300" },
        { name: "Tailwind CSS", level: 93, icon: <SiTailwindcss className="text-cyan-400" />, color: "from-cyan-400 to-teal-400" },
        { name: "MySQL", level: 85, icon: <SiMysql className="text-blue-500" />, color: "from-blue-500 to-indigo-500" },
    ];

    return (
        <section className={"border-b border-neutral-800 pb-24 "}>
            <motion.h1
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className={"my-20 text-center text-4xl lg:text-5xl font-bold"}
            >
                Technologies & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </motion.h1>

            {/* Skills Progress Bars */}
            <div className="max-w-4xl mx-auto mb-16 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl lg:text-3xl font-semibold text-center mb-8 text-neutral-300"
                >
                    Core Skills Proficiency
                </motion.h2>
                <div className="space-y-6 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 lg:p-8 shadow-xl">
                    {skills.map((skill, index) => (
                        <SkillBar key={index} {...skill} />
                    ))}
                </div>
            </div>

            {/* Technology Icons Grid */}
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className={"flex flex-wrap items-center justify-center gap-4 lg:gap-6"}
            >
                    {/* React */}
                    <motion.div
                        variants={iconVarients(2.5)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-cyan-400/50 hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"}>
                        <RiReactjsLine className={"text-5xl lg:text-7xl text-cyan-400"}/>
                    </motion.div>

                    {/* Angular */}
                    <motion.div
                        variants={iconVarients(3)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-red-600/50 hover:shadow-red-600/20 transition-all duration-300 cursor-pointer"}>
                        <SiAngular className={"text-5xl lg:text-7xl text-red-600"}/>
                    </motion.div>

                    {/* Next.js */}
                    <motion.div
                        variants={iconVarients(2.8)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-white/50 hover:shadow-white/20 transition-all duration-300 cursor-pointer"}>
                        <SiNextdotjs className={"text-5xl lg:text-7xl text-white"}/>
                    </motion.div>

                    {/* TypeScript */}
                    <motion.div
                        variants={iconVarients(2.2)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-blue-600/50 hover:shadow-blue-600/20 transition-all duration-300 cursor-pointer"}>
                        <SiTypescript className={"text-5xl lg:text-7xl text-blue-600"}/>
                    </motion.div>

                    {/* JavaScript */}
                    <motion.div
                        variants={iconVarients(2.3)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-yellow-400/50 hover:shadow-yellow-400/20 transition-all duration-300 cursor-pointer"}>
                        <SiJavascript className={"text-5xl lg:text-7xl text-yellow-400"}/>
                    </motion.div>

                    {/* Node.js */}
                    <motion.div
                        variants={iconVarients(3)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-green-400/50 hover:shadow-green-400/20 transition-all duration-300 cursor-pointer"}>
                        <TbBrandNodejs className={"text-5xl lg:text-7xl text-green-400"}/>
                    </motion.div>

                    {/* MongoDB */}
                    <motion.div
                        variants={iconVarients(2.5)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-green-500/50 hover:shadow-green-500/20 transition-all duration-300 cursor-pointer"}>
                        <SiMongodb className={"text-5xl lg:text-7xl text-green-500"}/>
                    </motion.div>

                    {/* Express */}
                    <motion.div
                        variants={iconVarients(2)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-gray-300/50 hover:shadow-gray-300/20 transition-all duration-300 cursor-pointer"}>
                        <SiExpress className={"text-5xl lg:text-7xl text-gray-300"}/>
                    </motion.div>

                    {/* MySQL */}
                    <motion.div
                        variants={iconVarients(3)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"}>
                        <SiMysql className={"text-5xl lg:text-7xl text-blue-500"}/>
                    </motion.div>

                    {/* Tailwind CSS */}
                    <motion.div
                        variants={iconVarients(2.7)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-cyan-400/50 hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer"}>
                        <SiTailwindcss className={"text-5xl lg:text-7xl text-cyan-400"}/>
                    </motion.div>

                    {/* Java */}
                    <motion.div
                        variants={iconVarients(2.6)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-red-500/50 hover:shadow-red-500/20 transition-all duration-300 cursor-pointer"}>
                        <DiJava className={"text-5xl lg:text-7xl text-red-500"}/>
                    </motion.div>

                    {/* Python */}
                    <motion.div
                        variants={iconVarients(2.4)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-blue-400/50 hover:shadow-blue-400/20 transition-all duration-300 cursor-pointer"}>
                        <SiPython className={"text-5xl lg:text-7xl text-blue-400"}/>
                    </motion.div>

                    {/* GitHub */}
                    <motion.div
                        variants={iconVarients(2)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={"rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-4 lg:p-6 hover:border-white/50 hover:shadow-white/20 transition-all duration-300 cursor-pointer"}>
                        <DiGithubFull className={"text-5xl lg:text-7xl text-white"}/>
                    </motion.div>
                </motion.div>
            </section>
    )
}