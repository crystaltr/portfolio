import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import placeholder from './assets/images/placeholder.png'
import WinampPlayer from './WinampPlayer';
import UnderConstruct from './UnderConstruct';
import cmhp from './assets/images/CMHP.png'
import cmw from './assets/images/CMW.gif'
import op from './assets/images/overview panel.png'
import dera1 from './assets/images/dera1.png'
import dera2 from './assets/images/dera2.gif'
import dera3 from './assets/images/dera3.png'
import mp from './assets/images/mp.png'
import doc from './assets/images/doc.png'
import cm from './assets/images/cm.gif'
import RACVDS from './assets/images/RACVDS.png'

import './styles/shared.css'
import './styles/MainPage.css'

class MainPage extends Component {
    render() {
        return (
            <>
            <div className='main-container'>
                <header className='site-header'>
                    <div className='header-info'>
                        <h1 className='designer-name'>Crystal Truong</h1>
                        <p className='designer-title'>UX Designer @ RACV</p>
                    </div>
                <WinampPlayer/>
                </header>
                
                <div className='projects-grid'> <div className='project-card'>
                     <div className='project-images'>
                            <img src={RACVDS} className='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className="tags">
                                <span className="tag">System thinking</span>
                                <span className="tag">UI</span>
                                <span className="tag">Accessibility</span>
                            </div>
                            <h3 className='project-title'>RACV design system</h3>
                            <p className='project-description'>Throughout my time at RACV, I have been a key contributor to the design system. 
                               I've created new components, patterns and improved on existing components. With documentation on either Zeroheight or directly on Figma, I worked closely with 
                               testers and devs to ensure there is clear alignment in the intention and usability of new components. Using AI I've looked at ways to improve the documentation process
                               through Figma plugins to generate keyboard support and accessibility requirements. I am continuing to look for ways to improve the documentation process of the design system and reduce inaccuracies within the handover process.
                            </p>
                        </div>
                    </div>
                      <div className='project-card'>
                        <div className='project-images'>
                            <img src={cm} className='project-image'/>
                        </div>
                        <div className='project-details'>

                            <div className="tags">
                                <span className="tag">Chat integration</span>
                                <span className="tag">Product Innovation </span>
                                <span className="tag">Vibe Coding</span>
                            </div>
                            <h3 className='project-title'>Car match AI chat window integration</h3>
                            <p className='project-description'>In the car research journey I identified a key gap. Users were getting fatigued navigating dense data tables. 
                                I brought forward the concept using Figma make as a key driver to show how it could integrate into our platform. I am currently leading the design of an LLM-powered chat interface within the Car Match platform to make car research conversational and intuitive. 
                                Beyond enhancing user experience, this initiative drives core business goals by boosting awareness of RACV’s extensive product suite. 
                                It seamlessly surfaces contextual cross-selling opportunities (such as insurance, finance, and roadside assistance) and captures user intent to enable personalized, long-term retention.
                            </p>
                        </div>
                    </div>
                    <div className='project-card'>
                        <div className='project-images'>
                            <img src={dera1} className='project-image'/>
                            <img src={dera2} className='project-image'/>
                            <img src={dera3} className='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className="tags">
                                <span className="tag">Mobile Strategy</span>
                                <span className="tag">Problem Framing</span>
                                <span className="tag">User Advocacy</span>
                                <span className="tag">Support Deflection</span>
                                <span className="tag">Accessibility</span>
                            </div>
                            <h3 className='project-title'>RACV App Emergency Roadside Assist: Helping you on the road</h3>
                            <p className='project-description'>Digitised a self service roadside assistance booking system within the RACV app, providing members another avenue to get help on the road.
                                This is RACV’s most well-known, core product relied on by over a million Victorians, delivered in collaboration with engineering, product and business stakeholders. 
                                By integrating real-time patrol tracking (an "Uber-style" experience) directly into the RACV app, we made roadside assistance faster, more transparent, and accessible anywhere across Victoria.
                            </p>
                        </div>
                    </div>
                
                    <div className='project-card'>
                        <div className='project-images'>
                            <img src={cmhp} className='project-image'/>
                            <img src={cmw} className='project-image'/>
                            <img src={op} className='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className="tags">
                                <span className="tag">Problem Framing</span>
                                <span className="tag">Stakeholder Alignment</span>
                                <span className="tag">Strategic Foresight</span>
                                <span className="tag">Accessibility</span>
                            </div>
                            <h3 className='project-title'><a href="https://www.racv.com.au/car-match.html" target="_blank">Car Match: A helpful guide to your car purchasing journey</a></h3>
                            <p className='project-description'>Moving on from the member portal, I joined a new project to work on delivering an all-in-one platform that simplifies the car buying process by allowing users to research vehicles, connect with trusted dealers and access reviews vetted by a well-known motor insurance company. 
                                This was an interesting project as I was able to add new components to the design system, write up component and accessibility documentation and do in-person testing with the staging site. This platform gave RACV another avenue where we could connect
                                with members in another part of their car journey and assist them in the car market, by providing accurate, trustworthy car information and car reviews by experts and RACV members.</p>
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
