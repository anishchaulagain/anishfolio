import React from 'react'

const Contact = () => {
    return (


        <section className="bg-gray-100 " >
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg font-semibold leading-relaxed">
                            Have a project in mind or simply want to connect? I'm all ears! Drop me a message using the form below, and I'll get back to you as soon as possible. Let's turn your ideas into reality together.
                        </p>

                        <div className="mt-8">
                            <a href="#" className="text-xl font-bold text-pink-600 sm:text-2xl">contact@anishchaulagain.com.np</a>

                            <address className="mt-2 not-italic">Kaushaltar, Bhaktapur, NP 44600</address>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form className="space-y-4" action="https://formsubmit.co/anishchaulagain2058@gmail.com" method="POST">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border  border-gray-200 p-3 text-sm "
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    name='name'
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email" >Email</label>
                                    <input
                                        className="w-full rounded-lg border  border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                        name="email"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border  border-gray-200 p-3 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                        name='phone'
                                    />
                                </div>
                            </div>



                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>

                                <textarea
                                    className="w-full rounded-lg border  border-gray-200 p-3 text-sm"
                                    placeholder="Message"

                                    id="message"
                                    name='text'
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact