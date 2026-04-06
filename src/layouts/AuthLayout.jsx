import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            {/* Header Section */}
            <header className="w-10/12 mx-auto ">
                <Navbar></Navbar>
            </header>
            {/* Main Section */}
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;