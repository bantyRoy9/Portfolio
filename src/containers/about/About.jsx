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
                    <p className="about__discription">I am a dedicated and motivated MERN stack developer with one year of professional experience. Throughout my journey, I have gained a deep understanding of the MERN stack (MongoDB, Express.js, React.js, and Node.js) and have successfully delivered robust and scalable web applications. I am committed to continuously learning and implementing best practices to enhance the quality and efficiency of my work. </p>
                    </div>
                 </div>
                 <div className="about__container-block2">
                     <div className="about__quota">
                         <h1 className="quota-title">The possibilities are beyond the imagination..</h1>
                     </div>
                     <div className="about__explore">
                         <a target={'_blank'}  rel="noreferrer" href="https://drive.google.com/file/d/13sYqOoUZFmQGGh-aPHllMLJLar1gA09U/view?usp=sharing">Explore more</a>
                    </div>
                 </div>
                 <div className="about__container-block3">
                     <div className="about-summary">
                        <div className="about__titles">
                            <div className="line"><hr/></div>
                            <h2 className="section__title">Experience</h2>
                            <h1 className="about-summary-discription">I've 1+ Year of experience in UI development at <a href='www.50hertz.in' target='_blank'>50 Hertz Ltd.</a></h1>
                        </div>
                        <div className="about__titles">
                            <div className="line"><hr/></div>
                            <h2 className="section__title">Projects</h2>
                            <h1 className="about-summary-discription" >I've selected some major projects like <a target='_blank' rel="noreferrer" href='https://devtourbookingapp.netlify.app/'>TourBooking Application</a>, <a target='_blank' rel="noreferrer" href='https://devapnabank.netlify.app/'>Banking application</a> etc. i've completed almost all projects, some are in development where i'm still working</h1 >
                        </div>
                     </div>
                 </div>
                </div>
            </div>

        </div>
    );
}

export default About;
