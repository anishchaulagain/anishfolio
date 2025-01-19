import React from 'react'

const Faq = () => {
  const questions = [
    {
      id: 1,
      question: 'Who are you?',
      desc: 'I am a passionate and skilled web developer with expertise in front-end and full-stack development, specializing in creating dynamic and user-friendly applications. My journey in tech began in 2019, and I continuously strive to learn and innovate, delivering high-quality digital solutions.',
    },
    {
      id: 2,
      question: 'Can I see examples of your work?',
      desc: 'Absolutely! You can explore my portfolio to see samples of my work, including My Portfolio, E-commerce Website, My Graphic Designs, and many more. Each project showcases my skills and creativity.',
    },
    {
      id: 3,
      question: 'How can I contact you?',
      desc: 'Feel free to reach out to me via email at contact@anishchaulagain.com.np or by using the contact form on my website. I am always eager to discuss new projects and collaborations.',
    },
    {
      id: 4,
      question: 'Can I follow you on social media?',
      desc: 'Of course! You can stay updated on my latest projects and announcements by following me on Instagram, LinkedIn, GitHub, and Facebook. I look forward to connecting with you there!',
    },
  ]

  return (
    <div className="pt-10 pb-10 bg-white">
      <div className="flex justify-center mb-6">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">FAQs</h1>
      </div>
      <div className="space-y-4 flex flex-col justify-center px-4 mx-auto max-w-screen-lg py-12 sm:px-6 md:py-16 lg:px-8">
        {questions.map((item) => (
          <details
            className="group [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white shadow-md overflow-hidden"
            key={item.id}
          >
            <summary
              className="flex cursor-pointer items-center justify-between p-4 text-gray-900 hover:bg-gray-100 transition duration-300"
            >
              <h2 className="font-medium text-lg">{item.question}</h2>

              <svg
                className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <p className="mt-4 px-4 pb-4 text-gray-700 leading-relaxed">
              {item.desc}
            </p>
          </details>
        ))}
      </div>
    </div>
  )
}

export default Faq
