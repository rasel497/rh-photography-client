import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from '../Reviews/Review';
import ServiceCard from '../ServiceCard/ServiceCard';

const BannerService = () => {
    const [services, setServices] = useState([]);
    // console.log(services);

    useEffect(() => {
        fetch(`https://rh-photography-server.vercel.app/services?size=${3}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-20'>
            <h2 className='text-3xl font-bold text-center'>Explore Latest Photoshot Service</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center items-center'>
                <Link to='/services'><button className="btn btn-active btn-primary">See All Service</button></Link>
            </div>
        </div>
    );
};

export default BannerService;