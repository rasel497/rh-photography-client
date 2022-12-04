import { Carousel } from 'flowbite-react';
import React from 'react';
import './Banner.css'


const Banner = () => {
    return (

        <div className={`lg:h-[650px] h-96 -z-10 mb-5 relative`}>
            <div className='absolute z-50 flex justify-start w-full h-full items-center ml-16'>
                <div>
                    <div className='mb-4'>
                        <h2 className='text-6xl font-bold text-white mb-2'>Welcome to <br /><span className='text-white-500'>RH-Photography</span></h2>
                        <p className='text-yellow-300'>Photography is the art, application, and practice of creating durable images by recording light,<br /> by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. <br /> It is employed in many fields of science, manufacturing and business, as well as its more direct uses for art, <br /> film and video production, recreational purposes, hobby, and mass communication.</p>
                    </div>

                    <div className='flex justify-start mt-5'>
                        <button className="mr-4 btn btn-active btn-secondary">Get Started</button>
                        <button className="btn btn-outline btn-secondary">Explore Us</button>
                    </div>
                </div>
            </div>

            <Carousel className="carousel-img rounded-xl" slideInterval={5000}>
                <img className='object-cover h-full w-full'
                    src="https://i.ibb.co/gWZH18p/musiccard.jpg"
                    alt="..."
                />
                <img className='object-cover h-full w-full'
                    src="https://www.arj-photo.co.uk/wp-content/uploads/2017/01/hazlewood-castle-wedding-photography-60.jpg"
                    alt="..."
                />
                <img className='object-cover h-full w-full'
                    src="https://st.depositphotos.com/1594308/1714/i/600/depositphotos_17142889-stock-photo-birthday-wonder.jpg"
                    alt="..."
                />
                <img className='object-cover h-full w-full'
                    src="https://web-static.wrike.com/blog/content/uploads/2022/08/iStock-1288814183.jpg?av=637a13c1fc8927be4466fbca22185076"
                    alt="..."
                />
            </Carousel>

        </div>
    );
};

export default Banner;