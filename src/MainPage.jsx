import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import placeholder from './assets/images/placeholder.png'
import cmhp from './assets/images/CMHP.png'
import cmw from './assets/images/CMW.gif'
import op from './assets/images/overview panel.png'
import dera1 from './assets/images/dera1.png'
import dera2 from './assets/images/dera2.gif'
import dera3 from './assets/images/dera3.png'

import './styles/shared.css'
import './styles/MainPage.css'

class MainPage extends Component {
    render() {
        return (
            <>
            <div className='main-container'>
                <header className='site-header'>
                    <h1 className='designer-name'>Crystal Truong</h1>
                    <p className='designer-title'>UX Designer @ RACV</p>
                </header>

                  <div className='projects-grid'>
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
                            <h3 className='project-title'>RACV App Emergency Roadside Assist</h3>
                            <p className='project-description'>After a year of travelling around the world, I have continued my work with RACV. I am currently desigining a feature within the RACV app that will allow Australians 
                                to receive assistance with a breakdown wherever they are in Victoria. This project has been super interesting trying to integrate an "uber experience" within our flow and making sure the designs 
                                align with the standard iOS and Android patterns to create a seamless experience. We are still actively shaping the next phase of roadside assistance, solving complex problems that will deliver even greater value to members!
                            </p>
                        </div>
                    </div>
                
                <div className='projects-grid'>
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
                            <h3 className='project-title'><a href="https://www.racv.com.au/car-match.html" target="_blank">Car Match</a></h3>
                            <p className='project-description'>Moving on from the member portal, I joined a new project to work on delivering an all-in-one platform that simplifies the car buying process by allowing users to research vehicles, connect with trusted dealers and access reviews vetted by a well-known motor insurance company. 
                                This was an interesting project as I was able to add new components to the design system, write up component and accessibility documentation and do in-person testing with the staging site. This platform gave RACV another avenue where we could connect
                                with members in another part of their car journey and assist them in the car market, by providing accurate, trustworthy car information and car reviews by experts and RACV members.</p>
                        </div>
                    </div>
                </div>

                <div className='projects-grid'>
                    <div className='project-card'>
                        <div className='project-images'>
                            <img src={placeholder} className='project-image'/>
                            <img src={placeholder} alt="Car Match Interface" className='project-image'/>
                            <img src={placeholder} className='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className="tags">
                                <span className="tag">Portal Optimisation</span>
                                <span className="tag">Support Deflection</span>
                                <span className="tag">Digital Transformation</span>
                                <span className="tag">Accessibility</span>
                            </div>
                            <h3 className='project-title'>RACV Member Portal</h3>
                            <p className='project-description'>During my first year at RACV I was put on RACVs member portal. I had the opportunity to lead the uplift of the payment 
                                experience, allowing members to add/delete/update payment methods. These features drove more members to log into the portal instead of having to wait in the queue 
                                to get someone to help them handle their payments. Another uplift we did was add in more functionality for motor insurance products, this gave members more control
                                on their insurance products. Now members can update/replace their vehicles, change their addresses and view important documents. Our goal for the member experience
                                uplift was give <b>members control of their insurance products</b> and <b>alleviate calls to the member support team</b>. I worked closely with the stakeholders and my team to deliver a better
                                experience.
                            </p>
                        </div>
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
