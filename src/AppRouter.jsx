import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App.jsx";
import { preventAutoScroll, scrollToTop } from "./utils/scrollUtils.js";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (window.innerWidth >= 768) {
            scrollToTop(true);
            return;
        }

        preventAutoScroll();
    }, [pathname]);

    return null;
};

const AppWithRouter = () => {
    useEffect(() => {
        preventAutoScroll();
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    );
};

export default AppWithRouter;
