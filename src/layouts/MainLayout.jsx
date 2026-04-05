import React from 'react';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto my-6'>
            {/* Header Section */}
            <header>
                <LatestNews></LatestNews>
                <Navbar></Navbar>
            </header>
            {/* Main Section */}
            <main className='grid grid-cols-12 gap-5 mt-6'>
                <aside className='col-span-3'>
                    <LeftSide></LeftSide>
                </aside>
                <div className='col-span-6'>
                    <Outlet></Outlet>
                </div>
                <aside className='col-span-3'>
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default MainLayout;