'use client';
import { motion } from 'framer-motion';
import { CircleArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MyJourney = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: 'easeInOut' },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <div className="my-10 pt-20 md:my-20 flex flex-col items-center max-w-7xl mx-auto">
            <div className="flex flex-col items-center">
                <motion.h1
                    className="font-bold text-2xl md:text-4xl text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                >
                    My Journey: From Curiosity to Expertise
                </motion.h1>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-5 md:mt-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={imageVariants}
                    >
                        <div className="max-w-lg md:max-w-none">
                            <Image
                                src={
                                    'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737118994/Portfolio/journey_bh4c15.png'
                                }
                                className="hidden md:block"
                                height={350}
                                width={350}
                                alt="growth graph"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex justify-center lg:col-span-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={textVariants}
                    >
                        <div className="p-4">
                            <p className=" text-gray-500 leading-relaxed">
                                My journey into tech began in 2019 with a simple "Hello, World!"
                                program in C, sparking my passion for problem-solving and
                                building functional solutions. I ventured into web development,
                                mastering HTML, CSS, and JavaScript, and later advanced to modern
                                frameworks like React.js and Next.js. Exploring full-stack
                                development with the MERN stack enabled me to create complete
                                applications. Along the way, I earned certifications like AWS
                                Cloud Foundations, Meta Django Development, etc. A Bachelor's in
                                Computer Engineering from the Institute of Engineering further
                                honed my skills, reflected in projects like an AI-powered Resume
                                Analyzer and Grayscale Image Colorization.
                            </p>
                            <div className="my-7">
                                <Link href="/certifications">
                                    <div className="flex items-center gap-3 text-blue-600 justify-center sm:justify-start">
                                        <h1 className="cursor-pointer underline font-bold">
                                            View My Certifications
                                        </h1>
                                        <CircleArrowRightIcon />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MyJourney;
