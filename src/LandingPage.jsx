import React, { Component } from 'react';
import './landingpage.css';
import { Link } from 'react-router-dom';
import placeholder from './placeholder.png';


class LandingPage extends Component {
    render() {
        return (
            <>
            <div className='landing-container'>
                <section className='hero-section'>
                    <div className='cube-wrapper'>
                        <div class="cube">
                            <div class="face front"></div>
                            <div class="face back"></div>
                            <div class="face left"></div>
                            <div class="face right"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                    {/*Introduction section*/}
                    <div className='hero-text'>
                    <h2>Hi, I'm Crystal< br/></h2>
                        <p>I’m a UX designer who strives to work on products that improve peoples everyday life. Below is some live projects 
                            I’ve worked on and personal projects I’ve been working on!</p>
                    </div>       
                </section>
                <section className="project-section">
                    <div className="project-text">
                        <h2>Whatslively</h2>
                        <p>
                        Enhancing the Whatslively experience by introducing two key features to improve usability and event discovery. 
                        This case study focuses on identifying gaps in the current app and designing solutions that better support users in 
                        finding and managing live events.
                        </p>< br/>< br/>< br/>< br/>< br/>< br/>
                        <a href="#" className="project-link">Check it out ›</a>
                    </div>
                    <img src={placeholder} alt="placeholder" class='img1'/>
            </section>
            <section className="project-section">
                    <div className="project-text">
                        <h2>Car match</h2>
                        <p>
                        Car Match is an all-in-one platform that simplifies the car buying process by allowing users
                        to research vehicles, connect with trusted dealers, and access RACV-approved information and reviews. 
                        The platform also offers car insurance options, making it a convenient one-stop shop for purchasing a car 
                        with confidence and peace of mind.
                        </p>< br/>< br/>< br/>< br/>
                        <a href="#" className="project-link">Check it out ›</a>
                    </div>
                    <img src={placeholder} alt="placeholder" class='img1'/>
            </section>
            <section className="project-section">
                    <div className="project-text">
                        <h2>Payment customer portal redesign</h2>
                        <p>
                        A redesign of the payments pages to allow users to intuitively update <br/> 
                        and delete payment methods.
                        </p>< br/>< br/>< br/>< br/>< br/>< br/>
                        <Link to="/project2" className="p1-btn">Check it out ›</Link>
                    </div>
                    <img src={placeholder} alt="placeholder" class='img1'/>
            </section>
            </div>

           {/*
            <div className='p1-grid'>
                <div className='p2-description'>
                    <h1>Payment redesign</h1>
                    <p>A redesign of the payments pages to allow users to intuitively update <br/> and delete payment methods.</p>
                    <Link to="/project1" className="p1-btn">View project</Link>
                </div>
                <img src={retry} alt="retry" class='img2'/>
        </div>*/}
           
            </>
        )
    }
}

export default LandingPage;
