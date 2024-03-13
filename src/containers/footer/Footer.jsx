import React from 'react'
import './footer.css'

const Footer =() =>{
    return (
        <div className="footer section__padding">
            <div className="footer__container">
                <div className="footer__details">
                    <div className="footer__name">
                    <div className="line"><hr/></div>  
                        <h1>Banti Kumar</h1>
                        <span>Mern stack developer and web designer</span>
                    </div>
                    <div class="footer__social">

                    <a href="https://www.linkedin.com/in/banty-rai-8ab795197/" class="footer__social-links"
                        target="_blank" rel="noreferrer" ><i class="uil uil-linkedin-alt"></i></a>

                    <a href="https://github.com/bantyRoy9" class="footer__social-link" target="_blank" rel="noreferrer" >
                        <i class="uil uil-github"></i>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100008586853201" class="footer__social-link"
                        target="_blank" rel="noreferrer" >
                        <i class="uil uil-facebook-f"></i>
                    </a>

                    <a href="https://www.instagram.com/_banty_roy_/" class="footer__social-link " target="_blank" rel="noreferrer" >
                        <i class="uil uil-instagram"></i>
                    </a>

                </div>
                </div>
                <div className="footer__getintouch">
                    <div className="address">
                        <div className="line"><hr/></div>  
                        <h3>Get In Touch </h3>
                        <span><a href = "mailto:mr.bantikumar9716@gmail.com" target="_blank" rel="noreferrer" ><i class="uil uil-envelope"></i> mr.bantikumar9716@gmail.com</a></span><br/>
                        <span><i class="uil uil-phone"></i> +91 7053193635</span><br/>
                        <span><i class="uil uil-location-pin-alt"></i> 16/166-67 Trilokpuri <br /><span style={{marginLeft:"25px"}}> Mayur-Vihar Ph-1,</span><br/> <span style={{marginLeft:"25px"}}>New Delhi - 110091</span></span>
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
            <p class="footer__copy">&#169; Banti Kumar. All Right Reserved</p>
        </div>
    )
}

export default Footer
