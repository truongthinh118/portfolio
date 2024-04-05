'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import LanguageMenu from "./languagemenu";


export default function Preloader() {

    const toggleContent = () => {
        console.log('complete')
        const nav = document.getElementById("nav");
        if (nav) {
            nav.classList.remove("hidden");
        }
        const content = document.getElementById("content");
        if (content) {
            content.classList.remove("hidden");
        }
    };


    return (
        <motion.header
            className='p-3 w-full'
            initial={{ position: 'absolute', top: '47%', left: '47%' }}
            animate={{ top: 0, left: 0, position: "fixed" }}
            transition={{ duration: 1.5, delay: 1.5 }}
            onAnimationComplete={toggleContent}
        >
            <Link href={"/"}>
                <motion.div
                    initial={{ scale: 5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}>
                    <motion.img
                        src='logo.svg'
                        className='h-20'
                        initial={{ clipPath: 'inset(50% 0 50% 0)' }}
                        animate={{ clipPath: 'inset(0 0 0 0)' }}
                        transition={{ duration: 1.5, transitionEnd: { clipPath: "none" } }}
                        whileHover={{ scale: 1.2 }}
                    />
                </motion.div>
            </Link>
            <motion.div id='nav' className="hidden"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0 0 0)', transitionEnd: { clipPath: "none" } }}
                transition={{ duration: 1.5, delay: 3 }}
            >

                <div className="flex justify-between gap-6 text-xl center">
                    <Link href={"/information"} className=" hover:text-[#50577A]">
                        Information
                    </Link>
                    <Link href={"/projects"} className=" hover:text-[#50577A]">
                        Projects
                    </Link>
                    <Link href={"/contact"} className=" hover:text-[#50577A]">
                        Contact
                    </Link>

                    <LanguageMenu />

                </div>
            </motion.div>

        </motion.header>
    );
};

