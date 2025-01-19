'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Contact = () => {
  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  return (
    <section id="contact" className="bg-gray-100">
      <motion.div
        className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          {/* Contact Information Section */}
          <motion.div
            className="lg:col-span-2 lg:py-12"
            variants={fadeInVariants}
          >
            <p className="max-w-xl text-lg font-semibold leading-relaxed text-gray-700">
              Have a project in mind or simply want to connect? I'm all ears! Drop me a message using the form below, and I'll get back to you as soon as possible. Let's turn your ideas into reality together.
            </p>

            <div className="mt-8">
              <Link
                href="mailto:anishchaulagain2058@gmail.com"
                className="text-xl font-bold text-pink-600 hover:underline sm:text-2xl"
              >
                contact@anishchaulagain.com.np
              </Link>
              <address className="mt-2 not-italic text-gray-600">
                Kausaltar, Bhaktapur, NP 44600
              </address>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12"
            variants={fadeInVariants}
          >
            <form
              className="space-y-6"
              action="https://formsubmit.co/anishchaulagain2058@gmail.com"
              method="POST"
            >
              {/* Name Field */}
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              {/* Email and Phone Fields */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Message"
                  id="message"
                  name="text"
                  rows={5}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-[#5c7af8] px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-blue-700 sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
