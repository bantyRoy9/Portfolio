import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
const Navbar=() =>{
    const [toggleManu , setToggleMenu] = useState(false);
    return(
        <div className="navbar">
            <div className="navbar-menu">
                {toggleManu ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/> : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>}
                {toggleManu && (
                   <div className="navbar-menu__container scale-up-center">
                        <div className="navbar-menu__container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#about">About</a></p>
                            <p><a href="#skill">Skill</a></p>
                            <p><a href="#project">Project</a></p>
                            <p><a href="/">online CV</a></p>
                        </div>
                        <div className="navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div> 
                )};
            </div>
        </div>
    );
};
export default Navbar