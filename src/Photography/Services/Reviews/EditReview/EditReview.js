import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EditReview = () => {
    const router = useParams();
    const [service, setService] = useState({});
    const { id } = router;
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
            .catch(err => console.log(err))
    }, [id])



    const handleddEditReviews = (e) => {
        e.preventDefault();
        const form = e.target;
        const servicetitle = form.servicetitle.value;
        const photoUrl = form.photoUrl.value;
        const writeReview = form.writeReview.value;
        console.log(servicetitle, photoUrl, writeReview);
        toast.success('Successfully updated');

        const service = {
            servicetitle,
            photoUrl,
            writeReview
        }

        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        }).catch(err => console.error(err))


    }

    return (
        <div>
            <form onSubmit={handleddEditReviews}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mb-2'>
                    <label htmlFor="">User Name
                        <input name='servicetitle' type="text" placeholder="new service name" defaultValue={service?.servicetitle} className="input input-ghost w-full input-bordered" />
                    </label>
                    <label htmlFor="">Photo URL
                        <input name='photoUrl' type="text" placeholder="add photo url" className="input input-ghost w-full input-bordered" />
                    </label>
                </div>
                <label className='py-4' htmlFor="">Review Message
                    <textarea name='writeReview' className="textarea textarea-bordered h-24 w-full" placeholder="your excellent review...." required></textarea>
                </label>
                <input className='btn my-4' type="submit" value="Update Review" />
            </form>
        </div>
    );
};

export default EditReview;