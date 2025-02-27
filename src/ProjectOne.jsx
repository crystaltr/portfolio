import React, { useState } from 'react';
import './project.css';
import comp1 from './comp1.png';
import retryiter from './retryiter.png';
import retry2 from './retry2.png';
import CaseStudyCards from "./CaseStudyCards"; // Import the cards component



function ProjectOne() {
    const [showContentOne, setShowContentOne] = useState(true);
    const [showContentTwo, setShowContentTwo] = useState(false);
        return (
            <>
            <section className="case-study">
            {/* Title Section */}
            <div className="case-study-title">
              Enhancing payment experience in an insurance customer portal
            </div>
      
            {/* Image Placeholder */}
            <div className="case-study-image"></div>
      
            {/* Description */}
            <p className="case-study-description">
              Tasked with identifying pain points in the accessibility, usability, and
              key features like payment visibility, editing, and mobile support.
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
                  As a leading insurance company, these key features needed
                  improvement to ensure customers could manage their payments with
                  ease. The key issues with the payment experience were the lack of
                  payment history visibility, no option to delete or update payment
                  methods, and limited visibility of upcoming due payments.
                </p>
              </div>
              <div className="table-column solution">
                <h3>Solution</h3>
                <hr
            style={{ borderTop: "0px solid lightgrey" }}
        ></hr>
                <p>
                  Our main focus was to separate the payment experience into two core
                  pages: Payment History and Direct Debit. Payment History would
                  provide a clear record of all past payments, including the date,
                  payment type, and amount. Direct Debit would allow users to manage
                  their saved payment methods by deleting or updating them and offer a
                  clear view of their upcoming payment schedule.
                </p>
              </div>
            </div>
          </section> 
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
                </div>)}
                <CaseStudyCards />
            </div>
            </>
        )
    }

export default ProjectOne;