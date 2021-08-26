import React from 'react'
import './Portfolio.sass'
import portfolio from '../../images/portfolio.png'
import mk from '../../images/mk.png'
import whiteboard from '../../images/whiteboard.png'

function Portfolio() {
    return (
        <div>
            <div className="portfolio-container">
                <div className="portfolio-grid">
                    <div class="grid-item"><img src={portfolio} />
                        <div className="">
                                <div class="project-heading">
                                    <button className="code">View Code</button>
                                    <button className="demo">Demo</button>
                                </div>
                            </div>
                    </div>
                    <div class="grid-item"><img src={mk} />
                    <div className="">
                                <div class="project-heading">
                                    <button className="code">View Code</button>
                                    <button className="demo">Demo</button>
                                </div>
                            </div></div>
                    <div class="grid-item"><img src={whiteboard} />
                    <div className="">
                                <div class="project-heading">
                                    <button className="code">View Code</button>
                                    <button className="demo">Demo</button>
                                </div>
                            </div></div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio