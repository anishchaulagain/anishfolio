'use client'
import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Bikash Sharma",
    role: "Founder, NepaliCrafts",
    review:
      "Transforming our e-commerce platform was a breeze with your expertise. The sleek design and smooth functionality have boosted our sales significantly. Thank you!",
    imgSrc:
      "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Anjali Adhikari",
    role: "Manager, Himalayan Foods",
    review:
      "Your UI/UX skills are outstanding! The interface you built for us is intuitive and has received excellent feedback from our users.",
    imgSrc:
      "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    name: "Sujan Pandey",
    role: "CEO, SmartTech Nepal",
    review:
      "The custom solutions you provided helped us streamline our operations. Your full-stack expertise was evident in every aspect of the project.",
    imgSrc:
      "https://randomuser.me/api/portraits/men/58.jpg",
  },
];

const Testimonial = () => {
  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <div>
      <section className="bg-white my-20 py-10 pb-5">
        <motion.div
          className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Read trusted reviews from my clients
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {reviews.map((review, index) => (
              <motion.blockquote
                key={index}
                className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
                variants={fadeInVariants}
              >
                <div className="flex items-center gap-4">
                  <img
                    alt={review.name}
                    src={review.imgSrc}
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      {/* Render 5 stars dynamically */}
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{review.review}</p>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Testimonial;
