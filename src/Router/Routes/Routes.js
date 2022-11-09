import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Others/Blog/Blog';
import ErrorPage from '../../Others/ErrorPage/ErrorPage';
import PhotoGallery from '../../Others/PhotoGallery/PhotoGallery';
import About from '../../Photography/About/About';
import Home from '../../Photography/Home/Home';
import Login from '../../Photography/Login/Login';
import AddUser from '../../Photography/Services/AddUser/AddUser';
import AllService from '../../Photography/Services/AllService/AllService';
import Review from '../../Photography/Services/Reviews/Review';
import Register from '../../Photography/SignUp/Register';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: < AllService ></AllService >
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/photo-gallery',
                element: <PhotoGallery></PhotoGallery>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/addUser',
                element: <AddUser></AddUser>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
]);


