import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../logo.svg'
const Navbar=() =>{
    const [toggleManu , setToggleMenu] = useState(false);

    return(
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links-logo">
                    <p>Banty</p>
                    {/* <img src={logo} alt="" /> */}
                </div>
                <div className="navbar-links__container">
                    {/* <p><a href="#home">Home</a></p> */}
                    <p><a href="#about">About</a></p>
                    <p><a href="#skill">Skill</a></p>
                    <p><a href="#project">Project</a></p>
                    <p><a href="#">online CV</a></p>
                </div>
            </div>
                <div className="navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign Up</button>
                </div>
            <div className="navbar-menu">
                {toggleManu ? 
                <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>
                :  
                <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>}  
                {toggleManu && (
                   <div className="navbar-menu__container scale-up-center">
                       <div className="navbar-menu__container-links">

                   {/* <p><a href="#home">Home</a></p> */}
                   <p><a href="#about">About</a></p>
                   <p><a href="#skill">Skill</a></p>
                   <p><a href="#project">Project</a></p>
                   <p><a href="#">online CV</a></p>
                 </div>
                 <div className="navbar-menu_container-links-sign">
                 <p>Sign in</p>
                 <button type="button">Sign up</button>
              </div>
                </div> 
                )}
        </div>
        </div>
    );
};

export default Navbar
