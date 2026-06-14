import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import "./app.scss"
import { Navbar } from "./Components/Navbar.jsx";
import { First } from "./Components/First.jsx";
import { About } from "./Components/About.jsx";
import { CosmicBackdrop } from "./Components/CosmicBackdrop.jsx";
import { SEO } from "./Components/SEO.jsx";
import { PersonSchema, WebsiteSchema } from "./Components/StructuredData.jsx";
import { scrollToElement, scrollToTop } from "./utils/scrollUtils.js";

// Lazy-load below-fold sections — keeps initial JS bundle small
const AboutTimeline = lazy(() => import("./Components/AboutTimeline.jsx").then(m => ({ default: m.AboutTimeline })));
const Technology    = lazy(() => import("./Components/Technology.jsx").then(m => ({ default: m.Technology })));
const Portfolio     = lazy(() => import("./Components/Portfolio.jsx").then(m => ({ default: m.Portfolio })));
const Contact       = lazy(() => import("./Components/Contact.jsx").then(m => ({ default: m.Contact })));
const NotFound      = lazy(() => import("./Components/NotFound.jsx").then(m => ({ default: m.NotFound })));
const ProjectDetail = lazy(() => import("./Components/ProjectDetail.jsx").then(m => ({ default: m.ProjectDetail })));
const Footer        = lazy(() => import("./Components/Footer.jsx").then(m => ({ default: m.Footer })));

// Minimal fallback — invisible, same bg colour so there's no flash
const SectionFallback = () => <div aria-hidden="true" className="min-h-[8rem]" />;

const pageShellClass = "app-shell site-shell relative min-h-screen overflow-x-hidden text-slate-100";
const pageContainerClass = "relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

const PageFrame = ({ children, contentClassName = "pb-16 pt-24 sm:pt-28 lg:pb-24 lg:pt-32" }) => (
    <>
        <div className={pageShellClass}>
            <CosmicBackdrop />
            <Navbar />
            <main className={`${pageContainerClass} ${contentClassName}`}>
                {children}
            </main>
        </div>
        <Suspense fallback={null}>
            <Footer />
        </Suspense>
    </>
);

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        const sectionMap = {
            "/about": "about",
            "/experience": "experience",
            "/skills": "skills",
            "/projects": "projects",
            "/contact": "contact"
        };
        const id = sectionMap[location.pathname];
        if (id) {
            setTimeout(() => scrollToElement(id, 80), 100);
        } else if (location.pathname === "/" && !window.location.hash) {
            scrollToTop(true);
        }
    }, [location.pathname]);

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
            <PageFrame contentClassName="space-y-16 pb-16 pt-24 sm:space-y-24 sm:pt-28 lg:space-y-32 lg:pb-24 lg:pt-32">
                <div id="home"><First /></div>
                <div id="about"><About /></div>
                <Suspense fallback={<SectionFallback />}>
                    <div id="timeline"><AboutTimeline /></div>
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <div id="skills"><Technology /></div>
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <div id="projects"><Portfolio /></div>
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <div id="contact"><Contact /></div>
                </Suspense>
            </PageFrame>
        </>
    );
};

const App = () => (
    <div className="app">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/experience" element={<HomePage />} />
            <Route path="/skills" element={<HomePage />} />
            <Route path="/projects" element={<HomePage />} />
            <Route path="/projects/:slug" element={
                <Suspense fallback={<SectionFallback />}>
                    <ProjectDetail />
                </Suspense>
            } />
            <Route path="/contact" element={<HomePage />} />
            <Route path="*" element={
                <Suspense fallback={null}>
                    <NotFound />
                </Suspense>
            } />
        </Routes>
    </div>
);

export default App;

