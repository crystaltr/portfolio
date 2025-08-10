import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <>
        <nav className="nav-grid">
            <ul className="ul-grid"> 
                <Link to="/">Home</Link>
                <a href="https://www.linkedin.com/in/crystal-truong-2334a2175/" target="_blank">Linkedin</a>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;
