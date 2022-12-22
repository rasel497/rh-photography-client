import React from 'react';

const ContacUs = () => {
    return (
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


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContacUs;