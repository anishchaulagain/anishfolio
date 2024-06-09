import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className="bg-white pb-10 mb-20" id='about'>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-gray-900  ">About Me.</h2>
                    <p className="mb-4">Hello! I'm Anish Chaulagain, currently studying Computer Engineering at the Institute of Engineering, TU. I am passionate about full-stack development and hold Google certifications in Foundations of Project Management and UX Design. </p>
                    <p>Additionally, I excel in graphic design and UI/UX design, enabling me to create engaging and user-friendly digital experiences.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image className="w-full rounded-lg" src="/image1.png" height={550} width={550} alt="office content 1"/>
                    <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/anish.jpg" alt="office content 2" height={550} width={550}/>
                   
                        </div>
                </div>
        </section>
    )
}

export default About