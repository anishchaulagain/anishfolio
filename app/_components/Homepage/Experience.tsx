'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
    return (
        <section className="bg-white md:py-32 pb-32">
            <motion.div
                className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 md:py-16 lg:px-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.7,
                    ease: 'easeInOut',
                }}
                viewport={{ once: true }}
            >
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted for exceptional expertise.</h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                        Join the ranks of esteemed partners who have placed their trust in my expertise.
                    </p>
                </div>

                <motion.div
                    className="mt-8 sm:mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.7,
                        ease: 'easeInOut',
                    }}
                    viewport={{ once: true }}
                >
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <motion.div
                            className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut',
                            }}
                            viewport={{ once: true }}
                        >
                            <dt className="order-last text-lg font-medium text-gray-500">Experience</dt>
                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">3 Years</dd>
                        </motion.div>

                        <motion.div
                            className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.5,
                                ease: 'easeInOut',
                            }}
                            viewport={{ once: true }}
                        >
                            <dt className="order-last text-lg font-medium text-gray-500">Projects</dt>
                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">20+</dd>
                        </motion.div>

                        <motion.div
                            className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.5,
                                ease: 'easeInOut',
                            }}
                            viewport={{ once: true }}
                        >
                            <dt className="order-last text-lg font-medium text-gray-500">Satisfied Clients</dt>
                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">10+</dd>
                        </motion.div>
                    </dl>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Experience
