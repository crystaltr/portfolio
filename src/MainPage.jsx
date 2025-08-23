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
                            <img src={dera1} alt="Car Match Project" className='project-image'/>
                            <img src={dera2} alt="Car Match Interface" className='project-image'/>
                            <img src={dera3} alt="Car Match Mobile" className='project-image'/>
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
