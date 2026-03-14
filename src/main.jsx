import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import "./index.css"
import { preventAutoScroll, scrollToTop } from './utils/scrollUtils.js'

// Component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent auto-scroll on mobile, only scroll on desktop if needed
    if (window.innerWidth >= 768) {
      scrollToTop(true);
    } else {
      // On mobile, prevent auto-scroll but allow manual scroll
      preventAutoScroll();
    }
  }, [pathname]);

  return null;
};

const AppWithRouter = () => {
  useEffect(() => {
    // Initialize scroll restoration prevention
    preventAutoScroll();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AppWithRouter />
    </HelmetProvider>
  </React.StrictMode>,
)
