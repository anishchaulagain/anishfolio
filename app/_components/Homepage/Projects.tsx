'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
const products = [
  {
    id: 1,
    name: 'Cover Letter Generator for .com.np domain',
    href: 'https://anishchaulagain.com.np',

    imageSrc: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737274301/Portfolio/coverlettergenerator.png',
    imageAlt: 'Coverlettergenerator',
  },
  {
    id: 2,
    name: 'HamroPasal - A FullStack Ecommerce Website',
    href: '#',
    imageSrc: 'https://i.ibb.co/vv9T4Fh/ecommerce.png',
    imageAlt: 'A fullstack ecommerce website with payment integration',
  },
  {
    id: 3,
    name: 'AspireX - React Responsive Design',
    href: 'https://react-grmbxk.stackblitz.io',

    imageSrc: 'https://i.ibb.co/DMfMvQ9/aspirex1.png',
    imageAlt: 'AspireX - A responsive Front End Design using React',
  },


  // More products...
]

export default function Example() {
  return (
    <motion.div
    className="bg-[#f8f9ff] mb-20"
    id="projects"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    viewport={{ once: true }}
  >
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <motion.h2
        className="text-black text-center mb-3 sm:text-3xl text-3xl md:text-5xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        My Work Gallery
      </motion.h2>
      <motion.p
        className="text-center text-md text-gray-400 leading-relaxed font-semibold md:text-xl py-3 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Browse through a visual gallery of my past projects.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 items-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {products.map((product) => (
          <motion.a
            key={product.id}
            href={product.href}
            className="group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75 border border-gray-400"
                width={180}
                height={100}
              />
            </div>
            <h1 className="mt-4 text-gray-700 text-center text-xl font-bold">
              {product.name}
            </h1>
          </motion.a>
        ))}
         <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link href="/projects" className="underline">
          View More
        </Link>
      </motion.div>
      </motion.div>

     
    </div>
  </motion.div>
  )
}