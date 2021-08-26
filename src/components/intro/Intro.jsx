import './Intro.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import profile from '../../images/profile2.png'

function Intro() {
    return (
        <div>
            <div className="intro">
                <div className="social-container">
                    <div className="social">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                    </div>
                </div>
                <div className="intro-container">
                    <span className="hello">Hello, I'm </span>
                    <div className="name">Jacob Petrakovitz</div>
                    <div className="title">Front-End Developer</div>
                    <div className="bio">
                    A web designer and developer based in Detroit, MI. Passionately bringing creative user friendly web applications to life!


                    </div>
                    {/* <div className="social-container">
                        <div className="social">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </div>
                    </div> */}
                    
                </div>
                <div className="picture-container">
                <img src={profile} alt="Profile picture" className="profile-pic"/>
                </div>
            </div>
        </div>
    )
}

export default Intro