import { Carousel } from 'flowbite-react';
import React from 'react';
import './Banner.css'


const Banner = () => {
    return (

        <div className={`lg:h-[650px] h-96 mb-5 relative`}>
            <div className='absolute z-50 flex justify-center text-center w-full h-full items-center'>
                <div>
                    <div>
                        <h2 className='text-5xl font-bold text-white'>Welcome To<h2 className='text-yellow-300'>RH-Photography</h2></h2>
                    </div>
                    <div className='text-white inline'>
                        <p>Photography is the art, application, and practice of creating durable images by recording light, either electronically <br /> by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. <br /> It is employed in many fields of science, manufacturing and business, as well as its more direct uses for art, <br /> film and video production, recreational purposes, hobby, and mass communication.</p>
                    </div>
                    <div className='flex justify-center mt-5 mr-4'>
                        <button className="mr-4 btn btn-active btn-secondary">Get Started</button>
                        <button className="btn btn-outline btn-secondary">Explore Us</button>
                    </div>
                </div>
            </div>

            <Carousel className="carousel-img rounded-xl" slideInterval={5000}>
                <img className='object-cover h-full w-full'
                    src="https://i.ibb.co/9Wb8w8B/corporateevent.jpg"
                    alt="..."
                />
                <img className='object-cover h-full w-full'
                    src="https://i.ibb.co/gWZH18p/musiccard.jpg"
                    alt="..."
                />
                <img className='object-cover h-full w-full'
                    src="https://i.ibb.co/0JNLWGc/weddingcard.jpg"
                    alt="..."
                />
                <img className='object-cover h-full w-full'
                    src="https://i.ibb.co/GxwdvBr/birthday.jpg"
                    alt="..."
                />
                <img className='object-cover h-full w-full'
                    src="https://i.ibb.co/DWYx37D/foodbcard.jpg"
                    alt="..."
                />
            </Carousel>

        </div>
    );
};

export default Banner;