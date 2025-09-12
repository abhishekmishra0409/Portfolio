import Project_1 from "../assets/projects/Project-1.png"
import Project_2 from "../assets/projects/Project-2.png"
import Project_3 from "../assets/projects/Project-3.jpg"
import Project_4 from "../assets/projects/Project-4.webp"
import Project_5 from "../assets/projects/Project-5.webp"
import Project_6 from "../assets/projects/Project-6.png"
import MedGo from "../assets/projects/MedGo.png"
import ChatApp from "../assets/projects/ChatApp.png"
import JobPortal from "../assets/projects/JobPortal.png"

import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";


const items = [
    {
        id: 1,
        title: "VirtualCart",
        img: Project_1,
        desc: "Virtual Cart seems to be an e-commerce website. The design is modern and visually appealing. The use of product images and categories is effective. The navigation is intuitive, and the overall user experience seems smooth.",
        tech: ["JavaScript", "React", "HTML", "CSS", "Nodejs", "Express", "MongoDB", "Cloudinary"],
        link: "https://virtual-cart-97la.vercel.app/"
    },
    {
        id: 2,
        title: "DawaiLink | MedGo",
        img: MedGo,
        desc: "MedGo is a telemedicine platform that connects patients with healthcare professionals for online consultations. It offers features like appointment scheduling, communication between patients, doctors, and prescription management, making healthcare more accessible and convenient.",
        tech: ["React", "Tailwind", "Nodejs", "Express", "MongoDB", "Cloudinary", "WebSocket"],
        link: "https://med-go-pi.vercel.app/"
    },
    {
        id: 3,
        title: "Real-Time Chat Application",
        img: ChatApp,
        desc: "A modern real-time chat application with features like direct messaging, group chats, file sharing, and read receipts. Built with a focus on performance and user experience with secure authentication and responsive design.",
        tech: ["Angular", "Node.js", "Socket.io", "MongoDB", "JWT", "Tailwind CSS", "Express"],
        link: "https://chat-applicatio-mean.web.app/"
    },
    {
        id: 4,
        title: "Job Portal Application",
        img: JobPortal,
        desc: "A comprehensive job search platform connecting employers with job seekers. Features include job postings, resume uploads, application tracking, employer dashboards, and advanced search filters with AI-based job recommendations.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Cloudinary"],
        link: "https://kc-job-portal.vercel.app/"
    },
    {
        id: 5,
        title: "Taarunyam 2K23",
        img: Project_2,
        desc: "Created an interactive website to showcase information about the college's annual techfest, providing details on events, schedules, and participant registration. The platform enhanced the visibility and engagement of the techfest among students.",
        tech: ["JavaScript", "React", "HTML", "CSS"],
        link: "https://taarunyam-cbd2c.web.app/"
    },
    {
        id: 6,
        title: "Taarunyam 2k22",
        img: Project_3,
        desc: "Virtual Cart seems to be an e-commerce website. The design is modern and visually appealing. The use of product images and categories is effective. The navigation is intuitive, and the overall user experience seems smooth.",
        tech: ["JavaScript", "HTML", "CSS"],
        link: "https://taarunyam-8252a.web.app/"
    },
    {
        id: 7,
        title: "ERP Login",
        img: Project_4,
        desc: "The College ERP Login Portal provides students with secure access to academic resources, including grades, attendance, timetable, and notification of events. Through interactive features like online assignments and communication channels, students can engage with teachers and peers effectively. The portal streamlines administrative tasks, enhances transparency, and fosters a collaborative learning environment.",
        tech: ["JavaScript", "React", "Express", "MongoDB", "HTML", "CSS", "Cloudinary"],
        link: "https://erp-login-wheat.vercel.app/"
    },
    {
        id: 8,
        title: "Course Exit Survey & Feedback Form",
        img: Project_5,
        desc: "A platform for students to provide feedback and complete exit surveys for their courses. The application allows students to fill out forms with ease and provides insights into course experiences and areas for improvement.",
        tech: ["JavaScript", "React", "HTML", "CSS", "Express", "Nodejs", "MongoDB"],
        link: "https://feedback-form-puce.vercel.app/"
    },
    {
        id: 9,
        title: "Maa Foundation",
        img: Project_6,
        desc: "Maa Foundation is an NGO focused on empowering communities through education, healthcare, and sustainable development. Dedicated to creating lasting positive change, the foundation strives to uplift lives across India.",
        tech: ["JavaScript", "React", "Express", "Nodejs", "MongoDB", "HTML", "CSS", "RazorPay", "Cloudinary"],
        link: "https://maa-foundation-frontend.vercel.app/"
    }
];


const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref,})
    const y = useTransform(scrollYProgress, [0, 1], [-200, 200])

    return (

        <section
            className="Container flex flex-col lg:flex-row items-center justify-center p-4 lg:p-16 gap-8 lg:gap-16">
            <div className="flex-1 max-w-xl min-w-0" ref={ref}>
                <img className="w-full h-auto rounded-xl shadow-lg" src={item.img} alt={item.title}/>
            </div>
            <motion.div
                className="flex-1 flex flex-col gap-6 text-center lg:text-left min-w-0"
                style={{y}}
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 0.8}}
            >
                <h2 className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {item.title}
                </h2>
                <p className="text-neutral-400 text-lg">{item.desc}</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {item.tech.map((tech, index) => (
                        <span key={index}
                              className="rounded-full bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400">
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                >
                    <button
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                        See Demo
                    </button>
                </a>
            </motion.div>
        </section>
    )
}
export const Portfolio = () => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref, offset: ["end end", "start start"]})
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return (
        <>
            <div className={"portfolio "} ref={ref}>
                <div
                    className="progress sticky top-0 left-0 pt-12 text-center text-cyan-400 text-4xl lg:text-5xl font-bold z-10">
                    <h1>Featured Works</h1>
                    <motion.div style={{scaleX}}
                                className="progressBar mt-4 h-2 rounded-full bg-purple-500"></motion.div>
                </div>
                {items.map((item) => (
                    <Single item={item} key={item.id}/>
                ))}
            </div>
        </>
    )
}