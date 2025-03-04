import React, { useState } from 'react';
import './project.css';
import era from './ERA graphic.png'
import CaseStudyCards from "./CaseStudyCards"; // Import the cards component
import erap from './erap.gif'
import eera from './eera.png'
import erar from './erar.png'
import state from './stater.png'


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
            <h2 className="case-study-heading">How did we improve the experience?</h2>
      
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
                <p>
                    The project kicked off with connecting with the key stakeholders: The motor insurance subject matter specialist
                    Product owner, Tech specialist, Devs and Lead designer. < br/><br/>
                    In this meeting we identify what are the key features that are needed and what is feasible for the projected timeline of delivery.
                    After identifying all the key requirements we were able to start on breaking down the current work flow and start including the ability to 
                    edit and update the vehicle in the policy
                    
                    A competitor analysis was done analysing key competitors AAMI, iSelect, Budget direct, Woolworths and Allianz. From here I was able to identify inline editing was
                    the most suitable solution to ensure a streamlined experience in comparison to taking the customer to a new page or a modal appearing on screen. 
                </p>

                <h3>High fidelity designs</h3>
                <img src={erap} alt="erap" />
                <p>
                    Based on the requirements given and the competitor analysis I was able to start on designing how a customer could edit their vehicle to change to colour or registration and entirely update
                    their vehicle which resulted in a new policy. <br/>
                    The key components I took into account was <br/><br/>

                    <b>A seamless experience</b> <br/>
                    By having inline editing this makes it easier for the customer to identify which section of the policy they are amending, ensuring there is no confusion with where
                    they are the flow. <br/><br/>

                    <b>Differentiating between 'Edit' and 'Replace'</b><br/>
                    Working with the copywrite team we wanted to make it clear what options the customer had when they updated their motor policy. We added a description in the modal
                    providing customers a clear description of what they can do. <br/><br/>

                    <b>Compatibility in mobile</b><br/>
                    Our digital metrics state that 70% of customers log into the customer portal on their mobile device, therefore it was essential that the flow stayed consistent and
                    easy to view in mobile screens. 

                    These designs are reviewed and iterated after multiple design reviews with devs, project owner and business analyst and finally with the head of design to ensure
                    the designs are in line with the overall digital experience.
                </p>

                <h3>Handover</h3>
                <p>
                    After going through design approvals I start setting up the handover file. The key aspects of the handover is links to the relevant JIRA ticket, MIRO board and 
                    confluence page. Then I would have three breakpoints: Desktop, tablet and mobile views, each breakpoint showing the flow in which a customer would edit or replace 
                    their vehicle. <br/><br/>

                    <img src={eera} alt="eera" style={{width: "100%"}}/><br/><br/>
                    <img src={erar} alt="erar" /><br/><br/>

                    In some cases I would set up a "State" section, this would include any error states, edge cases or specific requirements we would need to catch that is
                    not included in the existing design system documentation. <br/><br/>

                    <img src={state} alt="stater" /> <br/><br/>

                    After the handover documentation is complete I set up a meeting with the dev and testers to walkthrough the flow to catch any further questions or edge cases
                    that we may have missed in previous meetings. Once this walkthrough is done a santity check is done with the devs to ensure the designs translated accurately 
                    onto the live website. 

                <h3>Outcome</h3>
                <p>
                    6 months after the rollout of the amendment feature <b>19,027 updates</b> were made by customers which has reduced the need to call the customer support team 
                </p>
                    
                </p>
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