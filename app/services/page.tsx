'use client';

import React from 'react';
import { Code, Cloud, Smartphone, Eye, PenTool } from 'lucide-react';
import Testimonial from '../_components/services/Testimonial';
import { motion } from 'framer-motion';
import TechnologyStack from '../_components/services/TechnologyStack';
import CTA from '../_components/services/CTA';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Full-stack web development using modern frameworks like React, Next.js, and Django.',
            icon: <Code className="w-12 h-12 text-[#5c7af8]" />,
        },
        {
            id: 2,
            title: 'UI/UX Design',
            description: 'Creating intuitive, user-friendly interfaces with tools like Figma and Adobe XD.',
            icon: <PenTool className="w-12 h-12 text-[#5c7af8]" />,
        },
        {
            id: 3,
            title: 'AI Solutions',
            description: 'Leveraging machine learning for solutions like image colorization, content generation, and more.',
            icon: <Eye className="w-12 h-12 text-[#5c7af8]" />,
        },
        {
            id: 4,
            title: 'Cloud Solutions',
            description: 'Expertise in AWS services for scalable cloud architectures.',
            icon: <Cloud className="w-12 h-12 text-[#5c7af8]" />,
        },
        {
            id: 5,
            title: 'Mobile App Development',
            description: 'Developing responsive and cross-platform apps using React Native.',
            icon: <Smartphone className="w-12 h-12 text-[#5c7af8]" />,
        },
    ];

    return (
        <section id="services" className="py-32 mt-10 md:mt-20 bg-gray-50">
              <motion.div
      className="animated-div"
      initial={{ opacity: 0, x: -100 }} // Starting state
      animate={{ opacity: 1, x: 0 }}  // End state
      transition={{
        duration: 0.5, // Animation duration
        ease: "easeInOut", // Easing function
      }}>
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">My Services</h2>
                    <p className="text-gray-600 mt-4">
                        I provide a wide range of services to turn your ideas into reality with creativity and precision.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group cursor-pointer rounded-lg shadow-lg bg-white p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#5c7af8]">
                                {service.title}
                            </h3>
                            <p className="mt-3 text-sm text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='pt-10'>
                <TechnologyStack/>
                    <Testimonial />
                    
                    
                </div>

                <div className="mt-12 text-center">
                <CTA/>
                </div>
            </div>
            </motion.div>
        </section>
    );
};

export default Services;
