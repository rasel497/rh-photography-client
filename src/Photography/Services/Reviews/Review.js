import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const services = useLoaderData();
    console.log(services);

    const handleddReviews = (e) => {
        e.preventDefault();

        const form = e.target;
        const servicetitle = form.servicetitle.value;
        const writeReview = form.writeReview.value;
        const photoUrl = form.photoUrl.value;
        console.log(servicetitle, photoUrl, writeReview);

        const myReview = {
            servicetitle,
            photoUrl,
            writeReview
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myReview)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={services.image}
                        alt=""
                    />
                </div>
            </div>

            {/*--------------------Review Section--------------------*/}
            <form onSubmit={handleddReviews}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mb-2'>
                    <label htmlFor="">Service Name
                        <input name='servicetitle' type="text" placeholder="new service name" className="input input-ghost w-full input-bordered" />
                    </label>
                    <label htmlFor="">Photo URL
                        <input name='photoUrl' type="text" placeholder="add photo url" className="input input-ghost w-full input-bordered" />
                    </label>
                </div>
                <label className='py-4' htmlFor="">Review Message
                    <textarea name='writeReview' className="textarea textarea-bordered h-24 w-full" placeholder="your excellent review...." required></textarea>
                </label>
                <input className='btn my-4' type="submit" value="Add Review" />
            </form>

        </div>

    );
};

export default Review;