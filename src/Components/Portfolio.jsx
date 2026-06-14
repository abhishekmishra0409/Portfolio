import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { PortfolioProjectSchema } from "./StructuredData.jsx";
import { projectsData } from "../data/projectsData.js";

const items = projectsData;

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

    return (
        <article
            className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 overflow-visible px-4 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 lg:px-8 lg:py-16 xl:gap-16"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            <div className="group w-full min-w-0 max-w-xl justify-self-center lg:max-w-none" ref={ref}>
                <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl">
                    <div className="absolute inset-0 z-10 bg-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <img
                        className="h-full w-full rounded-[1.75rem] border border-white/10 object-cover transition-transform duration-300 group-hover:scale-105"
                        src={item.img}
                        alt={`${item.title} project by Abhishek Mishra`}
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
                            className="mb-3 cursor-pointer font-display text-2xl font-semibold text-gradient transition-colors lg:text-3xl"
                            itemProp="name"
                        >
                            {item.title}
                        </h2>
                    </Link>
                    {item.subtitle && (
                        <p className="mb-2.5 text-xs font-bold tracking-[0.14em] uppercase text-blue-400/80">{item.subtitle}</p>
                    )}
                    <p className="mb-6 text-base leading-relaxed text-slate-300" itemProp="description">
                        {item.desc}
                    </p>
                    <div className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                        {item.tech.map((tech, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="rounded-full border border-blue-400/12 bg-blue-400/6 px-3 py-1.5 text-xs font-semibold text-blue-200/90 transition-all duration-300 hover:bg-blue-400/10"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link to={`/projects/${item.slug}`} className="w-full sm:w-auto inline-block">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="button-secondary w-full sm:w-auto"
                            >
                                View Details
                            </motion.button>
                        </Link>
                        {item.link && (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-block"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="button-primary w-full sm:w-auto"
                                >
                                    Live Demo
                                </motion.button>
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </article>
    );
};

const ProjectCard = ({ item }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="surface-card group flex flex-col justify-between rounded-2xl p-4 transition-all duration-300 hover:border-blue-400/20"
    >
        <div>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 mb-4 bg-slate-950">
                <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-blue-300">
                {item.title}
            </h3>
            {item.subtitle && (
                <p className="text-xs font-semibold text-blue-400 mt-1">{item.subtitle}</p>
            )}
            <p className="text-sm text-slate-400 mt-2 line-clamp-3">
                {item.desc}
            </p>
        </div>
        <div className="mt-4">
            <div className="flex flex-wrap gap-1 mb-4">
                {item.tech.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full border border-blue-400/10 bg-blue-400/5 px-2 py-0.5 text-[10px] font-medium text-blue-200">
                        {t}
                    </span>
                ))}
                {item.tech.length > 3 && (
                    <span className="text-[10px] text-slate-500 font-medium self-center">+{item.tech.length - 3}</span>
                )}
            </div>
            <div className="flex gap-2">
                <Link to={`/projects/${item.slug}`} className="flex-1">
                    <button className="button-secondary !py-1.5 !px-3 !rounded-lg text-xs w-full min-h-0">
                        Details
                    </button>
                </Link>
                {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <button className="button-primary !py-1.5 !px-3 !rounded-lg text-xs w-full min-h-0">
                            Demo
                        </button>
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

export const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const featuredItems = items.filter(p => [10, 1, 2].includes(p.id));
    const otherItems = items.filter(p => ![10, 1, 2].includes(p.id));

    return (
        <section className="portfolio" ref={ref}>
            <PortfolioProjectSchema projects={items} />
            <div className="progress sticky left-0 top-20 z-10 py-3">
                <div className="mx-auto max-w-4xl px-5 py-2 text-center lg:px-8">
                    <p className="space-eyebrow justify-center">Projects</p>
                    <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
                        Featured Projects
                    </h2>
                    <p className="mt-3 text-sm text-slate-400 lg:text-base">
                        A selection of projects built end to end, from design to deployment.
                    </p>
                </div>
                <motion.div
                    style={{ scaleX }}
                    className="progressBar mx-auto mt-3 h-1.5 max-w-2xl rounded-full"
                    aria-hidden="true"
                />
            </div>
            
            {/* Featured Parallax Showcases */}
            <div className="space-y-4">
                {featuredItems.map((item) => (
                    <Single item={item} key={item.id} />
                ))}
            </div>

            {/* Other Projects Grid */}
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 border-t border-white/5 mt-16">
                <h3 className="text-center font-display text-2xl font-bold text-white mb-8">
                    More Notable Projects
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {otherItems.map((item) => (
                        <ProjectCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};
