import { FacebookIcon, GithubIcon, InstagramIcon, Linkedin, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const SocialMedia = () => {
    return (

           <div className='mt-10 mb-5'>
        <div className='flex items-center justify-center gap-4 cursor-pointer sm:gap-5 md:gap-7'>
            <Link href='https://www.facebook.com/anees.chaulagai'><FacebookIcon className='hover:text-blue-500 '/></Link>
            <Link href='https://www.instagram.com/anees_chaulagain/'>< InstagramIcon  className='hover:text-blue-500 '/></Link>
            <Link href='https://github.com/anishchaulagain'><GithubIcon className='hover:text-blue-500 '/></Link>
            <Link href='https://www.facebook.com/anees.chaulagai'><Linkedin className='hover:text-blue-500 '/></Link>
           </div>
            
        </div>

    )
}

export default SocialMedia