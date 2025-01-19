'use client'
import { motion } from 'framer-motion'
import React from 'react'

const progressData = [
    { language: 'Javascript', progress: 80 },
    { language: 'ReactJs', progress: 75 },
    { language: 'UI/UX', progress: 90 },
    { language: 'Express.Js', progress: 60 },
    { language: 'Python', progress: 65 },
];

const ProgressBar = ({ language, progress }: any) => {
    return (
        <div className="mb-6 ">

            <div className="md:w-1/2 w-full bg-gray-200 rounded-full h-4 mt-2 ">
                <div
                    className="h-full rounded-full bg-indigo-600 transition-all"
                    style={{ width: `${progress}%` }}
                    aria-labelledby={language}
                    aria-valuenow={progress}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                ></div>
            </div>
        </div>
    );
};



const WhatIdo = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };
    return (
        <div className='mt-10 md:mt-20 text-center p-2'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={textVariants}
            >

                <h1 className='font-bold text-2xl md:text-4xl'>Skills & Tools?</h1>

                <p className=' md:mt-2 text-gray-700 text-center text-lg p-4'>With a strong foundation in programming and design, I specialize in:</p>
                <div className="max-w-7xl mx-auto p-4 mt-10 ">
                    {progressData.map((item) => (

                        <div>
                            <div className='flex items-center justify-between w-1/2 '>
                                <h2 className='font-bold text-lg md:text-xl text-start'>{item.language}</h2>
                                <h2 className='font-bold text-lg md:text-xl text-start'>{item.progress}%</h2>
                            </div>

                            <ProgressBar
                                key={item.language}
                                language={item.language}
                                progress={item.progress}
                            />
                        </div>

                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default WhatIdo