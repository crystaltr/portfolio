import React, { Component } from 'react';
import './landingpage.css';
import { Link } from 'react-router-dom';
import wl from './lpwl.png';
import era from './ERA graphic.png'
import cm from './CM.png'


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
                    <h2>Hi! I'm Crystal,< br/></h2>
                        <p>I’m a UX designer based in Melbourne, Australia who strives to work on products that improve peoples everyday life. Below are some live projects 
                            I’ve worked on and personal projects I’ve been working on!</p>
                    </div>       
                </section>
                {/* <section className="project-section">
                    <div className="project-text">
                        <img src={cm} alt="cm" class='img1'/>
                        <h2>Car advisory platform</h2>
                        <p>
                        An all-in-one platform that simplifies the car buying process by allowing users
                        to research vehicles, connect with trusted dealers and access reviews vetted by a well-known motor insurance company. 
                        The platform also offers car insurance options, making it a convenient one-stop shop for purchasing a car 
                        with confidence and peace of mind.
                        </p>
                        <Link to="/caradvisory" className="p1-btn">Read more ›</Link>
                    </div>
        </section> */}
                <section className="project-section">
                    <div className="project-text">
                    <img src={wl} alt="wl" class='img1'/>
                    <br/><br/><h2>Whatslively redesign</h2>
                        <p>
                        Enhancing the Whatslively experience by introducing two key features to improve usability and event discovery. 
                        This case study focuses on identifying gaps in the current app and designing solutions that better support users in 
                        discovering live events in Australia.
                        </p>
                        <Link to="/whatslively" className="p1-btn">Read more ›</Link>
                    </div>
            </section>
            <section className="project-section">
                    <div className="project-text">
                            <img src={era} alt="era" class='img1'/>
                        <h2>Streamlining vehicle updates for Motor Insurance</h2>
                        <p>
                        Previously, updating a vehicle in a motor insurance policy was unclear and required support. 
                        This project introduced a simple, self-service feature, allowing users to replace or edit their
                         insured vehicle directly in the portal, ensuring a smoother and more efficient experience.
                        </p>
                        <Link to="/amendmotor" className="p1-btn">Read more ›</Link>
                    </div>
            </section>
            <hr
            style={{ borderTop: "0px solid lightgrey" }}
        ></hr><p style={{fontSize: "12px"}}>Designed and built by me</p>
        <p style={{fontSize: "12px"}}>© 2025 Crystal Truong </p>
            </div>
            
           
            </>
        )
    }
}

export default LandingPage;
