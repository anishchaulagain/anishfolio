import Image from "next/image"


const products = [
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
        href: '#',
        imageSrc: 'https://i.ibb.co/vv9T4Fh/ecommerce.png',
        imageAlt: 'A fullstack ecommerce website with payment integration',
    },
    // More products...
]

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className=" text-black text-center mb-10 text-2xl sm:text-3xl font-bold pb-8 md:pb-10 ">MY PROJECTS</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                    {products.map((product) => (
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
        </div>
    )
}