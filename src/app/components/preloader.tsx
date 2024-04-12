'use client';

import Link from "next/link";
import { useEffect } from "react";
import { motion, useAnimate, AnimatePresence } from 'framer-motion';
import Navigator from "./nav";

interface PreloaderProps {
    lang: string;
}


export default function Preloader() {
    const [scope, animate] = useAnimate();

    async function myAnimation() {
        animate("#nav", { display: "none", clipPath: 'inset(0 100% 0 0)' });
        await animate(scope.current, { scale: 8, position: "absolute", placeSelf: "center" });
        await animate(scope.current, { scale: 1, left: 0, top: 0, position: "fixed" }, { duration: 1.5, delay: 1.5 });
        await animate(scope.current, { width: '100%', background:"#FFFFFF" });
        animate("#nav", { display: "unset", clipPath: 'inset(0 0 0 0)' }, {
        });

        const contentElement = document.getElementById("content");
        if (contentElement) {
            contentElement.style.display = "unset";
        }
    }

    useEffect(() => {
        myAnimation();
        
    }, []);

    return (
        <AnimatePresence>
            <motion.header ref={scope} className='p-3' key='header' exit={{}}>
                <Link href={"/"}>
                    <motion.img
                        src='logo2.svg'
                        className='h-16'
                        initial={{ clipPath: 'inset(50% 0 50% 0)' }}
                        animate={{ clipPath: 'inset(0 0 0 0)' }}
                        transition={{ duration: 1.5, transitionEnd: { clipPath: "none" } }}
                        whileHover={{ scale: 1.2 }}
                    />
                </Link>
                <motion.div id="nav" className="hidden">
                    <Navigator />
                </motion.div>
            </motion.header>
        </AnimatePresence>

    );
};

