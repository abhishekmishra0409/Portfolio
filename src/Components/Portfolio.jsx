import Project_1 from "../assets/projects/Project-1.png"
import Project_2 from "../assets/projects/Project-2.png"
import Project_3 from "../assets/projects/Project-3.jpg"
import Project_4 from "../assets/projects/Project-4.png"


import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";


const items = [
    {
        id: 1,
        title: "VirtualCart",
        img: Project_1,
        desc: "Virtual Cart seems to be an e-commerce website. The design is modern and visually appealing. The use of product images and categories is effective. The navigation is intuitive, and the overall user experience seems smooth.",
        tech: ["JavaScript", "React", "HTML", "CSS"],
        link: "https://virtualcart-37d44.web.app/"

    },
    {
        id: 2,
        title: "Taarunyam 2K23",
        img: Project_2,
        desc: "Created an interactive website to showcase information about the college's annual \n" +
            "techfest, providing details on events, schedules, and participant registration. The platform enhanced \n" +
            "the visibility and engagement of the techfest among students.",
        tech: ["JavaScript", "React", "HTML", "CSS"],
        link: "https://taarunyam-cbd2c.web.app/",

    }, {
        id: 3,
        title: "Taarunyam 2k22",
        img: Project_3,
        desc: "Virtual Cart seems to be an e-commerce website. The design is modern and visually appealing. The use of product images and categories is effective. The navigation is intuitive, and the overall user experience seems smooth.",
        tech: ["JavaScript", "HTML", "CSS"],
        link: "https://taarunyam-8252a.web.app/"
    },
    {
        id: 4,
        title: "ERP Login",
        img: Project_4,
        desc: "The College ERP Login Portal provides students with secure access to academic resources, including \n" +
            "grades, attendance, Timetable, and Notification of Events . Through interactive features like online \n" +
            "assignments and communication channels, students can engage with teachers and peers effectively. \n" +
            "The portal streamlines administrative tasks, enhances transparency, and fosters a collaborative \n" +
            "learning environment",
        tech: ["JavaScript", "React", "Express", "Mongodb", "HTML", "CSS"],
        link: "https://github.com/abhishekmishra0409/ERP_Login"
    },
];

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref,})
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (

        <section>
            <div className={"Container"}>
                <div className="Wrapper">
                    <div className="ImageContainer" ref={ref}>
                        <img src={item.img} alt={"Project_1"}/>
                    </div>

                    <motion.div className={"TextContainer"} style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <div className={"flex justify-center "}>
                            {item.tech.map((tech, index) => (

                                <span key={index}
                                      className={"mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-500"}>{tech}</span>
                            ))}
                        </div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <button
                                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                                See Demo
                            </button>
                        </a>
                    </motion.div>
                </div>
            </div>
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
            <div className={"portfolio"} ref={ref}>
                <div className={"progress"}>
                    <h1>Featured Works</h1>
                    <motion.div style={{scaleX}} className={"progressBar"}></motion.div>
                </div>
                {items.map((item) => (
                    <Single item={item} key={item.id}/>
                ))}
            </div>
        </>
    )
}