import MySelf from "../assets/My_self.webp";
import {motion} from "framer-motion";

const textVariant = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const slideVariant = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-200%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,

        }
    }
}


export const First = () => {

    const handleContactClick = () => {
        document.getElementById("contactSection").scrollIntoView({behavior: "smooth"});
    };

    return (
        <>
            <div className="hero flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={textVariant}
                        className="textContainer flex flex-col items-center lg:items-start justify-center"
                    >
                        <motion.h3 variants={textVariant}
                                   className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                            ABHISHEK MISHRA
                        </motion.h3>
                        <motion.h2
                            variants={textVariant}
                            className="bg-gradient-to-r mb-5 from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent"
                        >
                            Full Stack Developer
                        </motion.h2>
                        <motion.div variants={textVariant} className="buttons">
                            <motion.button variants={textVariant} onClick={handleContactClick}>Contact Me
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div className="slidingTextContainer" variants={slideVariant} initial="initial"
                            animate="animate">
                    Web Developer and Software Engineer
                </motion.div>
                <div className="imageContainer">
                    <img src={MySelf} alt="Abhishek Mishra"/>
                </div>
            </div>
        </>
    )
}
