import React from "react";
import "./projects.css";
import blog from "../../assests/blog.png";
import apna from "../../assests/apna.png";
import disney from "../../assests/disney.png";
import parking from "../../assests/parking.png";
import portfolio from "../../assests/portfolio.png";

const Projects = () => {
  return (
    <div className="project section__padding" id="project">
      <div className="project__title ">
        <h1 className="project__title-name gradient__text ">
          <span> Projects, </span> Where
        </h1>
        <h1 className="project__title-name1">I am Working ..</h1>
      </div>
      <div className="projects__container">
        <div className="project__container1">
          <div className="project__img">
            <img src={portfolio} alt="" />
          </div>
          <div className="project__details">
            <div className="project__date">{/* <span>12/10/2021</span> */}</div>
            <div className="project__detail-title">
              <h2>PortFolio</h2>
              <p>
                Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempore pariatur itaque est, excepturi aliquam
                veritatis libero quibusdam culpa iste officia modi obcaecati
                dolorum earum porro dignissimos, aspernatur sint asperiores
                numquam. sit amet consectetur adipisicing elit. Dolore, optio.
                Itaque nesciunt dicta, unde quae quo dignissimos tenetur aperiam
                quisquam.
              </p>
            </div>
            <div className="project__read-more">
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
        <div className="project__container2">
            <div className="project__subcontainer">
              <div className="project__img">
                <img src={disney} alt="" />
              </div>
              <div className="project__subdetails">
                <div className="project__date">
                  {/* <span>12/10/2021</span> */}
                </div>
                <div className="project__detail-title">
                  <h2>Disney-Clone</h2>
                  <p>
                    Lorem ipsum Lorem, ipsum dolor sit amet cplaceat provident
                    tempore, adipisci totam esse alias dolorum labore ratione
                    amet voluptates saepe? Quibusdam aut saepe facere ipsum
                    unde? dolor sit amet consectetur adipisicing elit. Dolore,
                    optio. Itaque nesciunt dicta, unde quae quo dignissimos
                    tenetur aperiam quisquam.
                  </p>
                </div>
                <div className="project__read-more">
                  <a href="/">Read More</a>
                </div>
              </div>
            </div>
            <div className="project__subcontainer">
              <div className="project__img">
                <img src={blog} alt="" />
              </div>
              <div className="project__subdetails">
                <div className="project__date">
                  {/* <span>12/10/2021</span> */}
                </div>
                <div className="project__detail-title">
                  <h2>Blog-web-app</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, optio. Itaque nesciunt dicta, unde quae quo
                    dignissimos tenetur aperiam quisquam.
                  </p>
                </div>
                <div className="project__read-more">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https:blogs-web.herokuapp.com/"
                  >
                    Blog-web || Banty
                  </a>
                </div>
              </div>
            </div>
            <div className="project__subcontainer">
              <div className="project__img">
                <img src={parking} alt="" />
              </div>
              <div className="project__subdetails">
                <div className="project__date">
                  {/* <span>12/10/2021</span> */}
                </div>
                <div className="project__detail-title">
                  <h2>ParkingZone</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, optio. Itaque nesciunt dicta, unde quae quo
                    dignissimos tenetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus similique laborum aperiam veniam consequuntur, temporibus magnam iure praesentium eaque. Cupiditate incidunt dolor beatae in fugit. Sunt quidem cum aut eaque! aperiam quisquam.
                  </p>
                </div>
                <div className="project__read-more">
                  <a href="/">Read More</a>
                </div>
              </div>
            </div>
            <div className="project__subcontainer">
              <div className="project__img">
                <img src={apna} alt="" />
              </div>
              <div className="project__subdetails">
                <div className="project__date">
                  {/* <span>12/10/2021</span> */}
                </div>
                <div className="project__detail-title">
                  <h2>apnaBank-App</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, optio. Itaque nesciunt dicta, unde quae quo
                    dignissimos tenetur aperiam quisquam.
                  </p>
                </div>
                <div className="project__read-more">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https:github.com/bantyRoy9/moderPortfolio"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Projects;
