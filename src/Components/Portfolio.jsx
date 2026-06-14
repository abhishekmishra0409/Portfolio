import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PortfolioProjectSchema } from "./StructuredData.jsx";
import { projectsData } from "../data/projectsData.js";

const items = projectsData;

const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const handler = (e) => setIsDesktop(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);
    return isDesktop;
};

const Single = ({ item }) => {
    const ref = useRef();
    const isDesktop = useIsDesktop();
    const { scrollYProgress } = useScroll({ target: ref });
    const yTransform = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const y = useTransform(yTransform, (latest) => isDesktop ? latest : 0);

    return (
        <article
            className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 py-8 sm:gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 lg:px-8 lg:py-16 xl:gap-16"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            {/* Project image */}
            <div className="group w-full min-w-0 max-w-lg justify-self-center lg:max-w-none" ref={ref}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl lg:rounded-[1.75rem]">
                    <div className="absolute inset-0 z-10 bg-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <img
                        className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105 lg:aspect-auto lg:h-full"
                        src={item.img}
                        alt={`${item.title} project by Abhishek Mishra`}
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="600"
                        itemProp="image"
                    />
                </div>
            </div>

            {/* Project details card */}
            <motion.div
                className="flex min-w-0 flex-col"
                style={{ y }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="surface-card w-full rounded-2xl p-5 sm:p-6 lg:rounded-[1.75rem] lg:p-8">
                    {/* Title */}
                    <Link to={`/projects/${item.slug}`}>
                        <h2
                            className="mb-2 cursor-pointer font-display text-xl font-semibold text-gradient transition-colors sm:text-2xl lg:text-3xl"
                            itemProp="name"
                        >
                            {item.title}
                        </h2>
                    </Link>

                    {/* Subtitle */}
                    {item.subtitle && (
                        <p className="mb-3 text-[0.68rem] font-bold tracking-[0.16em] uppercase text-blue-400/80">
                            {item.subtitle}
                        </p>
                    )}

                    {/* Description — left aligned, clamped to 3 lines on mobile */}
                    <p
                        className="mb-4 text-sm leading-relaxed text-slate-300 line-clamp-3 sm:line-clamp-none lg:text-base"
                        itemProp="description"
                    >
                        {item.desc}
                    </p>

                    {/* Tech pills */}
                    <div className="mb-5 flex flex-wrap gap-1.5">
                        {item.tech.map((tech, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.06 }}
                                className="rounded-full border border-blue-400/15 bg-blue-400/8 px-2.5 py-1 text-[0.7rem] font-medium text-blue-200/90 transition-all duration-200 hover:bg-blue-400/12"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                        <Link to={`/projects/${item.slug}`} className="flex-1 sm:flex-none">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
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
                                className="flex-1 sm:flex-none"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
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
            
            {/* Featured Showcases */}
            <div className="divide-y divide-white/[0.06]">
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
