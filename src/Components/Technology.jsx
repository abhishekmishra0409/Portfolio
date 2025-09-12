import {RiReactjsLine} from "react-icons/ri";
import {DiGithubFull} from "react-icons/di";
import {TbBrandNodejs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import {SiExpress} from "react-icons/si";
import {SiMysql} from "react-icons/si";
import {SiAngular} from "react-icons/si";
import {SiNextdotjs} from "react-icons/si";
import {SiTailwindcss} from "react-icons/si";
import {SiTypescript} from "react-icons/si";
import {motion} from "framer-motion";

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

export const Technology = () => {
    return (
        <>
            <div className={"border-b border-neutral-800 pb-24 "}>
                <motion.h1
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{duration: 1.5}}
                    className={"my-20 text-center text-4xl lg:text-5xl"}>Technologies
                </motion.h1>
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className={"flex flex-wrap items-center justify-center gap-4"}>
                    {/* React */}
                    <motion.div
                        variants={iconVarients(2.5)}
                        initial="initial"
                        animate="animate"
                        className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                        <RiReactjsLine className={"text-7xl text-cyan-400"}/>
                    </motion.div>

                    {/* Angular */}
                    <motion.div
                        variants={iconVarients(3)}
                        initial="initial"
                        animate="animate"
                        className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                        <SiAngular className={"text-7xl text-red-600"}/>
                    </motion.div>

                    {/* Next.js */}
                    <motion.div
                        variants={iconVarients(2.8)}
                        initial="initial"
                        animate="animate"
                        className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                        <SiNextdotjs className={"text-7xl text-white"}/>
                    </motion.div>

                    {/* TypeScript */}
                    <motion.div
                        variants={iconVarients(2.2)}
                        initial="initial"
                        animate="animate"
                        className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                        <SiTypescript className={"text-7xl text-blue-600"}/>
                    </motion.div>

                    {/* Node.js */}
                    <motion.div
                        variants={iconVarients(3)}
                        initial="initial"
                        animate="animate"
                        className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                        <TbBrandNodejs className={"text-7xl text-green-400"}/>
                    </motion.div>

                    {/* MongoDB */}
                    <motion.div
                        variants={iconVarients(2.5)}
                        initial="initial"
                        animate="animate"
                        className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                        <SiMongodb className={"text-7xl text-green-500"}/>
                    </motion.div>

                    {/* Express */}
                    <motion.div
                        variants={iconVarients(2)}
                        initial="initial"
                        animate="animate"
                        className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                        <SiExpress className={"text-7xl text-gray-300"}/>
                    </motion.div>

                    {/* MySQL */}
                    <motion.div
                        variants={iconVarients(3)}
                        initial="initial"
                        animate="animate"
                        className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                        <SiMysql className={"text-7xl text-blue-500"}/>
                    </motion.div>

                    {/* Tailwind CSS */}
                    <motion.div
                        variants={iconVarients(2.7)}
                        initial="initial"
                        animate="animate"
                        className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                        <SiTailwindcss className={"text-7xl text-cyan-400"}/>
                    </motion.div>

                    {/* GitHub */}
                    <motion.div
                        variants={iconVarients(2)}
                        initial="initial"
                        animate="animate"
                        className={"rounded-2xl border-4 border-neutral-800 p-4"}>
                        <DiGithubFull className={"text-7xl text-white"}/>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}