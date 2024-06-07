import React from 'react'

import Image from 'next/image'
import TypedAnimation from './TypedAnimation'




const Hero = () => {
  return (
    
    <section >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <div className='flex flex-col justify-center'>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Hi! I'm Anish.

            </h1>
            <h1 className="font-extrabold text-[#5c7af8] sm:block text-xl sm:text-3xl mt-4"> <TypedAnimation /></h1>
          </div>
          <p className="mt-4 sm:text-xl/relaxed font-semibold">
            Crafting digital dreams into stunning realities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-[#5c7af8] px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Download CV
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-white bg-black shadow  focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/contact"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero