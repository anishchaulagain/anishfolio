import React from 'react'
//frequently asked question
const Faq = () => {
    const questions = [
        {
            id: 1,
            question: 'Who are you?',
            desc: 'I am Anish Chaulagain.'

        },
        {
            id: 2,
            question: 'Can I see examples of your work?',
            desc: 'Absolutely! You can explore my portfolio to see samples of my work, including My Portfolio, Ecommerce Website, My Graphics Desgins and many more. Each project showcases my skills and creativity.'
        },
        {
            id: 3,
            question: ' How can I contact you?',
            desc: 'Feel free to reach out to me via email at contact@anishchaulagain.com.np or by using the contact form on my website. I am always eager to discuss new projects and collaborations.'
        },
        {
            id: 4,
            question: 'Can I follow you on social media?',
            desc: 'Of course! You can stay updated on my latest projects and announcements by following me on Instagram, LinkedIN, Github, Facebook. I look forward to connecting with you there!'
        },

    ]
    return (
        <div className='pt-10 pb-10'>
            <div className='flex justify-center'>
                <h1 className='text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>FAQS</h1>
            </div>
            <div className="space-y-4 flex flex-col  justify-center px-4 mx-auto max-w-screen-xl py-12 sm:px-6 md:py-16 lg:px-8">
                {questions.map((item, index) => (
                    <details className="group [&_summary::-webkit-details-marker]:hidden" key={item.id}>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                            <h2 className="font-medium">{item.question}</h2>

                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            {item.desc}
                        </p>
                    </details>
                ))}

            </div>
        </div>
    )
}

export default Faq