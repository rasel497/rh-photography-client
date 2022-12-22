
import React from 'react';
import { Helmet } from 'react-helmet-async';
import OurTems from '../../Others/OurTems/OurTems';
import StatsCount from '../../Others/StatsCount/StatsCount';
import Profile from '../About/Profile';
import BannerService from '../Services/BannerService/BannerService';
import ContacUs from '../Shared/ContacUs/ContacUs';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <BannerService></BannerService>
            <Profile></Profile>
            <StatsCount></StatsCount>
            <OurTems></OurTems>
            <ContacUs></ContacUs>
        </div>
    );
};

export default Home;