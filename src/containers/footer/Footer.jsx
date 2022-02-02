import React from 'react'
import './footer.css'

const Footer =() =>{
    return (
        <div className="footer section__padding">
            <div className="footer__container">
                <div className="footer__details">
                    <div className="footer__name">
                    <div className="line"><hr/></div>  
                        <h1>Banty_Roy</h1>
                        <span>Full Stack web developer</span>
                    </div>
                    <div class="footer__social">

                    <a href="https://www.linkedin.com/in/banty-rai-8ab795197/" class="footer__social-links"
                        target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>

                    <a href="https://github.com/bantyRoy9" class="footer__social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-github"></i>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100008586853201" class="footer__social-link"
                        target="_blank" rel="noreferrer">
                        <i class="uil uil-facebook-f"></i>
                    </a>

                    <a href="https://www.instagram.com/_banty_roy_/" class="footer__social-link " target="_blank" rel="noreferrer">
                        <i class="uil uil-instagram"></i>
                    </a>

                </div>
                </div>
                <div className="footer__getintouch">
                    <div className="address">
                        <div className="line"><hr/></div>  
                        <h3>Get In Touch </h3>
                        <span><br /> 16/166-67 Trilokpuri <br /> Mayur-Vihar Ph-1 <br /> New Delhi - 110091</span>
                    </div>
                </div>
                <div className="footer__links">
                    <div className="line"><hr/></div>  
                    <h3>Links</h3>
                    <a href="#home" className="footer__link">
                        Home
                    </a>
                    <a href="#about" className="footer__link">
                         About
                    </a>
                    <a href="#skill" className="footer__link">
                        Skills
                    </a>
                    <a href="#project" className="footer__link">
                        Project
                    </a>
                </div>
            </div>
            <p class="footer__copy">&#169; Banty__RoY. All Right Reserved</p>
        </div>
    )
}

export default Footer
