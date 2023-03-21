import React, { useState } from 'react';
import './project.css';
import paysearch from './paysearch.png';
import payiter from './payiter.png';
import pay from './pay.png';


function ProjectTwo() {
    const [showContentOne, setShowContentOne] = useState(true);
    const [showContentTwo, setShowContentTwo] = useState(false);
     {
        return (
            <div className='proj-grid'>
                <div class='overview-container'>
                <h2>Payment redesign</h2>
                    <div class='col1'>
                        <h3>Overview</h3>
                        <p>The current payments page lacked accessibility and usability. 
                            There was no visibility on payments, features to delete/update payments and mobile-friendly views. 
                            Therefore, a redesign was needed to allow users to make important changes to their payments easily.  </p>
                    </div>
                    <div class='col2'>
                         <div class="objective-container">
                            <h3>Objective</h3>
                            <p>Allow users to find and use features to manage their payments. </p>
                        </div>
                        <div class="timeline-container">
                            <h3>Timeline</h3>
                            <p>April 2022 - June 2022</p>
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
                <p>Before I was placed on the project a portal redesign user testing was done. From the testing many participants voiced concern for the lack of features available in the payments page, 
                    it was also difficult for users to identify if payments were due and where their payment history was located. < br/>
                    The next steps were to understand the core problems with the current state and what we wanted to achieve with the uplifting of the page. < br/>< br/>
                    <b>Core problems</b>< br/>
                    <p style={{textIndent:'50px'}}>
                        1. Lack of accessibility - not meeting WCAG requirements
                    </p>
                    <p style={{textIndent:'50px'}}>
                        2. No option for users to delete or clearly update card payments or bank accounts
                    </p>
                    <p style={{textIndent:'50px'}}>
                        3. Inaccessible for mobile users
                    </p>
                    Once the problems were identified I started competitor analysis and creating wireframes. 
                    Starting with wireframes allowed me to tackle all cases and figure out the easiest way for a user to perform each action. < br/> < br/>
                    The following is a snippet of discovery that was done.  
                </p>
                <img src={paysearch} alt="paysearch" style={{width: '90%'}}/>
                <h2>Design iterations</h2>
                <p>
                Based on the discovery I removed the use of “breadcrumbs” and opted with separating by pages to allow users to focus on one “job” at a time. < br/>
                The page was split into 3 i.e. payments, payment history and statements. < br/>
                Payments handled the core features i.e. updating or deleting payment methods and view of payment schedule. < br/>
                The following is the iterations of the payment pages in the new design system. < br/> 
                </p>
                <img src={payiter} alt="payiter" style={{width: '90%'}}/>
                <h2>Handover</h2>
                <p>
                The final step was handing over the designs to the developers. In this stage I ensured that it was explicit on how the interactions occurred. 
                I created a clear outline of the flow highlighting any areas that had specific behaviours or requirements that needed to be paid close attention to.  <br/><br/>
                An important part of the processes was the walkthroughs after the developers have completed developing, 
                here the developers went through the pages and I checked if there was anything missing or irregular. 
                During this meeting the developers would also go through accessibility requirements to ensure tabbing has been done properly. < br/>
                </p>
                <img src={pay} alt="pay" style={{width: '90%'}}/>
                </div> )}

                {showContentTwo && (
                <div class='tdlr-container'>
                     <h2>Discovery</h2>
                        <p>
                        The <b>3 core problems</b> identified were:
                            <p style={{textIndent:'50px'}}>
                                1. Lack of accessibility - not meeting WCAG requirements
                            </p>
                            <p style={{textIndent:'50px'}}>
                                2. No option for users to delete or clearly update card payments or bank accounts
                            </p>
                            <p style={{textIndent:'50px'}}>
                                3. Inaccessible for mobile users
                            </p>
                        From here I was able to start competitor analysis and creating wireframes to address all cases a user may encounter 
                        </p>
                        <img src={paysearch} alt="paysearch" style={{width: '90%'}}/>
                <h2>Design iterations</h2>
                <p>
                The big changes made were: < br/>
                - Remove of breadcrumbs instead the one page was split into 3 i.e. payments, payment history and statements < br/>
                - Uplifted with the new design system < br/>
                -Addition of delete and update feature <br/><br/>
                The following images show the iterations of designs
                </p>
                <img src={payiter} alt="payiter" style={{width: '90%'}}/>
                <h2>Handover</h2>
                <p>
                    The final step is the handover process where I hand over the designs to the developers to implement.
                </p>
                <img src={pay} alt="pay" style={{width: '90%'}}/>
                </div>)}
            </div>
        )
    }
}

export default ProjectTwo;