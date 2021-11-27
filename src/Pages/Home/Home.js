import React from 'react';
import Reviews from '../Dashbord/Review/Reviews';
import Bannar from './Bannar';
import Products from './Products';
import Workers from './Worker/Workers';





const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <h1>Gorgeous collection</h1>
            <Products></Products>
            <h1>Customer review</h1>
            <Reviews></Reviews>
            {/* -----bonus part-----
                                         */}
            <h1>Our total workers</h1>
            <Workers></Workers>
        </div>
    );
};

export default Home;