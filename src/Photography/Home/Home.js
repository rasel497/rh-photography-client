
import React from 'react';
import OurTems from '../../Others/OurTems/OurTems';
import PhotoGallery from '../../Others/PhotoGallery/PhotoGallery';
import StatsCount from '../../Others/StatsCount/StatsCount';
import BannerService from '../Services/BannerService/BannerService';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerService></BannerService>
            <PhotoGallery></PhotoGallery>
            <StatsCount></StatsCount>
            <OurTems></OurTems>
        </div>
    );
};

export default Home;