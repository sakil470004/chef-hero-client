import React from 'react';
import CarouselBs from '../Components/Carousel';
import Hero from '../Components/Hero';
import FoodWeHave from '../Components/FoodWeHave';
import ServiceSection from '../Components/OurServices';

const Home = () => {
    return (
        <div>
            <CarouselBs />
            <Hero />
            <FoodWeHave/>
            <ServiceSection/>

        </div>
    );
};

export default Home;