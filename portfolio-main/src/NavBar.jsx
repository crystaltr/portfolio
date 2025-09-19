import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <>
        <nav className="nav-grid">
            <ul className="ul-grid"> 
                <a href={`${process.env.PUBLIC_URL}/CrystalT_Resume.pdf`} target="_blank">Resume</a>
                <a href="https://www.linkedin.com/in/crystal-truong-2334a2175/" target="_blank">Linkedin</a>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;
