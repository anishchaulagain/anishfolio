'use client'

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const About = () => {
    const ref = useRef(null); // Create a ref for the section
    const isInView = useInView(ref, { once: true, margin: '-50px 0px' }); // Detect when in view

    return (
        <section className="bg-white pb-10 mb-10" id="about" ref={ref}>
            <motion.div
                className="animated-div"
                initial={{ opacity: 0, x: -100 }} // Starting state (hidden and below)
                animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate only when in view
                transition={{
                    duration: 1, // Animation duration
                    ease: 'easeInOut', // Easing function
                }}
            >
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-gray-900">
                            About Me.
                        </h2>
                        <p className="mb-4">
                            Hello! I'm Anish Chaulagain, currently studying Computer
                            Engineering at the Institute of Engineering, TU. I am passionate
                            about full-stack development and hold Google certifications in
                            Foundations of Project Management and UX Design.
                        </p>
                        <p>
                            Additionally, I excel in graphic design and UI/UX design,
                            enabling me to create engaging and user-friendly digital
                            experiences.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <Image
                            className="w-full rounded-lg"
                            src="https://res.cloudinary.com/dv9s1kiz2/image/upload/v1745498075/Portfolio/pp_za6eja.jpg"
                            height={550}
                            width={550}
                            alt="office content 1"
                        />
                        <Image
                            className="mt-4 w-full lg:mt-10 rounded-lg"
                            src="https://res.cloudinary.com/dv9s1kiz2/image/upload/v1745498075/Portfolio/pp1_gypa2s.jpg"
                            alt="office content 2"
                            height={550}
                            width={550}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
