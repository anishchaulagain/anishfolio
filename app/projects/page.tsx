'use client'
import { motion } from "framer-motion"
import Image from "next/image"


const Webproducts = [
    {
        id: 1,
        name: 'Personal Portfolio',
        href: 'https://anishchaulagain.com.np',

        imageSrc: '/portfolio1.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
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
        name: 'Todo Using Context API & Local Storage',
        href: 'https://context-api-todo-local-storage.vercel.app/',

        imageSrc: 'https://i.ibb.co/yY44rYQ/todo.png',
        imageAlt: 'Todo Webapp using Context API and local storage',
    },
    {
        id: 4,
        name: 'HamroPasal - A FullStack Ecommerce Website',
        href: '',
        imageSrc: 'https://i.ibb.co/vv9T4Fh/ecommerce.png',
        imageAlt: 'A fullstack ecommerce website with payment integration',
    },
    {
        id: 5,
        name: 'CoverCraft - Cover Letter Generator for .com.np domain',
        href: 'https://coverlettergenerator-anishchaulagain.vercel.app/#about',
        imageSrc: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737274301/Portfolio/coverlettergenerator.png',
        imageAlt: 'Coverlettergenerator',
    },
    // More products...
]


const UIproducts = [
    {
        id: 1,
        name: 'Couply - Find Discount Coupons',
        href: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737084634/Portfolio/Ui%20projects/3_pnt60r.png',

        imageSrc: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737084634/Portfolio/Ui%20projects/3_pnt60r.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'RealEstate UI Design',
        href: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737084633/Portfolio/Ui%20projects/4_eqhsnk.png',

        imageSrc: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737084633/Portfolio/Ui%20projects/4_eqhsnk.png',
        imageAlt: 'Realestate ui design',
    },
    {
        id: 3,
        name: 'QR Scanner for Heritage Information',
        href: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737084618/Portfolio/Ui%20projects/1_kwhmue.png',

        imageSrc: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737084618/Portfolio/Ui%20projects/1_kwhmue.png',
        imageAlt: 'Qr scanner ui design',
    },
    {
        id: 4,
        name: 'Color Mender- Image Colorization UI Design',
        href: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737084631/Portfolio/Ui%20projects/5_oc3tpi.png',
        imageSrc: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737084631/Portfolio/Ui%20projects/5_oc3tpi.png',
        imageAlt: 'Color Mender- Image Colorization UI Design',
    },
    {
        id: 5,
        name: 'Travel App UI Design',
        href: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737084632/Portfolio/Ui%20projects/6_fcbxpn.png',
        imageSrc: 'https://res.cloudinary.com/dv9s1kiz2/image/upload/v1737084632/Portfolio/Ui%20projects/6_fcbxpn.png',
        imageAlt: 'Travel App UI Design',
    },
    // More products...
]




export default function Example() {
    return (
        <div className="bg-white max-w-7xl mx-auto my-20 ">
            <motion.div
                className="animated-div"
                initial={{ opacity: 0, x: -100 }} // Starting state
                animate={{ opacity: 1, x: 0 }}  // End state
                transition={{
                    duration: 0.5, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className=" text-black  mb-10 text-2xl sm:text-3xl font-bold pb-8 md:pb-10 p-5 text-center sm:p-0  sm:text-start">My Web Development Projects</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                        {Webproducts.map((product) => (
                            <a key={product.id} href={product.href} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <Image
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full border border-gray-500 w-full object-cover object-center group-hover:opacity-75" width={180} height={100}
                                    />
                                </div>
                                <h1 className="mt-4  text-gray-700 text-center text-xl font-bold ">{product.name}</h1>

                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="animated-div"
                initial={{ opacity: 0, x: 100 }} // Starting state
                animate={{ opacity: 1, x: 0 }}  // End state
                transition={{
                    duration: 0.5, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className=" text-black  mb-10 text-2xl sm:text-3xl font-bold pb-8 md:pb-10 p-5 text-center sm:p-0  sm:text-start ">My UI/UX & Graphics Design Projects</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                        {UIproducts.map((product) => (
                            <a key={product.id} href={product.href} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <Image
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full cursor-pointer scale-110 ease-in-out  border border-gray-500 w-full object-cover object-center group-hover:opacity-75" width={180} height={100}
                                    />
                                </div>
                                <h1 className="mt-4  text-gray-700 text-center text-xl font-bold ">{product.name}</h1>

                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}