import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import placeholder from './assets/images/placeholder.png'
import './styles/shared.css'
import './styles/MainPage.css'

class MainPage extends Component {
    render() {
        return (
            <>
            <div className='main-container'>
                <header className='site-header'>
                    <h1 className='designer-name'>Crystal Truong</h1>
                    <p className='designer-title'>UX Designer @ Melbourne</p>
                </header>
                
                <div className='projects-grid'>
                    <div className='project-card'>
                        <div className='project-images'>
                            <img src={placeholder} alt="Car Match Project" className='project-image'/>
                            <img src={placeholder} alt="Car Match Interface" className='project-image'/>
                            <img src={placeholder} alt="Car Match Mobile" className='project-image'/>
                        </div>
                        <div className='project-details'>
                            <h3 className='project-title'>Car Match</h3>
                            <p className='project-year'>2024</p>
                            <p className='project-description'>↗ Adjust text tone by dragging a dial across a tactile axis.</p>
                            <p className='project-launched'>Launched at Config 2024 alongside Figma Slides, the Car Match platform helps users find the perfect vehicle with confidence and peace of mind.</p>
                        </div>
                    </div>
                    
                    <div className='project-card'>
                        <div className='project-images'>
                            <img src={placeholder} alt="Motor Insurance Project" className='project-image'/>
                            <img src={placeholder} alt="Vehicle Update Interface" className='project-image'/>
                            <img src={placeholder} alt="Portal Updates" className='project-image'/>
                        </div>
                        <div className='project-details'>
                            <h3 className='project-title'>Vehicle Updates Portal</h3>
                            <p className='project-year'>2024</p>
                            <p className='project-description'>↗ Self-service vehicle management for motor insurance.</p>
                            <p className='project-launched'>This project introduced a simple, self-service feature for users to manage their insured vehicles directly in the portal.</p>
                        </div>
                    </div>
                </div>
                
                <footer className='site-footer'>
                    <p className='footer-text'>Designed and built by me</p>
                    <p className='footer-text'>© 2025 Crystal Truong</p>
                </footer>
            </div>
            </>
        )
    }
}

export default MainPage;
