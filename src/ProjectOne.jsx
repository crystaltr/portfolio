import React, { useState } from 'react';
import './project.css';
import comp1 from './comp1.png';
import retryiter from './retryiter.png';
import retry2 from './retry2.png';


function ProjectOne() {
    const [showContentOne, setShowContentOne] = useState(true);
    const [showContentTwo, setShowContentTwo] = useState(false);
     {
        return (
            <div className='proj-grid'>
                <div class='overview-container'>
                <h2>Retry feature</h2>
                    <div class='col1'>
                        <h3>Overview</h3>
                        <p>A common feature that many companies have implemented was the ability to retry payments. To reduce calls and ensure users are able to fix payments 
                            due to insufficient funds or expired cards the retry feature was launched.  </p>
                    </div>
                    <div class='col2'>
                         <div class="objective-container">
                            <h3>Objective</h3>
                            <p>Allow users to retry payment to reduce calls and time for both call agents and customers</p>
                        </div>
                        <div class="timeline-container">
                            <h3>Timeline</h3>
                            <p>September 2022 - November 2022</p>
                        </div>
                    </div>
                </div>
                <div class='btn-container' >
                <button onClick={() => {
                    setShowContentOne(true);
                    setShowContentTwo(false);
                }}>Default</button>
                <button onClick={() => {
                    setShowContentOne(false);
                    setShowContentTwo(true);
                }}>TDLR</button>
                </div>
                {showContentOne && (
                <div class='default-container'>
                <h2>Discovery</h2>
                <p>The feature was driven by many calls and NPS becoming top priority for delivery. 
                    Therefore, user testing and extensive research could not be allocated in the discovery phase. I spent most of my time going through apps I frequently used that had the “retry feature” and analysed how they implemented this into their applications. 
                    Here is a snippet of competitor analysis that was done where we highlighted feasibility and how we could utilise the components in our design system to ensure a seamless experience. </p>
                <img src={comp1} alt="comp1" style={{width: '90%'}}/><br/>
                <h2>Design iterations</h2>
                <p>
                    Based on the analysis, I was able to identify common components companies used to communicate the feature. I decided on using a banner incorporated with dual buttons. < br/>
                    The two actions were<b> Retry payment</b> or <b>Update card payment</b>.  To ensure both actions had equal weight, a ghost button was used over a primary button. <br/>
                    The following images show the iterations of designs starting from having only a retry payment button to the final solution of dual buttons. 
                </p>
                <img src={retryiter} alt="retryiter" style={{width: '90%'}}/>
                <p>
                    The designs are then reviewed by the business analyst, and product owner, developers, testers and the head of digital for approvals. During these discussions we go through tech feasibility, requirements (business, legal and security) and discuss any further behaviours/functionality that needed to be implemented.
                </p>
                <h2>Handover</h2>
                <p>
                    The final step is the handover process where I hand over the designs to the developers to implement. 
                    I believe this is a crucial step throughout the entire design process. It is essential for there to be enough detail for developers to accurately develop the designs and ensure all edge cases are to be accounted for. < br/>
                    Therefore, I tend to work closely with the developers if they have any questions and establish a layout that clearly shows the designs and the next steps/interactions.
                </p>
                <img src={retry2} alt="retry2" style={{width: '90%'}}/>
                </div> )}

                {showContentTwo && (
                <div class='tdlr-container'>
                     <h2>Discovery</h2>
                        <p>Competitor analysis was done where we highlighted feasibility and how 
                            we could utilise the components in our design system to ensure a seamless experience. 
                        </p>
                        <img src={comp1} alt="comp1" style={{width: '90%'}}/>
                        <br/>
                    <h2>Design iterations</h2>
                        <p>
                        Based on the analysis I was able to identify common components companies used to communicate the feature. < br/>
                        The key components used: <br/><br/>
                        - A banner <br/>
                        - Dual buttons <br/><br/>
                        The following images show the iterations of designs
                        </p>
                        <img src={retryiter} alt="retryiter" style={{width: '90%'}}/><br/>
                    <h2>Handover</h2>
                        <p>
                            The final step is the handover process where I hand over the designs to the developers to implement.
                        </p>
                        <img src={retry2} alt="retry2" style={{width: '90%'}}/>
                </div>)}
            </div>
        )
    }
}

export default ProjectOne;