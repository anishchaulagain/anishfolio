'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const SkillsTypes = [
  { id: 1, url: '/science.png', name: 'ReactJs' },
  { id: 2, url: '/js.png', name: 'Javascript' },
  { id: 3, url: '/nodejs.png', name: 'NodeJs' },
  { id: 4, url: '/figma.png', name: 'Figma' },
  { id: 5, url: '/photoshop.png', name: 'Photoshop' },
  { id: 6, url: '/mysql.png', name: 'MySQL' },
  { id: 7, url: '/python.png', name: 'Python' },
  { id: 8, url: '/typescript.png', name: 'Typescript' },
]

const Skills = () => {
  return (
    <section className="bg-[#f8f9ff] pt-10 pb-20 mb-20 " id="skills">
      <motion.div
        className="text-center font-bold mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <h1 className="text-center text-3xl md:text-5xl font-bold">My Skills</h1>
        <p className="text-md text-gray-400 leading-relaxed font-semibold md:text-xl py-3 mt-5">
          Dedicated to Delivering High-Quality, User-Centric Web Experiences
        </p>
      </motion.div>

      <div className="container mx-auto p-4">
        <motion.div
          className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-10 lg:gap-y-16 cursor-pointer mt-10"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delayChildren: 0.2, staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {SkillsTypes.map((item) => (
            <motion.div
              key={item.id}
              className="relative flex flex-col items-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl hover:bg-[#5c7af8] hover:text-white transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                src={item.url}
                height={100}
                width={100}
                alt={item.name}
                className="pt-10"
              />
              <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-xl sm:text-2xl font-semibold leading-snug tracking-normal">
                  {item.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
