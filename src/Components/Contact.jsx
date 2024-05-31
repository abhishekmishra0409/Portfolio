import {motion, useInView} from "framer-motion";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';


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
}


export const Contact = () => {

    const formRef = useRef();
    const ref = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_hbifhmr', 'template_pgf2s5p', formRef.current, {
                publicKey: 'id4X508VlnKloKeZi',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    formRef.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView={"animate"}>
                <motion.div className="textContainer" variants={variants}>
                    <motion.h1 variants={variants}>Let's Work together</motion.h1>
                    <motion.div className="item" variants={variants}>
                        <h2>Mail</h2>
                        <span>hello@react.dev</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Address</h2>
                        <span>Indore (M.P) , India</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Phone</h2>
                        <span>+91 1234567890</span>
                    </motion.div>
                </motion.div>
                <div className="formContainer">
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{opacity: 0}} whileInView={{opacity: 1}}
                        transition={{duration: 1}}>
                        <input type={"text"} required placeholder={"Name"} name={"user_name"}/>
                        <input type={"email"} required placeholder={"Email"} name={"user_email"}/>
                        <textarea rows={8} placeholder={"Message"} name={"message"}/>
                        <button type={"submit"}>Send Message</button>
                    </motion.form>
                </div>
            </motion.div>
        </>
    )
}