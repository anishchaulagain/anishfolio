'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const WhatsNext = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <motion.div
            className="mt-20 mb-10 py-10 flex flex-col items-center max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
        >
            <motion.h1
                className="font-bold text-2xl md:text-4xl"
                variants={childVariants}
            >
                What's Next?
            </motion.h1>

            <motion.p
                className="mt-5 text-gray-700 leading-relaxed text-center"
                variants={childVariants}
            >
                I'm actively seeking opportunities to contribute to exciting projects as a
                UI/UX Developer or Full-Stack Engineer.
            </motion.p>

            <motion.p
                className="mt-2 text-gray-700 leading-relaxed text-center"
                variants={childVariants}
            >
                Let's connect and create something amazing together!
            </motion.p>

            <motion.div
                className="mt-5 flex items-center justify-center gap-4"
                variants={childVariants}
            >
                <Link href="mailto:anishchaulagain2058@gmail.com">
                    <button className="px-4 py-2 bg-[#5c7af8] border rounded-lg font-bold  text-white hover:bg-blue-700 transition">
                        Contact Now
                    </button>
                </Link>
                <Link href="/projects">
                    <button className="px-4 py-2  text-black border rounded-lg font-bold  transition">
                        View Projects
                    </button>
                </Link>
            </motion.div>

            <motion.div
                className="mt-10  flex-col hidden md:flex items-center space-y-4 text-gray-600"
                variants={childVariants}
            >
                <p>
                    🌟 <span className="font-bold">Passion:</span> Crafting intuitive and beautiful user experiences.
                </p>
                <p>
                    💻 <span className="font-bold">Expertise:</span> Modern UI frameworks, responsive designs, and full-stack development.
                </p>
                <p>
                    🚀 <span className="font-bold">Goal:</span> Building impactful solutions that delight users.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default WhatsNext;
