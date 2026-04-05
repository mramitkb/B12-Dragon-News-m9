import React from 'react';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto my-6'>
            {/* Header Section */}
            <header>
                <LatestNews></LatestNews>
                <Navbar></Navbar>
            </header>
            {/* Main Section */}
        </div>
    );
};

export default MainLayout;