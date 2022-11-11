import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllService = () => {
    const services = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <h2 className='text-3xl font-bold text-center mt-5'>Available Services: {services.length} </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllService;