import React from 'react';
import Choose from '../Choose/Choose';
import Header from '../Header/Header';
import Repair from '../Repair/Repair';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
            <Repair/>
            <Choose/>
        </div>
    );
};

export default Home;