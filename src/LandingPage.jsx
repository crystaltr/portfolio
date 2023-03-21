import React, { Component } from 'react';
import './landingpage.css';
import { Link } from 'react-router-dom';
import chev from './chev.png';
import retry from './retry.png';


class LandingPage extends Component {
    render() {
        return (
            <>
            <div className='title'>
              <h1>Intentional designs for < br/> everyday use</h1>
            </div>
            <div class="rect-container">
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
            </div>
            <div className='p1-grid'>
                <img src={retry} alt="retry" class='img1'/>
                <div className='p1-description'>
                <h1>Retry feature</h1>
                <p>Giving users the ability to retry payments within the portal</p>
                <Link to="/project1" className="p1-btn"><b>View project</b> <img src={chev} width="25" height="25"/></Link>
                </div>
            </div>
           
            </>
        )
    }
}

export default LandingPage;
