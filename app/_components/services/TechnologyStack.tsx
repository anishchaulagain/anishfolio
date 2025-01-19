'use client';
import { motion } from 'framer-motion';
import React from 'react';

const SkillsTypes = [
  { id: 1, url: '/science.png', name: 'ReactJs' },
  { id: 2, url: '/js.png', name: 'Javascript' },
  { id: 3, url: '/nodejs.png', name: 'NodeJs' },
  { id: 4, url: '/figma.png', name: 'Figma' },
  { id: 5, url: '/photoshop.png', name: 'Photoshop' },
  { id: 6, url: '/mysql.png', name: 'MySQL' },
  { id: 7, url: '/python.png', name: 'Python' },
  { id: 8, url: '/typescript.png', name: 'Typescript' },
];

const TechnologyStack = () => {
    const textVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };
  return (
    <section className="py-20 mt-20 bg-gray-100">
          <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                >
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">Technology Stack</h2>
        <p className="text-gray-700 mb-8">
          Tools and technologies I work with to create outstanding projects.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {SkillsTypes.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={skill.url}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <span className="text-gray-800 font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default TechnologyStack;
