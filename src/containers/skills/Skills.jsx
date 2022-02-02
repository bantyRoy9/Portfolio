import React from 'react';
import './skills.css';

const OpenToggle = () => {
  console.log('hell0');
}

const Skills = () => (
  <>
  <div className="skills section__padding" id="skill">
    <div className="skills-heading">
    <div className="line"><hr/></div>   
      <p>Skills</p>
      <h1 className="gradient__text">The Future is Now and We Just Need to Realize It. Step into Future Today. & Make it Happen...</h1>
    </div>
    <div className="skills-container">
    <div className="skills__container">
                <div className="about__skills aaa">
                    
                    <div className="Skills__content skills-open" >
                        
                        <div className="skills__header">
                            <i className="uil uil-brackets-curly skills__icon" onClick={OpenToggle}></i>
                            <div>
                                <h1 className="skills__title">FrontEnd Developer</h1>
                                <span className="skills__subtitle">HTML,CSS, JavaScript ...</span>

                            </div>
                            {/* <i className="uil uil-angle-down skills__arrow" onClick={OpenToggle}></i> */}
                        </div>
                        <div className="skills__list grids">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">80%</span>

                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__number">70%</span>

                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__number">80%</span>

                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__javascript">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React.js</h3>
                                    <span className="skills__number">70%</span>

                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__ractjs">

                                    </span>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* <!-- <div className="skills__about intros">
                        <p>
                        <span className="button button--flex button--small button--link training__button">
                            Read More...<i className="uil uil-arrow-right button__icon"></i>
                        </span></p>
                    </div> --> */}
                </div>
                
               
     </div>
    </div>
 </div>
 <div className="skills1 section__paddings">
                <div class="about__skills intros">
                    <div class="Skills__content skills__open">
                        <div class="skills__header">
                            <i class="uil uil-server-network  skills__icon"></i>
                            <div>
                                <h1 class="skills__title">BackEnd Developer</h1>
                                <span class="skills__subtitle">Node.Js,Express,Mongodb...</span>

                            </div>
                            {/* <i class="uil uil-angle-down skills__arrow"></i> */}
                        </div>
                        <div class="skills__list grids">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">JavaScript</h3>
                                    <span class="skills__number">80%</span>

                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__javascript">

                                    </span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Node.js</h3>
                                    <span class="skills__number">80%</span>

                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__nodejs">

                                    </span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">MangoDB</h3>
                                    <span class="skills__number">70%</span>

                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__mongodb">

                                    </span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Express</h3>
                                    <span class="skills__number">75%</span>

                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__angular-js">

                                    </span>
                                </div>
                            </div>


                        </div>

                    </div>
                    
                </div>    
                <div class="about__skills intros">
                    <div class="Skills__content skills__open">
                        <div class="skills__header">
                            <i class="uil uil-programming-language  skills__icon"></i>
                            <div>
                                <h1 class="skills__title">programming Language</h1>
                                <span class="skills__subtitle">JavaScript, Data Structure, C</span>

                            </div>
                            {/* <i class="uil uil-angle-down skills__arrow"></i> */}
                        </div>
                        <div class="skills__list grids">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">C Programming</h3>
                                    <span class="skills__number">60%</span>

                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__C-Programming">

                                    </span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">C++</h3>
                                    <span class="skills__number">40%</span>

                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__C">

                                    </span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">JavaScript</h3>
                                    <span class="skills__number">80%</span>

                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__javascript">

                                    </span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Data Stucture</h3>
                                    <span class="skills__number">60%</span>

                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__data-stucture">

                                    </span>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
 </div>
  </>
);

export default Skills;
