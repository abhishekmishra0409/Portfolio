import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from './SEO';

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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-800 text-neutral-300 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-9xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring my portfolio.
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Go to Homepage
          </Link>
        </motion.div>
      </div>
    </>
  );
};
