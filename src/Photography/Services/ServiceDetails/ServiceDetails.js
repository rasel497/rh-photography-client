import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const [refresh, setRefresh] = useState();
    const [reviews, setReviews] = useState([]);
    const services = useLoaderData();
    const [storeReviews, setstoreReviews] = useState([]);

    const { user } = useContext(AuthContext);
    console.log(user);

    // 01+02.Create and Read Data using useEffect() With Map function
    useEffect(() => {
        fetch('https://rh-photography-server.vercel.app/reviews/')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [refresh])


    useEffect(() => {
        fetch(`https://rh-photography-server.vercel.app/reviews/${services._id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setstoreReviews(data)
            })
    }, [services._id])

    const handleddReviews = (e) => {
        e.preventDefault();

        const form = e.target;
        const serviceReview = form.serviceReview.value;
        const date = new Date();
        const serviceId = services._id;
        const email = user.email;
        const serviceTitle = services.serviceName;
        const dispalyName = user.displayName;
        const photURL = user.photoURL;
        const userUid = user.uid;

        form.reset();

        const myReview = {
            serviceReview, date, email, dispalyName, photURL, userUid, serviceId, serviceTitle
        }
        console.log(myReview);
        fetch('https://rh-photography-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myReview)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Thank you for review us');
                console.log(data)
                // storeReviews, setstoreReviews
                const newReview = [myReview, ...storeReviews]
                setstoreReviews(newReview)
            }).catch(err => toast.error(err.message));
    }

    return (
        <div className='mb-10 mt-7'>

            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                First service
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            {services.serviceName}
                        </h2>
                        <p className="text-base font-bold text-red-500 text-gray-700 md:text-lg">
                            Price: {services.price} TK
                        </p>
                        <p className="text-base text-gray-700 md:text-lg">
                            {services.description}
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <button className="btn btn-active btn-primary">Explore Me Your Developer</button>
                    </div>
                </div>
                <div className="relative lg:w-1/2">
                    <PhotoProvider>
                        <PhotoView src={services.image}>
                            <figure><img src={services.image} alt='' /></figure>
                        </PhotoView>
                    </PhotoProvider>
                </div>
            </div>


            {/*--------------------Review Section--------------------*/}
            <form onSubmit={handleddReviews}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mb-2'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            {
                                storeReviews.map(img => {
                                    return <img src={img.photURL} alt='' />
                                })
                            }
                        </div>
                        <input name='serviceReview' type="text" placeholder="give us from your excellent review" className="ml-4 input input-ghost w-full input-bordered" />
                    </div>
                </div>
                <input className='btn ml-20 my-4' type="submit" value="Add Review" />
            </form>

            {/* --------------------Reviews added items----------------- */}
            <Table striped={true}>

                <Table.Body className="divide-y">
                    {storeReviews.map((review) => {
                        return (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    <div  >
                                        <img className='w-20 rounded' src={review.photURL} alt={review.name} />
                                    </div>
                                </Table.Cell>

                                <Table.Cell>{review.dispalyName}</Table.Cell>
                                <Table.Cell>{review.servicetitle}</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {review.serviceReview}
                                </Table.Cell>
                                <Table.Cell>{review.email}</Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </div>
    );
};

export default ServiceDetails;