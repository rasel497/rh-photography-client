
import React from 'react';
import OurTems from '../../Others/OurTems/OurTems';
import StatsCount from '../../Others/StatsCount/StatsCount';
import About from '../About/About';
import BannerService from '../Services/BannerService/BannerService';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerService></BannerService>
            <About></About>
            <StatsCount></StatsCount>
            <OurTems></OurTems>
        </div>
    );
};

export default Home;