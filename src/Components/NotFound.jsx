import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEO } from "./SEO";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { CosmicBackdrop } from "./CosmicBackdrop.jsx";
import { TbMeteor } from "react-icons/tb";

/**
 * Custom 404 Not Found Page
 * Provides a user-friendly error page with navigation back to home
 */
export const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to Abhishek Mishra's portfolio homepage."
        canonical="https://abmishra.dev/404"
      />
      <div className="site-shell theme-void relative min-h-screen overflow-x-hidden text-slate-100">
        <CosmicBackdrop />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
          <Navbar />
        </div>
        <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="surface-card mx-auto mt-12 max-w-2xl rounded-[2rem] px-6 py-12 text-center sm:mt-16 sm:px-10"
          >
            <p className="space-eyebrow justify-center">Signal Lost · Deep Void</p>
            <div className="mt-6 flex justify-center">
              <TbMeteor className="h-16 w-16 text-rose-300/90 cosmic-icon-glow sm:h-20 sm:w-20" aria-hidden />
            </div>
            <h1 className="font-display mt-4 text-8xl font-bold text-gradient sm:text-9xl">
              404
            </h1>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Page Not Found</h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-8 text-slate-300 sm:text-lg">
              This coordinate isn&apos;t on the chart. Plot a course back to the main station.
            </p>
            <Link to="/" className="button-primary mt-8 inline-flex">
              Go to Homepage
            </Link>
          </motion.div>
        </main>
        <Footer themeClass="theme-void" />
      </div>
    </>
  );
};
