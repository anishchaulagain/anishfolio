import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div id='services' className='mb-20'>
        <div className='flex flex-col gap-2  text-center px-2 md:p-10 md:gap-3 '>
            <h2 className='text-lg md:text-xl text-[#5c7af8] font-semibold'>What I Offer?</h2>
            <h1 className='text-3xl md:text-5xl font-bold'>My Services</h1>
            
            <p className='text-md text-gray-400 leading-relaxed font-semibold md:text-xl py-3 ' >Providing top-notch front-end development and UI/UX design.</p>
             

        </div>
        <div className='p-10'>
            <ServicesCard/>
        </div>
    </div>
  )
}

export default Services