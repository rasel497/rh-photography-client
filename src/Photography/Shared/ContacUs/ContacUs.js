import React from 'react';

const ContacUs = () => {
    return (
        <section id='contactus'>
            <div className='mb-16'>
                <div className="relative">
                    <img
                        src="https://media.istockphoto.com/id/1196172395/photo/in-the-photo-studio-with-professional-equipment-portrait-of-the-famous-photographer-holding.jpg?s=612x612&w=0&k=20&c=utO4aHRyA5ZUAYxbk9NelmhR1_E5-AOWUWcqDMP-NXE="
                        className="absolute inset-0 object-cover w-full h-full"
                        alt=""
                    />
                    <div className="relative bg-gray-900 bg-opacity-75">
                        <h2 className='text-3xl font-bold text-center text-white m-4'>Contact Us 24/7 Any Kind Of Photographty</h2>
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="flex flex-col items-center justify-between xl:flex-row">
                                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                        Contact Us Our <br className="hidden md:block" />
                                        Photography Services {' '}
                                        <span className="text-teal-accent-400">We Provide Our Best Sevices</span>
                                    </h2>
                                    <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                        We provide service all over the place in Bangladesh all photography service as like Weeding, Travel & Toure, Brithday and Any Event Management Photography Please contact us our location.
                                    </p>
                                    <a
                                        href="/"
                                        aria-label=""
                                        className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                                    >
                                        Learn more
                                        <svg
                                            className="inline-block w-3 ml-2"
                                            fill="currentColor"
                                            viewBox="0 0 12 12"
                                        >
                                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                        </svg>
                                    </a>
                                    <div className='text-white'>
                                        <p>Address: Bangalamotor, Dhaka-1000</p>
                                        <p>Phone: +880 1722354001</p>
                                        <p>Email: rasel.csediu44@gmail.com</p>
                                    </div>

                                </div>
                                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                    <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                            Contact For Photography
                                        </h3>
                                        <form>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="firstName"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    Full Name
                                                </label>
                                                <input
                                                    placeholder="Your Name"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    name="firstName"
                                                />
                                            </div>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="lastName"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    E-mail
                                                </label>
                                                <input
                                                    placeholder="Your E-mail"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    name="lastName"
                                                />
                                            </div>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="email"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    Message Us
                                                </label>
                                                <textarea
                                                    className='w-full border border-gray-300 rounded shadow-sm'
                                                    placeholder="Your message for event..."
                                                    required
                                                    type="text"
                                                ></textarea>
                                            </div>
                                            <div className="mt-4 mb-2 sm:mb-4">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium bg-red-500 text-white font-medium"
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                            <p className="text-xs text-gray-600 sm:text-sm">
                                                We respect your privacy. Unsubscribe at any time.
                                            </p>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default ContacUs;