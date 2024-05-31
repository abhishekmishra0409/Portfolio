import logo from '../assets/AM Logo.png';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import {RiTwitterXFill} from "react-icons/ri";
import {motion} from 'framer-motion';

export const Navbar = () => {
    return (
        <nav className="mb-2 flex items-center justify-between py-6 sm:py-2">
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                className="flex flex-shrink-0 items-center"
            >
                <img className="mx-2 w-20" src={logo} alt="AM Logo"/>
            </motion.div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/abhishekmishra04/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/abhishekmishra0409" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                {/*<a href="LINK_TO_TWITTER_PROFILE" target="_blank" rel="noopener noreferrer">*/}
                {/*    <RiTwitterXFill/>*/}
                {/*</a>*/}
                <a href="https://www.instagram.com/abhishekmishra0409/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
            </div>
        </nav>
    );
};
