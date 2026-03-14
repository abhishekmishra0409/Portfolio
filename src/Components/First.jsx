import { useNavigate } from 'react-router-dom';
import MySelf from "../assets/My_self.webp";
import { motion } from "framer-motion";

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

/**
 * Hero/First Section Component
 * Main landing section with introduction and call-to-action
 */
export const First = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
        // Smooth scroll to contact section after navigation (only on desktop)
        setTimeout(() => {
            if (window.innerWidth >= 768) {
                const contactSection = document.getElementById("contactSection");
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        }, 300);
    };

    return (
        <header className="hero flex flex-wrap" role="banner">
            <div className="textContainer flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-4 lg:p-0">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={textVariant}
                    className="flex flex-col gap-4 lg:gap-8"
                >
                    <motion.h1
                        variants={textVariant}
                        className="text-4xl sm:text-5xl lg:text-7xl font-thin tracking-tight"
                    >
                        ABHISHEK MISHRA
                    </motion.h1>
                    <motion.h2
                        variants={textVariant}
                        className="bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-3xl sm:text-4xl lg:text-6xl tracking-tight text-transparent font-bold"
                    >
                        Full Stack Developer
                    </motion.h2>
                    <motion.p
                        variants={textVariant}
                        className="text-neutral-400 text-lg sm:text-xl max-w-xl"
                    >
                        MERN Stack Developer | React Developer | Building scalable web applications
                    </motion.p>
                    {/* <motion.div
                        variants={textVariant}
                        className="flex flex-row gap-4 items-center justify-center lg:justify-start mt-6"
                    >
                        <motion.button
                            variants={textVariant}
                            onClick={handleContactClick}
                            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                            aria-label="Contact Abhishek Mishra"
                        >
                            Contact Me
                        </motion.button>
                    </motion.div> */}
                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={slideVariant}
                initial="initial"
                animate="animate"
                aria-hidden="true"
            >
                Web Developer and Software Engineer
            </motion.div>
            <div className="imageContainer">
                <img
                    src={MySelf}
                    alt="Abhishek Mishra - Full Stack Developer and MERN Stack Developer"
                    loading="eager"
                    width="600"
                    height="800"
                />
            </div>
        </header>
    )
}
