import React, { Component } from 'react';
import './landingpage.css';
import { Link } from 'react-router-dom';
import wl from './assets/images/lpwl.png';
import era from './assets/images/ERA graphic.png'
import cm from './assets/images/CM.png'


class LandingPage extends Component {
    render() {
        return (
            <>
            <div className='landing-container'>
                <section className='hero-section'>
                    <div className='cube-wrapper'>
                        <div className="cube">
                            <div className="face front"></div>
                            <div className="face back"></div>
                            <div className="face left"></div>
                            <div className="face right"></div>
                            <div className="face top"></div>
                            <div className="face bottom"></div>
                        </div>
                    </div>
                    {/*Introduction section*/}
                    <div className='hero-text'>
                    <h2>Hi! I'm Crystal,< br/></h2>
                        <p>I’m a UX designer based in Melbourne, Australia who strives to work on products that improve peoples everyday life. Below are some live projects 
                            I’ve worked on and personal projects I’ve been working on!</p>
                    </div>       
                </section>
                <section className="project-section">
                    <div className="project-text">
                    <img src={wl} alt="wl" className='img1'/>
                    <br/><br/><h2>Enhancing visibility in events with Whatslively</h2>
                    <div className="tags">
                        <span className="tag">Feature Prioritisation</span>
                        <span className="tag">Problem Framing</span>
                        <span className="tag">Competitor Analysis</span>
                        <span className="tag">Prototyping</span>
                        <span className="tag">Product Thinking</span>
                    </div>
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
                            <img src={era} alt="era" className='img1'/>
                        <h2>Streamlining vehicle updates for Motor Insurance</h2>
                        <div className="tags">
                        <span className="tag">Design Strategy</span>
                        <span className="tag">Problem Framing</span>
                        <span className="tag">Stakeholder Alignment</span>
                        <span className="tag">Task Flows</span>
                        <span className="tag">Developer Handoff</span>
                        </div>
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
