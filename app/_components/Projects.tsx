import Image from "next/image"
import Link from "next/link"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Personal Portfolio',
    href: 'https://anishchaulagain.com.np',

    imageSrc: '/portfolio1.png',
    imageAlt: 'Personal Portfolio',
  },
  {
    id: 2,
    name: 'AspireX - React Responsive Design',
    href: 'https://react-grmbxk.stackblitz.io',

    imageSrc: 'https://i.ibb.co/DMfMvQ9/aspirex1.png',
    imageAlt: 'AspireX - A responsive Front End Design using React',
  },
  
  {
    id: 3,
    name: 'HamroPasal - A FullStack Ecommerce Website',
    href: '#',
    imageSrc: 'https://i.ibb.co/vv9T4Fh/ecommerce.png',
    imageAlt: 'A fullstack ecommerce website with payment integration',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white mb-20" id="projects">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className=" text-black text-center mb-3  sm:text-3xl  text-3xl md:text-5xl font-bold ">My Work Gallery </h2>
        <p className="text-center text-md text-gray-400 leading-relaxed font-semibold md:text-xl py-3 mb-16">Browse through a visual gallery of my past projects.</p>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 items-center ">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 border border-gray-400" width={180} height={100}
                />
              </div>
              <h1 className="mt-4  text-gray-700 text-center text-xl font-bold ">{product.name}</h1>

            </a>
          ))}
             <Link href={'/projects'} className="underline text-center">View More</Link>
        </div>
      </div>
    </div>
  )
}