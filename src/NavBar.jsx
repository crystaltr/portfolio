import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <>
        <nav class="nav-grid">
            <ul class="ul-grid"> 
                <div class ="rectangle"></div><div class ="rectangle"></div><div class ="rectangle"></div>
                <div className='brandline'>Crystal Truong</div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <a href="https://www.linkedin.com/in/crystal-truong-2334a2175/" target="_blank">Linkedin</a>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;