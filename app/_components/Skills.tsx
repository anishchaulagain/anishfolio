import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'


const SkillsTypes = [
    {
        id: 1,
        url : "/science.png",
        name: 'ReactJs'
    },
    {
        id: 2,
        url : "/js.png",
        name: 'Javascript'
    },
    {
        id: 3,
        url : "/nodejs.png",
        name: 'NodeJs'
    },
    {
        id: 4,
        url : "/figma.png",
        name: 'Figma'
    },
    {
        id: 5,
        url : "/photoshop.png",
        name: 'Photoshop'
    },
    {
        id: 6,
        url : "/mysql.png",
        name: 'MySQL'
    },
    {
        id: 7,
        url : "/python.png",
        name: 'Python'
    },
    {
        id: 8,
        url : "/typescript.png",
        name: 'Typescript'
    },
]

const Skills = () => {

  return (
  
     <section className='bg-[#f8f9ff] pt-10 mb-20 pb-10' id='skills'>
        <div className='text-center fontbold mt-10'>

        <h1 className='text-center text-3xl md:text-5xl font-bold'>My Skills</h1>
        <p className='text-md text-gray-400 leading-relaxed font-semibold md:text-xl py-3 mt-5'>Dedicated to Delivering High-Quality, User-Centric Web Experiences</p>
        </div>
    <div className='container mx-auto p-4'>

        

    <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-10 lg:gap-y-16  cursor-pointer mt-10'>
    {SkillsTypes.map((item, index) => (
            <div className="relative flex flex-col text-gray-700 items-center bg-white shadow-md bg-clip-border rounded-xl  hover:bg-[#5c7af8] hover:text-white">
             <Image src={item.url} height={100} width={100} alt='' className='pt-10'/>
           <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-xl sm:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ">
                {item.name}
            </h4>
            </div>
       </div>
    ))}
    
   

    </div>
    </div>
    </section>
  )
}

export default Skills