import aboutImg from "../assets/about.webp";
import {motion} from "framer-motion";

export const About = () => {
    return (
        <div className="overflow-x-hidden border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About <span className="text-neutral-500">Me</span>
            </h1>
            <div className="flex flex-wrap lg:flex-nowrap">
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl w-2/3 " src={aboutImg} alt="aboutMe"/>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2"
                >
                    <div className="my-20 flex justify-center lg:justify-start px-4 lg:px-0">
                        <p className="my-2 max-w-xl py-6 text-center lg:text-left">
                            Hi, I'm Abhishek Mishra! As a Full Stack Developer, I have a passion for creating dynamic
                            and responsive web
                            applications. With expertise in front-end technologies like HTML, CSS, JavaScript, React,
                            and back-end
                            technologies such as Node.js, Express, and SQL, MongoDB databases, I excel at crafting
                            seamless user
                            experiences and robust functionalities. Let's collaborate to bring your ideas to life and
                            build something
                            remarkable together.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
