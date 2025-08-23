import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import placeholder from './assets/images/placeholder.png'
import cmhp from './assets/images/CMHP.png'
import cmw from './assets/images/CMW.gif'
import op from './assets/images/overview panel.png'

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
                            <img src={placeholder} alt="Car Match Project" className='project-image'/>
                            <img src={placeholder} alt="Car Match Interface" className='project-image'/>
                            <img src={placeholder} alt="Car Match Mobile" className='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className="tags">
                                <span className="tag">Design Strategy</span>
                                <span className="tag">Problem Framing</span>
                                <span className="tag">Stakeholder Alignment</span>
                                <span className="tag">Task Flows</span>
                                <span className="tag">Developer Handoff</span>
                            </div>
                            <h3 className='project-title'>Digitise Emergency roadside assist</h3>
                            <p className='project-description'>A feature within the RACV app allowing Australians to get help through the app</p>
                        </div>
                    </div>
                
                <div className='projects-grid'>
                    <div className='project-card'>
                        <div className='project-images'>
                            <img src={cmhp} alt="Car Match Project" className='project-image'/>
                            <img src={cmw} alt="Car Match Interface" className='project-image'/>
                            <img src={op} alt="Car Match Mobile" className='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className="tags">
                                <span className="tag">Design Strategy</span>
                                <span className="tag">Problem Framing</span>
                                <span className="tag">Stakeholder Alignment</span>
                                <span className="tag">Task Flows</span>
                                <span className="tag">Developer Handoff</span>
                            </div>
                            <h3 className='project-title'>Car Match</h3>
                            <p className='project-description'>An all-in-one platform that simplifies the car buying process by allowing users to research vehicles, connect with trusted dealers and access reviews vetted by a well-known motor insurance company. The platform also offers car insurance options, making it a convenient one-stop shop for purchasing a car with confidence and peace of mind.</p>
                        </div>
                    </div>
                    
                    <div className='project-card'>
                        <div className='project-images'>
                            <img src={placeholder} alt="Motor Insurance Project" className='project-image'/>
                            <img src={placeholder} alt="Vehicle Update Interface" className='project-image'/>
                            <img src={placeholder} alt="Portal Updates" className='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className="tags">
                                <span className="tag">Design Strategy</span>
                                <span className="tag">Problem Framing</span>
                                <span className="tag">Stakeholder Alignment</span>
                                <span className="tag">Task Flows</span>
                                <span className="tag">Developer Handoff</span>
                            </div>
                            <h3 className='project-title'>Streamlining vehicle updates for Motor Insurance</h3>
                            <p className='project-description'>Previously, updating a vehicle in a motor insurance policy was unclear and required support. This project introduced a simple, self-service feature, allowing users to replace or edit their insured vehicle directly in the portal, ensuring a smoother and more efficient experience.</p>
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
