import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
            <>
            <div class='about-grid'>
                <div className= "a-col1">
                <p><b>Hi there!</b> < br/>< br/>
                    I’m Crystal and I’m currently a UX designer at an Insurance company. I excel mainly in UX, however I have a growing interesting in UI and DesignOps. I’m currently working on growing my UI skills to become an all rounder designer to create meaningful actions for users. < br/>< br/>
                    Before discovering UX design I was initially going to pursue being a front-end developer! Luckily I found out UX is a lot more fun and I wouldn’t have to face anymore syntax and bugs...< br/>< br/>
                    My portfolio will probably be my last programming project so hopefully there aren't too many bugs hiding!< br/>< br/>
                    Thank you for dropping by •ᴗ•</p></div>
                <div className= "a-col2">
                    <div>
                        <h3>Things I love</h3>
                        <p>Cats<br/></p>
                        <p>Exploring cafes<br/></p>
                        <p>Curating playlists</p>
                    </div>
                    <div>
                        <h3>Things I'm currently learning</h3>
                        <p>Knitting<br/></p>
                        <p>Korean<br/></p>
                        <p>Brazilian Jiu-jitsu</p>
                    </div>
                </div> 
            </div>
            </>
           
        )
    }
}

export default About;