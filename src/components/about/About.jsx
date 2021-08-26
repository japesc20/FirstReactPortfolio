import './About.sass'

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function About() {
    return (
        <div className="about-container">
            <div className="left-container"> 
                <div className="title">
                    <h1>About me </h1> <span className="title-bar"></span>
                </div>
                <div className="quote">
                    <h2>"Creativity doesn't wait for that perfect moment. It fashions its own perfect moments out of ordinary ones." - Bruce Garrabrandt</h2>
                </div>
                <div className="bio">
                I'm Jacob Petrakovitz, a Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies. I like to resolve design issues, create fun user interfaces, develop rich web experiences & web applications. When not working or dilly-daddling with new technologies, I attempt to engulf myself in all things fitness. Actually for hire.
                </div>
            </div>
            <div className="right-container">
                <div className="query">
                    Any type of query or discussion?
                    <div className="arrow"><Link className="contact" to="/Contact"><FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" /></Link></div>
                </div>
                <div className="contact">

                </div>
                <div className="arrow">
                    
                </div>
            </div>
        </div>
    )
}

export default About;