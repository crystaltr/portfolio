import React from 'react';
import './project.css';
import wl2 from './WL graphic.png'
import CaseStudyCards from "./CaseStudyCards"; // Import the cards component
import rev1 from './rev1.png'
import rev2 from './rev2.png'
import rev3 from './rev3.png'
import comp from './comp.png'
import ideation from './ideation.png'
import wlgif from './wlgif.gif'
import c1 from'./c1.png'
import c2 from './c2.png'


function CaseStudy() {

        return (
        <>
          <section className="case-study">
                
            {/* Image Placeholder */}
            <img src={wl2} alt="era" class='case-study-image'/>
            {/* Title Section */}
            <div className="case-study-title">
            Whatslively redesign 
            </div>
      
      
            {/* Description */}
            <p className="case-study-description">
              Whatslively is a mobile app that informs you of every concert happening in your area, this is done by
              scanning your Apple music or Spotify. As an avid concert goer I was excited to discover an app exclusively for 
              Australia and so I'd never have 'FOMO' (Fear of missing out). 
              As this app is quite new to the market I wanted to look at ways to uplift the app and what I envision the app could
              become with a few UX tweaks. 
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
                    I started off first looking at reviews on the App store and Play store to gain any qualatative data. 
                    The main areas reviews called out were: <br/><br/>
                    <b>Lack of imagery</b><br/>
                    When searching or sifting through artists users can only see a wall of text and no way to differentiate
                    artists with the same or similar name. <br/><br/>
                    <img src={rev1} alt="rev1" class="revimg" /><img src={rev2} alt="rev2" class="revimg"/><br/>
                    <b>Lack of notice on concerts</b><br/>
                    With only email users have to rely on going through their inbox or looking through the app to see 
                    if an artist they are interested in is touring in Australia. These tedious actions could be 
                    prevented by adding in push notifcations which instantly inform users from the app if an artist is touring or not. 
                    <img src={rev3} alt="rev3" class="revimg"/><br/>
                    < br/><br/>
                    Based on the points customers have made, I looked into the <b>current state</b> to identify the pain points and potential solutions
                    that would work well within the current flow. <br/><br/>
                    <img src={c1} alt="c1" style={{width: "100%"}} /><br/>
                    <img src={c2} alt="c2" style={{width: "50%"}} /><br/><br/><br/>
                    A competitor analysis was also done looking at Whatslivelys direct competitors Songkick, Bandsintown and Spotify. 
                    Songkick was the most refined among the three as the app had clear visuals of artists, a clear layout of 
                    the venue location, line up and a button to direct users to purchase tickets. Songkick also added other nice features like
                    a location filter so you can check venues in other countries. - Although Whatslively is Australia based it would be convienent 
                    if there was a location filter for states. 
                    Both Songkick and Bandsintown inform users through push notifcation of artists touring in their area which is essential 
                    in an app that informs users of concerts. Spotify's main advantage was it has a well defined music ecosystem making it an all in one place. 
                    <img src={comp} alt="comp" style={{width: "100%"}} /><br/>
                    
                </p>

                <h3>High fidelity designs</h3>
                <img src={ideation} alt="ideation" style={{width: "100%"}} />                <p>
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

                <img src={wlgif} alt="wlgif" class="wlgif"/>

                <h3>Reflections</h3>
                <p>
                    There is always more that could be done to further improve Whatslively, like allowinig integration with 
                    the google/ios calendar for concerts fans are attending, improving visibility of what gigs are occuring on the day
                    or enhancing the overall UI interface. As it is a new application that targets the Australian market 
                    I'm excited to see how it will continue to develop. 
                    
                </p>
                </div>
            </section>
          </section>
            <CaseStudyCards />
            </>
        )
    }

export default CaseStudy;