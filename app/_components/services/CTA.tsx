'use client';
import Link from 'next/link';
import React from 'react';

const CallToAction = () => {
    return (
        <section className="bg-[#f9fafb] py-12 md:py-20 mt-20 ">
            <div className="container mx-auto px-6 lg:px-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Looking for a solution? Let's work together!
                </h2>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    I specialize in delivering innovative solutions tailored to your needs. Whether you're looking for a new project, guidance, or a creative partner, I'm here to help.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link
                        href="mailto:anishchaulagain2058@gmail.com"
                        className="bg-[#5c7af8] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-[#4a63d6] transition duration-300"
                    >
                        Get in Touch
                    </Link>
                    <Link
                        href="/projects"
                        className="bg-transparent border-2 border-[#5c7af8] text-[#5c7af8] px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-[#5c7af8] hover:text-white transition duration-300"
                    >
                        View My Work
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
