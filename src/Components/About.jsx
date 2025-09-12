import aboutImg from "../assets/about.webp";
import {motion} from "framer-motion";

export const About = () => {
    return (
        <div className="overflow-x-hidden border-b border-neutral-900 pb-16 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-16">
            <motion.h1
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className="my-12 md:my-16 lg:my-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold"
            >
                About <span className="text-neutral-500">Me</span>
            </motion.h1>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <img
                        className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg object-cover"
                        src={aboutImg}
                        alt="About Me"
                    />
                </motion.div>

                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                >
                    <div className="max-w-xl">
                        <p className="text-neutral-400 text-base sm:text-lg md:text-xl leading-relaxed text-center lg:text-left">
                            I'm a Full Stack Developer passionate about building dynamic, responsive, and user-friendly
                            web applications. With expertise in frontend technologies like HTML, CSS, JavaScript, React,
                            Angular, Next.js, and Tailwind CSS, along with backend skills in Node.js, Express.js, and
                            MongoDB/MySQL, I specialize in delivering seamless user experiences and scalable solutions.
                            Let's collaborate to bring your ideas to life and build something remarkable together.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};