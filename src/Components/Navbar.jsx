import logo from '../assets/AM Logo.png';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import {CgProfile} from "react-icons/cg";
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
                <a href="https://drive.google.com/file/d/19r1_IolHkqCuOp64nHSh82X5btLJUquF/view?usp=sharing"
                   target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4z"></path>
                        <path d="M12 11a4 4 0 1 0 0 8a4 4 0 0 0 0-8z"></path>
                        <path d="M16 3L16 7L22 7"></path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/abhishekmishra04/" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
                <a href="https://github.com/abhishekmishra0409" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.instagram.com/abhishekmishra0409/" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37a4 4 0 1 1-7.23 2.94a4 4 0 0 1 7.23-2.94z"></path>
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                    </svg>
                </a>
            </div>
        </nav>
    );
};
