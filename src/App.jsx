import { Routes, Route } from 'react-router-dom';
import "./app.scss"
import { Navbar } from "./Components/Navbar.jsx";
import { First } from "./Components/First.jsx";
import { About } from "./Components/About.jsx";
import { Experience } from "./Components/Experience.jsx";
import { Technology } from "./Components/Technology.jsx";
import { Portfolio } from "./Components/Portfolio.jsx";
import { Contact } from "./Components/Contact.jsx";
import { NotFound } from "./Components/NotFound.jsx";
import { ProjectDetail } from "./Components/ProjectDetail.jsx";
import { Footer } from "./Components/Footer.jsx";
import { SEO } from "./Components/SEO.jsx";
import { PersonSchema, WebsiteSchema } from "./Components/StructuredData.jsx";

/**
 * Home Page Component
 * Main landing page with hero section
 */
const HomePage = () => {
    return (
        <>
            <SEO
                title="Abhishek Mishra - Full Stack Developer | MERN Developer | React Developer"
                description="Abhishek Mishra is a Full Stack Developer specializing in MERN stack (MongoDB, Express, React, Node.js), React, Angular, and modern web technologies. View portfolio projects and get in touch."
                keywords="Abhishek Mishra, Full Stack Developer, MERN Developer, React Developer, Node.js Developer, abmishra.dev, Web Developer, Software Engineer, Portfolio, React, Node.js, MongoDB"
                canonical="https://abmishra.dev/"
            />
            <PersonSchema />
            <WebsiteSchema />
            <section className={"overflow-x-hidden text-neutral-300 selection:bg-cyan-50 selection:text-cyan-500"}>
                <div className="fixed top-0 -z-10 h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
                <div className={"container mx-auto px-8"}>
                    <Navbar />
                    <First />
                </div>
            </section>
            <Footer />
        </>
    );
};

/**
 * About Page Component
 */
const AboutPage = () => {
    return (
        <>
            <SEO
                title="About - Abhishek Mishra | Full Stack Developer"
                description="Learn about Abhishek Mishra, a Full Stack Developer passionate about building dynamic web applications. Expertise in React, Node.js, MongoDB, and modern web technologies."
                keywords="Abhishek Mishra, About, Full Stack Developer, MERN Developer, React Developer, Web Developer, Software Engineer"
                canonical="https://abmishra.dev/about"
            />
            <section className={"overflow-x-hidden text-neutral-300 selection:bg-cyan-50 selection:text-cyan-500"}>
                <div className="fixed top-0 -z-10 h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
                <div className={"container mx-auto px-8"}>
                    <Navbar />
                </div>
            </section>
            <section className="bg-neutral-900">
                <div className="container mx-auto px-8">
                    <About />
                </div>
            </section>
            <section className="bg-neutral-900">
                <div className="container mx-auto px-8">
                    <Experience />
                </div>
            </section>
            <Footer />
        </>
    );
};

/**
 * Experience Page Component
 */
const ExperiencePage = () => {
    return (
        <>
            <SEO
                title="Experience - Abhishek Mishra | Software Developer at BestPeers"
                description="Abhishek Mishra's professional experience as Software/Web Developer at BestPeers Infosystem, Team Leader at ADM, and freelance developer. Building scalable web applications."
                keywords="Abhishek Mishra, Experience, BestPeers Infosystem, Software Developer, Web Developer, Team Leader, ADM, Freelance Developer"
                canonical="https://abmishra.dev/experience"
            />
            <section className={"overflow-x-hidden text-neutral-300 selection:bg-cyan-50 selection:text-cyan-500"}>
                <div className="fixed top-0 -z-10 h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
                <div className={"container mx-auto px-8"}>
                    <Navbar />
                </div>
            </section>
            <section className="bg-neutral-900 ">
                <div className="container mx-auto px-8">
                    <Experience />
                </div>
            </section>
            <Footer />
        </>
    );
};

/**
 * Skills Page Component
 */
const SkillsPage = () => {
    return (
        <>
            <SEO
                title="Skills & Technologies - Abhishek Mishra | MERN Stack Developer"
                description="Abhishek Mishra's technical skills include React, Node.js, MongoDB, Express.js, Angular, Next.js, TypeScript, and more. Full Stack Developer with expertise in modern web technologies."
                keywords="Abhishek Mishra, Skills, Technologies, React, Node.js, MongoDB, Express, Angular, Next.js, TypeScript, MERN Stack, Full Stack Developer"
                canonical="https://abmishra.dev/skills"
            />
            <section className={"overflow-x-hidden text-neutral-300 selection:bg-cyan-50 selection:text-cyan-500"}>
                <div className="fixed top-0 -z-10 h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
                <div className={"container mx-auto px-8"}>
                    <Navbar />
                </div>
            </section>
            <section className="bg-neutral-900 py-2">
                <div className="container mx-auto px-8">
                    <Technology />
                </div>
            </section>
            <Footer />
        </>
    );
};

/**
 * Projects Page Component
 */
const ProjectsPage = () => {
    return (
        <>
            <SEO
                title="Projects - Abhishek Mishra | Portfolio Projects"
                description="View Abhishek Mishra's portfolio projects including VirtualCart, MedGo, Chat Application, Job Portal, and more. Full Stack Developer showcasing MERN stack projects."
                keywords="Abhishek Mishra, Projects, Portfolio, VirtualCart, MedGo, Chat App, Job Portal, MERN Stack Projects, React Projects, Full Stack Projects"
                canonical="https://abmishra.dev/projects"
            />
            <section className={"overflow-x-hidden text-neutral-300 selection:bg-cyan-50 selection:text-cyan-500"}>
                <div className="fixed top-0 -z-10 h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
                <div className={"container mx-auto px-8"}>
                    <Navbar />
                </div>
            </section>
            <section className="bg-neutral-900 ">
                <div className="container mx-auto px-8">
                    <Portfolio />
                </div>
            </section>
            <Footer />
        </>
    );
};

/**
 * Contact Page Component
 */
const ContactPage = () => {
    return (
        <>
            <SEO
                title="Contact - Abhishek Mishra | Get In Touch"
                description="Contact Abhishek Mishra, Full Stack Developer, for collaboration opportunities, project inquiries, or professional connections. Available for freelance and full-time positions."
                keywords="Abhishek Mishra, Contact, Get In Touch, Full Stack Developer, Hire Developer, Freelance Developer, React Developer"
                canonical="https://abmishra.dev/contact"
            />
            <section className={"overflow-x-hidden text-neutral-300 selection:bg-cyan-50 selection:text-cyan-500"}>
                <div className="fixed top-0 -z-10 h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
                <div className={"container mx-auto px-8"}>
                    <Navbar />
                </div>
            </section>
            <section id="contactSection" className="bg-neutral-900">
                <div className="container mx-auto px-8">
                    <Contact />
                </div>
            </section>
            <Footer />
        </>
    );
};

/**
 * Main App Component with Routing
 */
const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;