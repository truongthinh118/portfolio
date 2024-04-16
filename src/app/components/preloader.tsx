'use client';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    function showContent() {
        setIsVisible(false);
        const contentElement = document.getElementById("app-container");
        if (contentElement) {
            contentElement.classList.remove("hidden");
        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="preloader"
                    key="preloader"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, transitionEnd: { display: "none" } }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    onAnimationComplete={() => showContent()}
                >
                    <motion.img
                        src='logo.svg'
                        className='h-3/4'
                        initial={{ clipPath: 'inset(50% 0 50% 0)' }}
                        animate={{ clipPath: 'inset(0)' }}
                        transition={{ duration: 1.5 }}
                        exit={{ clipPath: 'none' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>

    );
};

