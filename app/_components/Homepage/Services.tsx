'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <motion.div
      id="services"
      className="mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col gap-2 text-center px-2 md:p-10 md:gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-lg md:text-xl text-[#5c7af8] font-semibold"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          What I Offer?
        </motion.h2>
        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h1>
        <motion.p
          className="text-md text-gray-400 leading-relaxed font-semibold md:text-xl py-3"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Providing top-notch front-end development and UI/UX design.
        </motion.p>
      </motion.div>

      <motion.div
        className="p-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <ServicesCard />
      </motion.div>
    </motion.div>
  )
}

export default Services
