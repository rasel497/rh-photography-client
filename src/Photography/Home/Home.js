
import React from 'react';
import { Helmet } from 'react-helmet-async';
import OurTems from '../../Others/OurTems/OurTems';
import StatsCount from '../../Others/StatsCount/StatsCount';
import About from '../About/About';
import BannerService from '../Services/BannerService/BannerService';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <BannerService></BannerService>
            <About></About>
            <StatsCount></StatsCount>
            <OurTems></OurTems>
        </div>
    );
};

export default Home;