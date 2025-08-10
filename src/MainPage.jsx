import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import placeholder from './assets/images/placeholder.png'

class MainPage extends Component {
    render() {
        return (
            <>
            <div className='main-container'>
                <div className='hero-container'>
                <h2>Hi! I'm Crystal,< br/></h2>
                        <p>I’m a UX designer based in Melbourne, Australia who strives to work on products that improve peoples everyday life. Below are some live projects 
                            I’ve worked on and personal projects I’ve been working on!</p>
                </div>
                <section className='project-section'>
                    <div><img src={placeholder}/><img src={placeholder}/><img src={placeholder}/></div>
                    < br/>
                    <div className="tags">
                        <span className="tag">Design Strategy</span>
                        <span className="tag">Problem Framing</span>
                        <span className="tag">Stakeholder Alignment</span>
                        <span className="tag">Task Flows</span>
                        <span className="tag">Developer Handoff</span>
                        </div>
                    <h2>Car match</h2>
                    <p>
                        An all-in-one platform that simplifies the car buying process by allowing users
                        to research vehicles, connect with trusted dealers and access reviews vetted by a well-known motor insurance company. 
                        The platform also offers car insurance options, making it a convenient one-stop shop for purchasing a car 
                        with confidence and peace of mind.
                    </p>
                </section>
                <section className='project-section'>
                    <div><img src={placeholder}/><img src={placeholder}/><img src={placeholder}/></div>
                    < br/>
                    <div className="tags">
                        <span className="tag">Design Strategy</span>
                        <span className="tag">Problem Framing</span>
                        <span className="tag">Stakeholder Alignment</span>
                        <span className="tag">Task Flows</span>
                        <span className="tag">Developer Handoff</span>
                        </div>
                    <h2>Streamlining vehicle updates for Motor Insurance</h2>
                    <p>
                        Previously, updating a vehicle in a motor insurance policy was unclear and required support. 
                        This project introduced a simple, self-service feature, allowing users to replace or edit their
                         insured vehicle directly in the portal, ensuring a smoother and more efficient experience.
                    </p>
                </section>
                <hr style={{ borderTop: "0px solid lightgrey" }}></hr><p style={{fontSize: "12px"}}>Designed and built by me</p>
                <p style={{fontSize: "12px"}}>© 2025 Crystal Truong </p>
            </div>
            </>
        )
    }
}

export default MainPage;
