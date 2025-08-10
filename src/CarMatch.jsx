import React from 'react';
import './project.css';
import CaseStudyCards from './CaseStudyCards';
import cm from './assets/images/CM.png'



function CarMatch() {

        return (
            <>
             <section className="case-study">
                    
                    <img src={cm} alt="era" className='case-study-image'/>
                    {/* Title Section */}
                    <div className="case-study-title">
                    Car advisory platform
                    </div>
            
            
                    {/* Description */}
                    <p className="case-study-description">
                    An all-in-one platform that simplifies the car buying process by allowing users
                    to research vehicles, connect with trusted dealers and access reviews vetted by a well-known motor insurance company.
                    The platform also offers car insurance options, making it a convenient one-stop shop for purchasing a car
                    with confidence and peace of mind.
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
                        The app currently lacks a way for fans to track artists they want to see live in Australia, making it difficult to stay updated on tours. 
                        Additionally, the only notification method is email, which can easily be overlooked or lost in spam. 
                        These pain points create a risk of fans missing out on their favorite artists, which I addressed in my discovery phase.
                        </p>
                    </div>
                    <div className="table-column solution">
                        <h3>Solution</h3>
                        <hr
                    style={{ borderTop: "0px solid lightgrey" }}
                ></hr>
                        <p>
                            The main advantage that Whatslively relies on is the <b>artist match data</b> by utilising it to its fullest
                            we can improve the search engine experience making it easier for fans to search for gigs and artists. 
                            To reduce FOMO I included push notifications to inform fans straight away when an artist releases tour dates
                            in their area.
                        </p>
                    </div>
                    </div>< br/><br/>
                    <section className='design-section'>
                        <div className='design-text'>
                        <h2>Design process</h2>
                        <h3>Discovery</h3>
                        <p>
                           
                            Based on the points customers have made, I looked into the current state to identify the pain points and potential solutions
                            that would work well within the current flow. <br/>
                            A competitor analysis was also done looking at Whatslivelys direct competitors Songkick, Bandsintown and Spotify. 
                            Songkick was the most refined among the three as the app had clear visuals of artists, a clear layout of 
                            the venue location, line up and a button to direct users to purchase tickets. Songkick also added other nice features like
                            a location filter so you can check venues in other countries. - Although Whatslively is Australia based it would be convienent 
                            if there was a location filter for states. 
                            Both Songkick and Bandsintown inform users through push notifcation of artists touring in their area which is essential 
                            in an app that informs users of concerts. Spotify's main advantage was it has a well defined music ecosystem making it an all in one place. 
                        </p>
        
                        <h3>High fidelity designs</h3>
                        <p>
                            Based on the reviews I collected and the competitor analysis I was able to start on designing how Whatslively could look <br/>
                            The key features I focused on developing were  <br/><br/>
        
                            <b>Push notifications</b> <br/>
                            Following how Songkick push notifcations appear Whatslively can adopt the same principles which will
                            then lead the user to the concert page where the user can purchase tickets and save to their calendar <br/><br/>
        
                            <b>Imagery</b><br/>
                            Connecting to a database like Spotify the app can extract the artist images from the database making it easier
                            to identify artists in the search journey <br/><br/>
        
                            <b>Artist search digestable</b><br/>
                            Taking advantage of the artist match data we can catergorise the search results by the precentage in which
                            the user and the artist match for e.g. here we can see the user is a big fan of Kendrick with an artist 
                            match of 80%, thus it would appear first on the list. 
        
                        </p>
                
                        <h3>Reflections</h3>
                        <p>
                            There is always more that could be done to further improve Whatslively. As it is a new application that targets the Australian market 
                            I'm excited to see how it will continue to develop. 
                            
                        </p>
                        </div>
                    </section>
                </section>
                    <CaseStudyCards />
                    </>
        )
    }

export default CarMatch;
