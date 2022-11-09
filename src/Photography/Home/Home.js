
import React from 'react';
import OurTems from '../../Others/OurTems/OurTems';
import PhotoGallery from '../../Others/PhotoGallery/PhotoGallery';
import StatsCount from '../../Others/StatsCount/StatsCount';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <StatsCount></StatsCount>
            <OurTems></OurTems>
        </div>
    );
};

export default Home;