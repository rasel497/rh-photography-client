import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {

    return (
        <div className="px-4 py-5">
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={service.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {service.serviceName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h5 className=" font-bold tracking-tight text-gray-900 dark:text-white">
                        Price: {service.price} TK
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {service.description.slice(0, 100) + '...'} <span className='text-red-400'><Link to='/servicedetails'>Read More</Link></span>
                    </p>
                    <div className="card-actions justify-center  ">
                        <button className="btn btn-wide justify-center items-center w-full">Service Details</button>
                    </div>
                </div>
            </div>

        </div>

    )

};

export default ServiceCard;