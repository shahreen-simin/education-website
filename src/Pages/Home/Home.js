import React from 'react';
import Banner from './Banner';
import About from './About';
import Works from './Works';
import Benifits from './Benifits';
import Features from './Features';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Works></Works>
            <Benifits></Benifits>
            <Features></Features>
            {/* <Courses></Courses> */}
        </div>
    );
};

export default Home;