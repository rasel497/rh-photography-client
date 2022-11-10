import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddUser = () => {
    const [refresh, setRefresh] = useState();


    const handleAddService = (e) => {
        e.preventDefault();

        const form = e.target;
        const serviceName = form.servicename.value;
        const image = form.photoUrl.value;
        const price = form.price.value;
        const description = form.description.value;
        const date = new Date();
        // console.log(serviceName, image, price, description);

        const services = {
            serviceName, image, price, description, date
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('You are added new service');
                setRefresh(!refresh);
                console.log(data)
            }).catch(err => toast.error(err.message));
    }
    return (
        <div className='mx-40'>

            <form onSubmit={handleAddService}>
                <h2 className='text-2xl font-bold text-center'>Add New Service</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5'>
                    <label className='font-bold' htmlFor="">Service Name
                        <input name='servicename' type="text" placeholder="new service name" className="input input-ghost w-full input-bordered" />
                    </label>
                    <label className='font-bold' htmlFor="">Photo URL
                        <input name='photoUrl' type="text" placeholder="add photo url" className="input input-ghost w-full input-bordered" />
                    </label>
                    <label className='font-bold' htmlFor="">Price
                        <input name='price' type="text" placeholder="add price" className="input input-ghost w-full input-bordered" required />
                    </label>
                    <label className='font-bold' htmlFor="">Optional
                        <input name='optional' type="text" placeholder="something added" className="input input-ghost w-full input-bordered" required />
                    </label>
                </div>
                <label className='font-bold py-4' htmlFor="">Description
                    <textarea name='description' className="textarea textarea-bordered h-24 w-full" placeholder="Your message...." required></textarea>
                </label>
                <input className='btn my-4' type="submit" value="Add New User" />
            </form>
        </div>
    );
};

export default AddUser;