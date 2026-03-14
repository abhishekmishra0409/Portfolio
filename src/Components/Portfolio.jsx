import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { PortfolioProjectSchema } from "./StructuredData.jsx";
import { projectsData } from "../data/projectsData.js";

const items = projectsData;


const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, })
    const y = useTransform(scrollYProgress, [0, 1], [-200, 200])

    return (
        <article
            className="container overflow-hidden flex flex-col lg:flex-row items-center justify-center p-4 lg:p-16"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            <div className="flex-1 max-w-xl min-w-0 group" ref={ref}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                        className="w-full h-full rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                        src={item.img}
                        alt={`${item.title} - Project by Abhishek Mishra, Full Stack Developer`}
                        loading="lazy"
                        width="800"
                        height="600"
                        itemProp="image"
                    />
                </div>
            </div>
            <motion.div
                className="flex-1 flex flex-col gap-6 text-center lg:text-left min-w-0"
                style={{ y }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8 }}
            >
                <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 lg:p-8 shadow-xl">
                    <Link to={`/projects/${item.slug}`}>
                        <h2
                            className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 hover:text-cyan-400 transition-colors cursor-pointer"
                            itemProp="name"
                        >
                            {item.title}
                        </h2>
                    </Link>
                    {item.subtitle && (
                        <p className="text-cyan-400 text-sm mb-2 font-medium">{item.subtitle}</p>
                    )}
                    <p className="text-neutral-300 text-lg mb-6 leading-relaxed" itemProp="description">{item.desc}</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                        {item.tech.map((tech, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 hover:from-cyan-400/30 hover:to-purple-500/30 transition-all duration-300"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to={`/projects/${item.slug}`}
                            className="w-full sm:w-auto inline-block"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-neutral-700 border border-neutral-600 text-neutral-300 font-semibold py-3 px-8 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 w-full sm:w-auto">
                                View Details
                            </motion.button>
                        </Link>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-block"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 w-full sm:w-auto">
                                Live Demo →
                            </motion.button>
                        </a>
                    </div>
                </div>
            </motion.div>
        </article>
    )
}

/**
 * Portfolio Section Component
 * Displays featured projects with structured data for SEO
 */
export const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <section className={"portfolio "} ref={ref}>
            <PortfolioProjectSchema projects={items} />
            <div className="progress sticky top-0 left-0 pt-12 pb-4 text-center z-10 bg-neutral-900/80 backdrop-blur-sm">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Featured Works
                </h1>
                <motion.div
                    style={{ scaleX }}
                    className="progressBar mt-4 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 mx-auto max-w-2xl"
                    aria-hidden="true"
                ></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </section>
    )
}