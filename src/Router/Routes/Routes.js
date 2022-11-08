import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Others/Blog/Blog';
import ErrorPage from '../../Others/ErrorPage/ErrorPage';
import About from '../../Photography/About/About';
import Home from '../../Photography/Home/Home';
import Login from '../../Photography/Login/Login';
import AllService from '../../Photography/Services/AllService/AllService';
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
                path: '/all-service',
                element: <AllService></AllService>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
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


