import React from 'react'
import './about.css'

const About = () => {
    return (
        <div className="about section__padding " id="about">
            <div className="about__container">
                <div className="about__container-blocks">
                 <div className="about__container-block1">
                    <div className="about__title">
                         <div className="line"><hr/></div> 
                         <h2 className="section__title">About me</h2>
                    </div>
                    <div className="about__descriptions ">
                    <p className="about__discription">I'm a Full stack web developer & a Passinate Web Designer, experiences with HTML, CSS, JavaScript, ReactJS, NodeJS, Express, Mongodb, Firebase,  Github and others, In my free time I like to build different web applications, learn new technologies, and try to improve my technical Skils </p>
                    </div>
                 </div>
                 <div className="about__container-block2">
                     <div className="about__quota">
                         <h1 className="quota-title">The possibilities are beyond the imagination..</h1>
                     </div>
                     <div className="about__explore">
                         <a href="#">Explore more</a>
                    </div>
                 </div>
                 <div className="about__container-block3">
                     <div className="about-summary">
                        <div className="about__titles">
                            <div className="line"><hr/></div>
                            <h2 className="section__title">Experience</h2>
                            <h1 className="about-summary-discription">I'm Fresher Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ratione?</h1>
                        </div>
                        <div className="about__titles">
                            <div className="line"><hr/></div>
                            <h2 className="section__title">Projects</h2>
                            <h1 className="about-summary-discription" >I've completed almost all projects, some are in developing mode where still i'm working</h1 >
                        </div>
                        <div className="about__titles">
                             <div className="line"><hr/></div>
                            <h2 className="section__title">Work</h2>
                            <h1  className="about-summary-discription">First I learn and try to implement. all projects have done by myself</h1 >
                        </div>
                     </div>
                 </div>
                </div>
                

                {/* <div className="about__data">
                   
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">experience</span>
                            <span className="about__info-name"> Fresher <br/> </span>
                        </div>

                        <div>
                            <span className="about__info-title">Projects</span>
                            <span className="about__info-name"> completed <br/>10+</span>
                        </div>
                        <div>
                            <span className="about__info-title">Work</span>
                            <span className="about__info-name"> Self <br/> At Home</span>
                        </div>
                    </div>
                </div> */}

                {/* <div className="about__button">
                    <a href="http://bantyportfolio.herokuapp.com/" target="_blank" className="button button--flex">Online Cv</a>
                    <a download="" href="assets/pdf/Alexa-Cv.pdf" className="button button--flex">
                        Download CV<i className="uil uil-download-alt button-icon"></i>
                    </a>
                </div> */}
            </div>

        </div>
    );
}

export default About;
