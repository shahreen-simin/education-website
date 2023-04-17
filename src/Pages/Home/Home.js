import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import AnnounceForm from './AnnounceForm';
import Posts from './Posts';

const Home = () => {
    return (
        <div>
            <AnnounceForm></AnnounceForm>
            <Posts></Posts>
        </div>
    );
};

export default Home;