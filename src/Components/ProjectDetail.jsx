import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
    TbArrowLeft,
    TbCircleCheck,
    TbCode,
    TbExternalLink,
    TbRocket,
    TbUsersGroup,
} from "react-icons/tb";
import { getProjectBySlug, projectsData } from "../data/projectsData";
import { SEO } from "./SEO";
import { ProjectDetailSchema } from "./StructuredData";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CosmicBackdrop } from "./CosmicBackdrop.jsx";

/**
 * Project Detail Page Component
 * SEO-optimized project detail page with semantic HTML
 */
export const ProjectDetail = () => {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <>
                <SEO
                    title="Project Not Found - Abhishek Mishra Portfolio"
                    description="The requested project could not be found."
                    canonical="https://abmishra.dev/projects"
                />
                <section className="site-shell theme-void relative min-h-screen overflow-x-hidden text-slate-100">
                    <CosmicBackdrop />
                    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
                        <Navbar />
                    </div>
                    <main className="relative z-10 mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col items-center justify-center px-4 pb-16 pt-8 sm:px-6 lg:px-8">
                        <div className="surface-card max-w-md rounded-[2rem] px-8 py-12 text-center">
                            <h1 className="font-display text-3xl font-bold text-white">Project Not Found</h1>
                            <p className="mt-3 text-slate-400">That mission isn&apos;t in the archive.</p>
                            <Link to="/projects" className="button-primary mt-8 inline-flex">
                                Back to Projects
                            </Link>
                        </div>
                    </main>
                    <Footer themeClass="theme-void" />
                </section>
            </>
        );
    }

    // Get related projects (same category or stack)
    const relatedProjects = projectsData
        .filter(p => p.id !== project.id && (p.category === project.category || p.stack === project.stack))
        .slice(0, 3);

    return (
        <>
            <SEO
                title={project.seoTitle}
                description={project.seoDescription}
                keywords={project.keywords}
                canonical={`https://abmishra.dev/projects/${project.slug}`}
            />
            <ProjectDetailSchema project={project} />

            <section className="site-shell theme-detail relative min-h-screen overflow-x-hidden text-slate-100">
                <div aria-hidden="true" className="site-backdrop" />
                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
                    <Navbar />
                </div>
            
            <main className="relative z-10 py-8 lg:py-12">
                <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            to="/projects"
                            className="button-ghost inline-flex items-center gap-2 !rounded-2xl !px-4 !py-2.5"
                        >
                            <TbArrowLeft className="text-lg" /> Back to Projects
                        </Link>
                    </motion.div>
                    {/* Project Header */}
                    <header className="surface-card mb-12 rounded-[2rem] p-6 lg:p-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <p className="space-eyebrow mb-4">Transmission · Case File</p>
                            <span className="mb-4 inline-block rounded-full border border-violet-400/25 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-100">
                                {`${project.category} | ${project.stack}`}
                            </span>
                            <h1 className="mb-4 font-display text-4xl font-bold text-gradient sm:text-5xl lg:text-6xl">
                                {project.title}
                            </h1>
                            <p className="mb-6 text-xl text-slate-300">{project.subtitle}</p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button-primary"
                                >
                                    <FaExternalLinkAlt /> View Live Demo
                                </a>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button-secondary"
                                    >
                                        <FaGithub /> View Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </header>

                    {/* Project Image */}
                    <motion.figure
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="surface-card mb-12 overflow-hidden rounded-[2rem] p-3 shadow-2xl"
                    >
                        <img
                            src={project.img}
                            alt={`${project.title} - ${project.subtitle} by Abhishek Mishra`}
                            className="h-auto w-full rounded-[1.5rem] border border-white/10"
                            loading="eager"
                            width="1200"
                            height="675"
                        />
                    </motion.figure>

                    {/* Project Description */}
                    <article className="mb-12">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="surface-card mb-8 rounded-[2rem] p-6 lg:p-8"
                        >
                            <h2 className="mb-4 font-display text-2xl font-bold text-white">About This Project</h2>
                            <p className="mb-4 text-lg leading-relaxed text-slate-300">{project.desc}</p>
                            <p className="leading-relaxed text-slate-400">{project.longDesc}</p>
                        </motion.section>

                        {/* Features Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="surface-card mb-8 rounded-[2rem] p-6 lg:p-8"
                        >
                            <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-white">
                                <TbRocket className="text-cyan-300 cosmic-icon-glow" /> Key Features
                            </h2>
                            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <TbCircleCheck className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-300" />
                                        <span className="text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        {/* Problems Solved Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="surface-card mb-8 rounded-[2rem] p-6 lg:p-8"
                        >
                            <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-white">
                                <FaUsers className="text-sky-300" /> Problems Solved
                            </h2>
                            <ul className="space-y-3">
                                {project.problemsSolved.map((problem, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="mt-1 text-cyan-300">-</span>
                                         <span className="text-slate-300">{problem}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        {/* Technologies Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="surface-card rounded-[2rem] p-6 lg:p-8"
                        >
                            <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-white">
                                <TbCode className="text-cyan-300 cosmic-icon-glow" /> Technologies Used
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-300 hover:bg-cyan-400/15"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.section>
                    </article>

                    {/* Internal Links Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="surface-card mb-12 rounded-[2rem] p-6 lg:p-8"
                    >
                        <h2 className="mb-6 font-display text-2xl font-bold text-white">Explore More</h2>
                        <div className="flex flex-wrap gap-3">
                            <Link to="/about" className="button-ghost !text-sm">
                                About Me
                            </Link>
                            <Link to="/skills" className="button-ghost !text-sm">
                                My Skills
                            </Link>
                            <Link to="/projects" className="button-ghost !text-sm">
                                All Projects
                            </Link>
                            <Link to="/contact" className="button-ghost !text-sm">
                                Contact Me
                            </Link>
                        </div>
                    </motion.section>

                    {/* Related Projects */}
                    {relatedProjects.length > 0 && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="mb-12"
                        >
                            <h2 className="mb-8 font-display text-3xl font-bold text-white">Related Projects</h2>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                                {relatedProjects.map((relatedProject) => (
                                    <Link
                                        key={relatedProject.id}
                                        to={`/projects/${relatedProject.slug}`}
                                        className="surface-card group rounded-[1.5rem] p-4 transition-all duration-300 hover:border-cyan-400/30 sm:p-6"
                                    >
                                        <div className="mb-4 aspect-video w-full overflow-hidden rounded-xl">
                                            <img
                                                src={relatedProject.img}
                                                alt={relatedProject.title}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                        <h3 className="mb-2 font-display text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
                                            {relatedProject.title}
                                        </h3>
                                        {/* <p className="text-neutral-400 text-sm">{relatedProject.subtitle}</p> */}
                                    </Link>
                                ))}
                            </div>
                        </motion.section>
                    )}
                </div>
            </main>
            </section>

            <Footer themeClass="theme-detail" />
        </>
    );
};
