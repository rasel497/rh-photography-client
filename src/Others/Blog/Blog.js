import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    This is Blog Questions Answer.
                </h2>

                <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">

                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://miro.medium.com/max/1200/1*d3EJxXuQOK-ktAJkovdqSA.jpeg"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                Difference between SQL and NoSQL?
                            </h5>
                            <p className="mb-5 text-gray-700">
                                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them).
                                <strong> NoSQL</strong> is a class of DBMs that are non-relational. NoSQL databases are purpose built for specific data models and have flexible schemas for building modern applications. NoSQL databases are widely recognized for their ease of development, functionality, and performance at scale.
                            </p>
                        </div>
                    </div>

                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://www.appknox.com/hs-fs/hubfs/JWT.jpg?width=1999&name=JWT.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                What is JWT, and how does it work?
                            </h5>
                            <p className="mb-5 text-gray-700">
                                <strong>A JSON web token</strong>(JWT) is JSON Object which is used to securely transfer information over the web(between two parties).
                                <strong> It works</strong> JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                            </p>
                        </div>
                    </div>

                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://d2o2utebsixu4k.cloudfront.net/media/images/blogs/share_image/e6c8bd74-8a4d-4b5b-a92b-1f273e9a924f.png"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                What is the difference between javascript and NodeJS?
                            </h5>
                            <p className="mb-5 text-gray-700">
                                <strong>Javascript</strong> is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                                <strong>NodeJS</strong> is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                            </p>

                        </div>
                    </div>


                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://devopedia.org/images/article/131/2362.1540794088.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                How does NodeJS handle multiple requests at the same time?
                            </h5>
                            <p className="mb-5 text-gray-700">
                                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;