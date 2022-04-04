import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css' 



const Header = () => {
    return (
    <div>
        <div className='links'>
            <NavLink className={({isActive})=>isActive ? "active-link" :"link"} to="/home">HOME</NavLink>
            <NavLink className={({isActive})=>isActive ? "active-link" :"link"} to="/review">REVIEWS</NavLink>
            <NavLink className={({isActive})=>isActive ? "active-link" :"link"} to="/dashbord">DASHBOARD</NavLink>
            <NavLink className={({isActive})=>isActive ? "active-link" :"link"} to="/blogs">BLOGS</NavLink>
            <NavLink className={({isActive})=>isActive ? "active-link" :"link"} to="/about">ABOUT</NavLink>
        </div>
       
    </div>
    );
};

export default Header;