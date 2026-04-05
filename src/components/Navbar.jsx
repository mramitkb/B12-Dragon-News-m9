import React from 'react';
import { NavLink } from 'react-router';
import MyLink from './MyLink';
import userLogo from "../assets/user.png";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between mt-6'>
            <div></div>
            <div className='space-x-5 text-accent font-semibold'>
                <MyLink to="/">Home</MyLink>
                <MyLink to="/about">About</MyLink>
                <MyLink to="/career">Career</MyLink>
            </div>
            <div className='flex items-center gap-3'>
                <img src={userLogo} alt="" />
                <button className='btn btn-primary px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;