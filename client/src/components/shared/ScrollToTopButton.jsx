import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.25 }}
                    onClick={scrollToTop}
                    aria-label="Volver arriba"
                    className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-surface rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-colors shadow-lg cursor-pointer"
                >
                    <FaArrowUp />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
