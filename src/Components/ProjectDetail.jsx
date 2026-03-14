import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaCheckCircle, FaCode, FaUsers, FaRocket } from 'react-icons/fa';
import { getProjectBySlug, projectsData } from '../data/projectsData';
import { SEO } from './SEO';
import { ProjectDetailSchema } from './StructuredData';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

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
                <section className="min-h-screen bg-neutral-900 text-neutral-300 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                        <Link to="/projects" className="text-cyan-400 hover:text-cyan-300">
                            ← Back to Projects
                        </Link>
                    </div>
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

            <section className="overflow-x-hidden text-neutral-300 selection:bg-cyan-50 selection:text-cyan-500">
                <div className="fixed top-0 -z-10 h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
                <div className="container mx-auto px-8">
                    <Navbar />
                </div>
            </section>

            <main className="bg-neutral-900 py-12 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            <FaArrowLeft /> Back to Projects
                        </Link>
                    </motion.div>
                    {/* Project Header */}
                    <header className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-4">
                                {project.category} • {project.stack}
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                {project.title}
                            </h1>
                            <p className="text-xl text-neutral-400 mb-6">{project.subtitle}</p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                                >
                                    <FaExternalLinkAlt /> View Live Demo
                                </a>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-neutral-800 border border-neutral-700 text-neutral-300 font-semibold py-3 px-6 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
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
                        className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src={project.img}
                            alt={`${project.title} - ${project.subtitle} by Abhishek Mishra`}
                            className="w-full h-auto"
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
                            className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 lg:p-8 mb-8"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-white">About This Project</h2>
                            <p className="text-neutral-300 text-lg leading-relaxed mb-4">{project.desc}</p>
                            <p className="text-neutral-400 leading-relaxed">{project.longDesc}</p>
                        </motion.section>

                        {/* Features Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 lg:p-8 mb-8"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                <FaRocket className="text-cyan-400" /> Key Features
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                                        <span className="text-neutral-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        {/* Problems Solved Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 lg:p-8 mb-8"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                <FaUsers className="text-purple-400" /> Problems Solved
                            </h2>
                            <ul className="space-y-3">
                                {project.problemsSolved.map((problem, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-purple-400 mt-1">▸</span>
                                        <span className="text-neutral-300">{problem}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        {/* Technologies Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 lg:p-8"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                <FaCode className="text-cyan-400" /> Technologies Used
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium hover:from-cyan-400/30 hover:to-purple-500/30 transition-all duration-300"
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
                        className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 lg:p-8 mb-12"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-white">Explore More</h2>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/about"
                                className="px-4 py-2 bg-neutral-700/50 hover:bg-cyan-400/20 border border-neutral-600 hover:border-cyan-400/50 rounded-lg text-neutral-300 hover:text-cyan-400 transition-all duration-300"
                            >
                                About Me
                            </Link>
                            <Link
                                to="/skills"
                                className="px-4 py-2 bg-neutral-700/50 hover:bg-cyan-400/20 border border-neutral-600 hover:border-cyan-400/50 rounded-lg text-neutral-300 hover:text-cyan-400 transition-all duration-300"
                            >
                                My Skills
                            </Link>
                            <Link
                                to="/projects"
                                className="px-4 py-2 bg-neutral-700/50 hover:bg-cyan-400/20 border border-neutral-600 hover:border-cyan-400/50 rounded-lg text-neutral-300 hover:text-cyan-400 transition-all duration-300"
                            >
                                All Projects
                            </Link>
                            <Link
                                to="/contact"
                                className="px-4 py-2 bg-neutral-700/50 hover:bg-cyan-400/20 border border-neutral-600 hover:border-cyan-400/50 rounded-lg text-neutral-300 hover:text-cyan-400 transition-all duration-300"
                            >
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
                            <h2 className="text-3xl font-bold mb-8 text-white">Related Projects</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {relatedProjects.map((relatedProject) => (
                                    <Link
                                        key={relatedProject.id}
                                        to={`/projects/${relatedProject.slug}`}
                                        className="group bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 transition-all duration-300"
                                    >
                                        <div className="w-full aspect-video overflow-hidden rounded-lg mb-4">
                                            <img
                                                src={relatedProject.img}
                                                alt={relatedProject.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                        </div>
                                        <h3 className="ml-4 text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
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

            <Footer />
        </>
    );
};
