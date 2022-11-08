import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './Error.css'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <div className="error-imgg mt-10">
                <img src="/error404.png" alt="" />
            </div>
            <div className="error mb-2 text-2xl text-center">
                <h3>Ops! An Error Ocurred!</h3>
                <Link to="/" className='underline'><h5>Back to home page</h5></Link>
            </div>
        </div>
    );
};

export default ErrorPage;