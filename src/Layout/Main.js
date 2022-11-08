import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Photography/Shared/Footer/Footer';
import Header from '../Photography/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;