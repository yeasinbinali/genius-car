import React from 'react';
import About from '../About/About';
import Carousel from '../Carousel/Carousel';
import Feathers from '../Feathers/Feathers';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <About></About>
            <Services></Services>
            <Products></Products>
            <Feathers></Feathers>
        </div>
    );
};

export default Home;