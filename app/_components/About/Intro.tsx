'use client'
import Image from 'next/image'
import React from 'react'
    import {motion} from 'framer-motion'

const Intro = () => {
    return (
        <section  className='my-20'>
             <motion.div
      className="animated-div"
      initial={{ opacity: 0, x: -100 }} // Starting state
      animate={{ opacity: 1, x: 0 }}  // End state
      transition={{
        duration: 0.5, // Animation duration
        ease: "easeInOut", // Easing function
      }}
    >
            <div className="mx-auto max-w-screen-xl px-4 py-24 md:py-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                About Me!
                            </h2>

                            <p className="mt-4 text-gray-500 leading-relaxed text-md">
                                Hi there! 👋 I’m Anish Chaulagain, a passionate and dedicated Software Engineer, UI/UX Designer, AI Enthusiast with a knack for creating innovative solutions that blend creativity and functionality.
                                I’m currently in my final year of Computer Engineering at the Institute of Engineering, where I’ve honed my skills in front-end development, backend systems, and machine learning.
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <Image
                            src="/profile.png"
                            className="rounded" width={300} height={300}
                            alt="profile"
                        />
                    </div>
                </div>
            </div>
            </motion.div>
        </section>
    )
}

export default Intro