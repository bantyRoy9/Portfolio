import React from 'react' 
import './projects.css'
// import blog1 from '../../assests/blog01.png'
import tesla from '../../assests/tesla.png'
import disney from '../../assests/disney.png'
import parking from '../../assests/parking.png'
import portfolio from '../../assests/portfolio.png'

const Projects=() =>{
    return (
        <div className="project section__padding" id="project">
            <div className="project__title ">
                <h1 className="project__title-name gradient__text ">
                   <span> Projects, </span> Where
                </h1>
                <h1 className="project__title-name1">
                I am Working ..
                </h1>

            </div>
            <div className="projects__container ">
                <div className="project__container1">
                        <div className="project__img">
                            <img src={portfolio} alt="" />
                        </div>
                        <div className="project__details">
                            <div className="project__date">
                                <span>12/10/2021</span>
                            </div>
                            <div className="project__detail-title">
                                <h2>PortFolio</h2>
                                <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur itaque est, excepturi aliquam veritatis libero quibusdam culpa iste officia modi obcaecati dolorum earum porro dignissimos, aspernatur sint asperiores numquam. sit amet consectetur adipisicing elit. Dolore, optio. Itaque nesciunt dicta, unde quae quo dignissimos tenetur aperiam quisquam.</p>
                            </div>
                            <div className="project__read-more">
                                <a href="/">Read More</a>
                            </div>
                        </div>
                </div>
                <div className="project__container2">
                    <div className="project__subcontainers">
                        <div className="project__subcontainer1">
                        <div className="project__imgs">
                            <img src={parking} alt="" />
                        </div>
                        <div className="project__subdetails">
                            <div className="project__date">
                                <span>12/10/2021</span>
                            </div>
                            <div className="project__detail-title">
                                <h2>Disney-Clone</h2>
                                <p>Lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis sit, placeat provident tempore, adipisci totam esse alias dolorum labore ratione amet voluptates saepe? Quibusdam aut saepe facere ipsum unde? dolor sit amet consectetur adipisicing elit. Dolore, optio. Itaque nesciunt dicta, unde quae quo dignissimos tenetur aperiam quisquam.</p>
                            </div>
                            <div className="project__read-more">
                                <a href="/">Read More</a>
                            </div>
                        </div>
                        </div>
                        <div className="project__subcontainer2">
                        <div className="project__imgs">
                            <img src={tesla} alt="" />
                        </div>
                        <div className="project__subdetails">
                            <div className="project__date">
                                <span>12/10/2021</span>
                            </div>
                            <div className="project__detail-title">
                                <h2>Blog-web-app</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio. Itaque nesciunt dicta, unde quae quo dignissimos tenetur aperiam quisquam.</p>
                            </div>
                            <div className="project__read-more">
                                <a href="/">Read More</a>
                            </div>
                        </div>
                        </div>
                        <div className="project__subcontainer3">
                        <div className="project__imgs">
                            <img src={parking} alt="" />
                        </div>
                        <div className="project__subdetails">
                            <div className="project__date">
                                <span>12/10/2021</span>
                            </div>
                            <div className="project__detail-title">
                                <h2>ParkingZone</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio. Itaque nesciunt dicta, unde quae quo dignissimos tenetur aperiam quisquam.</p>
                            </div>
                            <div className="project__read-more">
                                <a href="/">Read More</a>
                            </div>
                        </div>
                        </div>
                        <div className="project__subcontainer4">
                        <div className="project__imgs">
                            <img src={portfolio} alt="" />
                        </div>
                        <div className="project__subdetails">
                            <div className="project__date">
                                <span>12/10/2021</span>
                            </div>
                            <div className="project__detail-title">
                                <h2>Bankist-App</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio. Itaque nesciunt dicta, unde quae quo dignissimos tenetur aperiam quisquam.</p>
                            </div>
                            <div className="project__read-more">
                                <a href="/">Read More</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
