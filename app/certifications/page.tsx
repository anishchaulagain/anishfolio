'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CertificationListProps {
  id: number,
  title: string,

}


const CertificationList = [
  {
    id: 1,
    certificateNumber: 'Certificate 1',
    certificationLogo: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042235/Portfolio/awslogo_vcunwx.jpg',
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    company: 'Amazon Web Services',
    issuedDate: 'Aug 2024',
    credentialId: '4WvZaADp',
    certificateUrl: 'https://www.credly.com/go/4WvZaADp',
    certificatePicture: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737041974/Portfolio/aws_awsc7a.png'


  },
  {
    id: 2,
    certificateNumber: 'Certificate 2',
    certificationLogo: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042633/Portfolio/googlelogo_y8w8mn.jpg',
    title: "Foundations of Project Management",
    company: 'Google',
    issuedDate: 'May 2024',
    credentialId: '62ET96ECPBJP',
    certificateUrl: 'https://www.coursera.org/verify/62ET96ECPBJP',
    certificatePicture: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042006/Portfolio/foundationofpm_b4ibeg.png'


  },
  {
    id: 3,
    certificateNumber: 'Certificate 3',
    certificationLogo: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042633/Portfolio/googlelogo_y8w8mn.jpg',
    title: "Foundations of User Experience(UX) Design",
    company: 'Google',
    issuedDate: 'May 2024',
    credentialId: 'VW4ZMN5ARFFS',
    certificateUrl: 'https://www.coursera.org/verify/VW4ZMN5ARFFS',
    certificatePicture: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042017/Portfolio/foundationofux_hpjlvo.png'


  },
  {
    id: 4,
    certificateNumber: 'Certificate 4',
    certificationLogo: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737043114/Portfolio/facebook_logo_t3vzg6.jpg',
    title: "Django Web Framework",
    company: 'Meta',
    issuedDate: 'Jul 2024',
    credentialId: 'ZBDURL6UGF4J',
    certificateUrl: 'https://www.coursera.org/verify/ZBDURL6UGF4J',
    certificatePicture: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042017/Portfolio/metadjango_kuo4eh.png'


  },
  {
    id: 5,
    certificateNumber: 'Certificate 5',
    certificationLogo: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737043367/Portfolio/microsoft_logo_omnbqh.jpg',
    title: "Frontend Web Development with ReactJS and JavaScript Bootcamp",
    company: 'Microsoft',
    issuedDate: '',
    credentialId: '',
    certificateUrl: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042017/Portfolio/learnambassadorreact_d9zzuo.png',
    certificatePicture: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042017/Portfolio/learnambassadorreact_d9zzuo.png'


  },
  {
    id: 6,
    certificateNumber: 'Certificate 6',
    certificationLogo: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042633/Portfolio/googlelogo_y8w8mn.jpg',
    title: "Frontend Web Development with ReactJS and JavaScript Bootcamp",
    company: 'Google',
    issuedDate: '',
    credentialId: '4Wvza',
    certificateUrl: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042004/Portfolio/developerstudents_gn0jqj.png',
    certificatePicture: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042004/Portfolio/developerstudents_gn0jqj.png'


  },
  {
    id: 7,
    certificateNumber: 'Certificate 6',
    certificationLogo: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042633/Portfolio/googlelogo_y8w8mn.jpg',
    title: "Web Developer Intern - Full Stack",
    company: 'OctaNet Services Pvt Ltd.',
    issuedDate: '1st August 2024 - 1st October 2024',
    credentialId: '09-2024-96934',
    certificateUrl: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042079/Portfolio/InternCertificate_qsm9et.png',
    certificatePicture: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737042079/Portfolio/InternCertificate_qsm9et.png'


  },
]


const Certifications = () => {
  return (
    <div className='max-w-7xl container mx-auto m-4 py-32'>
      <motion.div
        className="animated-div"
        initial={{ opacity: 0, y: 100 }} // Starting state
        animate={{ opacity: 1, y: 0 }}  // End state
        transition={{
          duration: 0.5, // Animation duration
          ease: "easeInOut", // Easing function
        }}
      >
        <h1 className='font-bold text-2xl md:text-4xl mt-10 text-center'>
          My Licenses & certifications
        </h1>

        <div className='mt-10 p-4'>
          {CertificationList.map((item, index) => (

            <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 mb-5" key={item.id}>
              <div className="flex items-start sm:gap-8">
                <div
                >
                  <div className="flex items-center gap-1">
                    <Image src={item.certificationLogo} height={60} width={60} alt='logo' className='hidden md:block' />
                  </div>
                </div>

                <div>
                  <strong
                    className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                  >
                    {item.certificateNumber}
                  </strong>

                  <h3 className="mt-4 text-lg font-medium sm:text-xl">
                    <Link href={item.certificateUrl} className="hover:underline font-bold"> {item.title}</Link>
                  </h3>

                  <p className="mt-1 text-sm text-gray-700 font-bold">
                    {item.company}
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    Issued On: {item.issuedDate}
                  </p>

                  <div className="mt-1 sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center gap-1 text-gray-500">

                      <p className="text-xs font-medium">Credential ID: {item.credentialId}</p>
                    </div>

                  </div>
                  <Link href={item.certificateUrl}>   <Image className=' rounded-lg mt-5 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' src={item.certificatePicture} height={100} width={300} alt='certificate' /></Link>
                </div>
              </div>
            </article>

          ))}


        </div>
      </motion.div>
    </div>
  )
}

export default Certifications
