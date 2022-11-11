import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState();
    const { user } = useContext(AuthContext);

    // 01+02.Create and Read Data using useEffect() With Map function
    useEffect(() => {
        fetch(`http://localhost:5000/myReviews/${user.uid}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [refresh, user.uid])


    // 03.Delete data from client with MongoDB
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully removed');
                setRefresh(!refresh);
                console.log(data)
            }).catch(err => toast.error(err.message));
    };

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {/* --------------------Reviews added items----------------- */}
            <Table striped={true}>
                <Table.Head>
                    <Table.HeadCell>Service Name</Table.HeadCell>
                    <Table.HeadCell>Review</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                        Edit / Delete
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {reviews.map((review) => {
                        return (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                <Table.Cell>{review.serviceTitle}</Table.Cell>

                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {review.serviceReview}
                                </Table.Cell>

                                <Table.Cell>
                                    <div className='flex'>
                                        <Link to={`/editreview/${review._id}`}><button className="btn btn-sm mr-2">Edit</button></Link>
                                        <button onClick={() => handleDelete(review._id)} className="btn btn-sm">Delete</button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </div>

    );
};

export default Review;