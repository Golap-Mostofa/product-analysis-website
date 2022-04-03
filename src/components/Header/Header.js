import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
    <div>
        <div className='p-6   '>
            <Link className='mr-6 text-violet-900 font-bold text-100' to="/home">HOME</Link>
            <Link className='mr-6 text-violet-900 font-bold text-100' to="/review">REVIEWS</Link>
            <Link className='mr-6 text-violet-900 font-bold text-100' to="/dashbord">DASHBOARD</Link>
            <Link className='mr-6 text-violet-900 font-bold text-100' to="/blogs">BLOGS</Link>
            <Link className='mr-6 text-violet-900 font-bold text-100' to="/about">ABOUT</Link>
        </div>
       
    </div>
    );
};

export default Header;