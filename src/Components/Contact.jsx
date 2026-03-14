import {motion} from "framer-motion";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import Toastify from 'toastify-js';
import {MdOutlineArrowOutward} from "react-icons/md";
import "toastify-js/src/toastify.css"
import {CgProfile} from "react-icons/cg";

const variants = {
    initial: {
        opacity: 0,
        y: 500
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
};

/**
 * Contact Section Component
 * Contact form and information with EmailJS integration
 */
export const Contact = () => {
    const formRef = useRef();
    const ref = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm('service_hbifhmr', 'template_pgf2s5p', formRef.current, 'id4X508VlnKloKeZi')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    formRef.current.reset();
                    Toastify({
                        text: "Your Message was successfully sent",
                        duration: 3000,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "top",
                        position: "center",
                        stopOnFocus: true,
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function () {
                        }
                    }).showToast();
                    setIsSubmitting(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Toastify({
                        text: "Failed to submit the form. Please try again.",
                        duration: 3000,
                        gravity: "top",
                        position: "center",
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function () {
                        }
                    }).showToast();
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <section 
            id="contactSection"
            className="contact flex flex-col lg:flex-row items-center justify-between min-h-screen"
        >
                <motion.div
                    className="flex-1 flex flex-col gap-8 text-center lg:text-left p-4 lg:p-0"
                    initial={{opacity: 0, y: 500}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl py-4 font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Let's Work Together
                    </h1>
                    <div className="flex flex-col gap-4 text-neutral-400 text-lg">
                        <div className="item">
                            <h2 className="text-xl font-semibold">Mail</h2>
                            <span>abhishekmishra0409@gmail.com</span>
                        </div>
                        <div className="item">
                            <h2 className="text-xl font-semibold">Address</h2>
                            <span>Indore (M.P), India</span>
                        </div>
                        <div className="item">
                            <h2 className="text-xl font-semibold">Phone</h2>
                            <span>+91 7489977978</span>
                        </div>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                           className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-cyan-400 hover:text-cyan-300">
                            <h2 className="text-xl font-semibold">Resume</h2>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 6L14 10L10 14"></path>
                                <path d="M14 10H4"></path>
                            </svg>
                        </a>
                    </div>
                </motion.div>
                <div className="formContainer flex-1 w-full max-w-lg mt-12 lg:mt-0 p-4 lg:p-0">
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1}}
                        className="flex flex-col gap-6"
                    >
                        <input type="text" required placeholder="Name" name="user_name"
                               className="bg-transparent border-2 border-neutral-700 text-white rounded-xl p-4 focus:border-cyan-400 outline-none transition-colors"/>
                        <input type="email" required placeholder="Email" name="user_email"
                               className="bg-transparent border-2 border-neutral-700 text-white rounded-xl p-4 focus:border-cyan-400 outline-none transition-colors"/>
                        <textarea rows={6} required placeholder="Message" name="message"
                                  className="bg-transparent border-2 border-neutral-700 text-white rounded-xl p-4 focus:border-cyan-400 outline-none transition-colors"/>
                        <button type="submit"
                                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                                disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </motion.form>
                </div>
            </section>
    );

};