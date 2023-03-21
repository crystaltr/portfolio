import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav class="nav-grid">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <a href="https://www.linkedin.com/in/crystal-truong-2334a2175/" target="_blank">Linkedin</a>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;