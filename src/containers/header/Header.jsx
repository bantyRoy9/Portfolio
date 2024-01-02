import React from 'react'
import  './header.css'

const Header =() =>(
    <div className="intro" id="home">
        <h1>I'm <br /><span className="name">Banty Kumar,</span><br />A Full Stack Web Developer & Web Designer.</h1>
        <a href="#about" className="button button--flex">Know More ....</a>
        <div class="header__social">
            <a href="https://www.linkedin.com/in/banty-rai-8ab795197/"  target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt gredient_txt"></i></a>
            <a href="https://github.com/bantyRoy9"  target="_blank" rel="noreferrer"><i class="uil uil-github gredient_txt"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100008586853201" target="_blank" rel="noreferrer"><i class="uil uil-facebook-f gredient_txt"></i></a>
            <a href="https://www.instagram.com/_banty_roy_/" target="_blank" rel="noreferrer"><i class="uil uil-instagram gredient_txt"></i></a>
        </div>
    </div>
);


    



export default Header;
