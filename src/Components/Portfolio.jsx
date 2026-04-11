import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { TbTelescope } from "react-icons/tb";
import { PortfolioProjectSchema } from "./StructuredData.jsx";
import { projectsData } from "../data/projectsData.js";

const items = projectsData;


const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, })
    const y = useTransform(scrollYProgress, [0, 1], [-60, 60])

    return (
        <article
            className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 overflow-visible px-4 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 lg:px-8 lg:py-16 xl:gap-16"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            <div className="group w-full min-w-0 max-w-xl justify-self-center lg:max-w-none" ref={ref}>
                <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl">
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-cyan-400/20 via-sky-400/15 to-indigo-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <img
                        className="h-full w-full rounded-[1.75rem] border border-white/10 object-cover transition-transform duration-300 group-hover:scale-105"
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
                className="flex min-w-0 flex-col gap-6 text-center lg:text-left"
                style={{ y }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8 }}
            >
                <div className="surface-card w-full rounded-[1.75rem] p-6 lg:p-8">
                    <Link to={`/projects/${item.slug}`}>
                        <h2
                            className="mb-4 font-display text-3xl font-semibold text-gradient transition-colors cursor-pointer lg:text-4xl"
                            itemProp="name"
                        >
                            {item.title}
                        </h2>
                    </Link>
                    {item.subtitle && (
                        <p className="mb-2 text-sm font-medium text-cyan-300">{item.subtitle}</p>
                    )}
                    <p className="mb-6 text-lg leading-relaxed text-slate-300" itemProp="description">{item.desc}</p>
                    <div className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                        {item.tech.map((tech, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-300 hover:bg-cyan-400/15"
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
                                className="button-secondary w-full sm:w-auto">
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
                                className="button-primary w-full sm:w-auto">
                                Live Demo
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
            <div className="progress sticky left-0 top-20 z-10 py-3">
                <div className="mx-auto max-w-4xl px-5 py-2 text-center lg:px-8">
                    <p className="space-eyebrow justify-center">Dock Bay · Mission Archive</p>
                    <h1 className="mt-4 flex flex-wrap items-center justify-center gap-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
                        <TbTelescope className="h-9 w-9 text-cyan-300/90 cosmic-icon-glow sm:h-10 sm:w-10" aria-hidden />
                        Featured Works
                    </h1>
                    <p className="mt-3 text-sm text-slate-400 lg:text-base">Scroll the station log — each row is a shipped build.</p>
                </div>
                <motion.div
                    style={{ scaleX }}
                    className="progressBar mx-auto mt-3 h-1.5 max-w-2xl rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500"
                    aria-hidden="true"
                ></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </section>
    )
}
