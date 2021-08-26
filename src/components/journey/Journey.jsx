import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';
import './Journey.sass';

import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";

function Journey() {
    return (
        <div>
            <div className="timeline-content">
                <div className="title-container"> 
                    <h1><strong>Journey of Me</strong></h1>
                </div>
                <div className="arrow">
                    <FontAwesomeIcon icon={faLevelDownAlt} className="icon" />
                </div>
                    <ul className="timeline">
                        <Fade bottom> 
                        <li className="event" data-date="2002">
                            <h3>Hello, World!</h3>
                            <p>
                                At 13 years old, I wrote my first line of code in HTML. "Hello, World!", was placed right into the browser by regular Microsoft Notepad. I was hooked. 
                                I would then scour through the code of all of my favorite anime websites, learning as much as I could about structuring and positioning. 
                                Until soon I realized I needed to make graphics. Photoshop was what I needed.
                            </p>
                        </li>
                        </Fade>
                        <Fade bottom> 
                        <li className="event" data-date="2005">
                            <h3>Losing Momentum</h3>
                            <p>
                                A couple years and multiple 1990s style Anime layouts later, I started to lose the fire that began only 2 years prior. High school sports and socializing became the most 
                                important thing. Coding quickly fell to the way side as I enjoyed just being a teenager. 
                            </p>
                        </li>
                        </Fade>
                        <Fade bottom> 
                        <li className="event" data-date="2009">
                            <h3>College vs Military</h3>
                            <p>
                                Several years would pass and coding was a very sporadic enjoyment that would only last a few weeks at a time. With 1.5 years of college under my belt I was still 
                                spinning in place. Prerequisites for Computer Engineering was not going well. So, I let life take a 90 degree turn and I accepted a one way ticket from Uncle Sam 
                                to the beautiful place of Marine Corps Recruit Depot - San Diego.
                            </p>
                        </li>
                        </Fade>
                        <Fade bottom> 
                        <li className="event" data-date="2020">
                            <h3>Global Pandemic</h3>
                            <p>
                                After a career in Machining for nearly 10 years, the work was becoming dull and very uninteresting. I found that it is difficult to find a company that 
                                will allow you to continue learning new machines, types of machining, troubleshooting, etc. Shortly after moving jobs, it occurred to me. Why don't I start coding 
                                again!? I hear people can get into the career field without a degree. Right? The research began and the fire was lit again and brighter then ever. But, a hidden blessing 
                                had happened during a very unfortunate time, I lost my job due to Covid. Immediately, I created a game plan, my personal pathway for what I wanted and 
                                expected from myself. <br/>
                                The journey began.
                            </p>
                        </li>
                        </Fade>
                        <Fade bottom> 
                        <li className="event" data-date="2021">
                            <h3>New City - New Career?</h3>
                            <p>
                                Six months later, I packed up my things and moved to the city of Detroit in sight for a new career.
                            </p>
                    
                            <p className="quote"><strong>"Success is not final; failure is not fatal: It is the courage to continue that counts."</strong></p>
                            <p>-- Winston S. Churchill</p>
                        </li>
                        </Fade>
                    </ul>
            </div>
        </div>
    )
}

export default Journey;

