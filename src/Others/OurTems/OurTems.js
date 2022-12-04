import React from 'react';
import img from '../../assets/ourteams/RaselCEO.jpg'
import img2 from '../../assets/ourteams/zahidul.jpg'

const OurTems = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Dream Team
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Welcome</span>
                    </span>{' '}
                    our talented team of professionals
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor.
                </p>
            </div>
            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">


                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src={img}
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold">Rasel Hossain</p>
                        <p className="text-sm text-gray-800">CEO & Owner</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src={img2}
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold">Zahidul Anik</p>
                        <p className="text-sm text-gray-800">Managment</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold">Farzana Farin</p>
                        <p className="text-sm text-gray-800">Photo & Video Editor</p>
                    </div>
                </div>




            </div>
        </div>
    );

};

export default OurTems;