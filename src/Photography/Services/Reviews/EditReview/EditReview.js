import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const EditReview = () => {
    const [revieww, setRevieww] = useState({});
    const navigate = useNavigate();

    const review = useLoaderData();
    console.log(review);




    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviews/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setRevieww(data)
    //         })
    //         .catch(err => console.log(err))
    // }, [ ])



    const handleddEditReviews = (e) => {
        e.preventDefault();
        const form = e.target;
        const dispalyName = form.dispalyName.value;
        // const email = form.email.value;
        const writeReview = form.writeReview.value;
        // console.log(dispalyName, email, writeReview);
        toast.success('Successfully updated');

        const editReviewz = {
            dispalyName,
            writeReview
        }

        fetch(`http://localhost:5000/editReview/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editReviewz)
        })
            .then(result => {
                console.log(result)
                navigate(`/review`)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <form onSubmit={handleddEditReviews}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mb-2'>
                    <label htmlFor="">User Name
                        <input name='dispalyName' type="text" placeholder="new service name" defaultValue={review?.dispalyName} className="input input-ghost w-full input-bordered" />
                    </label>
                    <label htmlFor="">Photo URL
                        <input name='photoUrl' type="text" readOnly defaultValue={review?.email} placeholder="add photo url" className="input input-ghost w-full input-bordered" />
                    </label>
                </div>
                <label className='py-4' htmlFor="">Review Message
                    <textarea name='writeReview' defaultValue={review?.serviceReview} className="textarea textarea-bordered h-24 w-full" placeholder="your excellent review...." required></textarea>
                </label>
                <input className='btn my-4' type="submit" value="Update Review" />
            </form>
        </div>
    );
};

export default EditReview;