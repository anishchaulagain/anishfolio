'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Education = () => {
  const educationData = [
    {
      year: '2020 - 2024',
      degree: 'Bachelor of Computer Engineering',
      school: 'Institute of Engineering, Kathford International College of Engineering and Management',
      description:
        'Focused on software development, cloud computing, and artificial intelligence. Completed several academic projects, including Resume Analyzer using NLP, Grayscale to Color Image conversion using GANs etc. '
    },
    {
      year: '2018 - 2020',
      degree: 'High School - Science Stream (+2)',
      school: 'Khwopa Higher Secondary School, National Examination Board (NEB)',
      description:
        'Specialized in Physics, Chemistry, Mathematics and Computer. Achieved excellent grades and participated in science exhibitions.',
    },
  ];
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5,  ease: 'easeOut' },
    },
};
  return (
    <section className="bg-gray-100 py-20 my-20">
        <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                >
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          My Education
        </h2>

        <div className="relative border-l-4 border-[#5c7af8] pl-6 ">
          {educationData.map((item, index) => (
            <div key={index} className="mb-10">
              {/* Timeline Dot */}
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-[#5c7af8] border-4 border-white"></div>

              {/* Year */}
              <p className="text-gray-600 font-bold text-sm mb-2">{item.year}</p>

              {/* Degree */}
              <h3 className="text-xl font-semibold text-gray-800">
                {item.degree}
              </h3>

              {/* School */}
              <p className="text-gray-600 italic">{item.school}</p>

              {/* Description */}
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      </motion.h1>
    </section>
  );
};

export default Education;
