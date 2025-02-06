import React, { Component } from 'react';
import './landingpage.css';
import { Link } from 'react-router-dom';
import retry from './retry.png';
import payment from './payment.png';


class LandingPage extends Component {
    render() {
        return (
            <>
            <div class='t-section'>
                <h1>Intentional designs for < br/> everyday use</h1>
                <div class="cube">
                    <div class="face front"></div>
                    <div class="face back"></div>
                    <div class="face left"></div>
                    <div class="face right"></div>
                    <div class="face top"></div>
                    <div class="face bottom"></div>
                </div>
            </div>
            <div className='p1-grid'>
                <img src={payment} alt="payment" class='img1'/>
                <div className='p1-description'>
                <h1>Car match</h1>
                <p>Car Match is an all-in-one platform that simplifies the car buying process by allowing users <br/> to research vehicles, connect with 
                    trusted dealers, and access RACV-approved information and reviews. <br/>
                    The platform also offers car insurance options, making it a convenient one-stop shop for purchasing a car <br/> with confidence and peace of mind.</p>
                <Link to="/project2" className="p1-btn">Check it </Link>
                </div>
            </div>

            <div className='p1-grid'>
                <div className='p2-description'>
                    <h1>Payment redesign</h1>
                    <p>A redesign of the payments pages to allow users to intuitively update <br/> and delete payment methods.</p>
                    <Link to="/project1" className="p1-btn">View project</Link>
                </div>
                <img src={payment} alt="retry" class='img2'/>
            </div>
           
            </>
        )
    }
}

export default LandingPage;
