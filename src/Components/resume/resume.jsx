import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Ironhack Web Development Bootcamp, Lisbon</h3>
                  <p className="info">
                    Full Stack Web Development <span>•</span>{" "}
                    <em className="date">2020</em>
                  </p>
                  <p>
                    9 weeks full time Full Stack Web Development intensive
                    course. (Global Tech school ranked top 3 worldwide). -
                    FrontEnd: HTML5, CSS3, JavaScript ES6, Bootstrap, Canvas,
                    Jasmine. - BackEnd: MongoDB, Node.js, Express, Cloudinary,
                    Nodemailer, BCrypt, mongoose, Passport, REST APIs, json
                    server, jasmine. - Full-Stack: React JS. - Tools: Mongo DB
                    Compass, Visual Studio Code, Github, Postman. - Deployment
                    with Github pages, Heroku and Netlify.
                  </p>
                </div>
              </div>{" "}
              <div className="row item">
                <div className="twelve columns">
                  <h3>University of Manchester</h3>
                  <p className="info">
                    Psychology, 2:1, Bachelor Of Science<span>•</span>{" "}
                    <em className="date">2014</em>
                  </p>
                  <p>
                    Dissertation Title: The effects of congruency and attention
                    on the recognition and favourability of online banner
                    advertisements
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Ironhack, Lisbon</h3>
                  <p className="info">
                    Part Time Web Development Teaching Assistant, <span>•</span>{" "}
                    <em className="date">February 2020 - Present</em>
                  </p>
                  <p>
                    Helping the part time students with the front-end module.
                    Covering HTML, CSS, Responsive layout design, JavaScript,
                    Canvas. Helping students with their first project.
                  </p>
                </div>
              </div>{" "}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Sogang Language Programme, South Korea</h3>
                  <p className="info">
                    English Teacher<san>•</san>{" "}
                    <em className="date">2016-2019</em>
                  </p>
                  <p>English teacher at a South Korean school.</p>
                </div>
              </div>{" "}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Mediaforce, Manchester</h3>
                  <p className="info">
                    Media Marketing Executive<san>•</san>{" "}
                    <em className="date">2014-2015</em>
                  </p>
                  <p>Drew up marketing strategies for Print Media </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p></p>
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand HTML5" />
                    <em>HTML5</em>
                  </li>
                  <li>
                    <span className="bar-expand CSS" />
                    <em>CSS</em>
                  </li>
                  <li>
                    <span className="bar-expand JavaScript" />
                    <em>JavaScript</em>
                  </li>
                  <li>
                    <span className="bar-expand React" />
                    <em>React</em>
                  </li>
                  <li>
                    <span className="bar-expand Adobe" />
                    <em>Adobe Creative Suite</em>
                  </li>
                  {/* <li>
                    <span className="bar-expand jquery" />
                    <em></em>
                  </li> */}
                </ul>
              </div>
            </div>{" "}
          </div>{" "}
        </section>
      </React.Fragment>
    );
  }
}
