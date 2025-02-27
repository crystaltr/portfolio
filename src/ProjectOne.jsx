import React, { useState } from 'react';
import './project.css';
import era from './ERA graphic.png'
import comp1 from './comp1.png';
import retryiter from './retryiter.png';
import retry2 from './retry2.png';
import CaseStudyCards from "./CaseStudyCards"; // Import the cards component



function ProjectOne() {
    {/* tldr const [showContentOne, setShowContentOne] = useState(true);
const [showContentTwo, setShowContentTwo] = useState(false); */}
        return (
            <>
            <section className="case-study">
                
            {/* Image Placeholder */}
            <img src={era} alt="era" class='case-study-image'/>
            {/* Title Section */}
            <div className="case-study-title">
            Streamlining vehicle updates for Motor Insurance
            </div>
      
      
            {/* Description */}
            <p className="case-study-description">
              Driven by NPS data and to support reduction of calls in customer support, I focused on the essential features
              needed for customers to easily update their motor policy. The teams main goal was ensuring the experience was seamless 
              with the existing state and met the necessary accessibility and usability requirements.
            </p>
      
            {/* Improvement Section */}
            <h2 className="case-study-heading">How did we improve the payment experience?</h2>
      
            <div className="case-study-table">
                
              <div className="table-column problem">
                
                <h3>Problem</h3>
                <hr
            style={{ borderTop: "0px solid lightgrey" }}
        ></hr>
                <p>
                  As a leading insurance company, these key features were needed to ensure
                  a better experiene for customers to ensure they can freely update or replace their
                  vehicle in the motor insurance policy online instead of calling up causing increase in traffic
                </p>
              </div>
              <div className="table-column solution">
                <h3>Solution</h3>
                <hr
            style={{ borderTop: "0px solid lightgrey" }}
        ></hr>
                <p>
                Our main focus was to enable customers to easily edit or update their vehicle in their motor policy.
                These features reduced customer support traffic and minimized frustration by eliminating the need to call and wait on hold.
                </p>
              </div>
            </div>< br/><br/>
            <section className='design-section'>
                <div className='design-text'>
                <h2>Design process</h2>
                <h3>Discovery</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </section>
          </section>
          {/* 
            <div className='proj-grid'>
                <div class='btn-container' >
                <button onClick={() => {
                    setShowContentOne(true);
                    setShowContentTwo(false);
                }}>Default</button>
                <button onClick={() => {
                    setShowContentOne(false);
                    setShowContentTwo(true);
                }}>TLDR</button>
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
                </div>)}</div>*/}
                <CaseStudyCards />
            
            </>
        )
    }

export default ProjectOne;