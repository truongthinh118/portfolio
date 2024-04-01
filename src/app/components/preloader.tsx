"use client";
import { motion } from 'framer-motion';

export default function Preloader() {
    return (
        <motion.div
            className='p-3'
            style={{ position: 'fixed', width: '100%', height: '100%' }}
            initial={{ position: 'absolute', top: '50%', left: '50%' }}
            animate={{ top: '0', left: '0' }}
            transition={{ delay: 1.5, duration: 1.5 }}
        >
            <motion.div
                initial={{ position: 'inherit', scale: 5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
            >
                <motion.img
                    src='logo.svg'
                    className='h-20'
                    initial={{ clipPath: 'inset(50% 0 50% 0)' }}
                    animate={{ clipPath: 'inset(0 0 0 0)' }}
                    transition={{ duration: 1.5 }}
                />
            </motion.div>
        </motion.div>
    );
};

