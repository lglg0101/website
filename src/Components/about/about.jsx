import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              {/* <img className="profile-pic" src="/images/lissy.jpg" alt="" /> */}
            </div>
            <div className="nine columns main-col">
              <h2>My Short Story</h2>
              <p>
                I like to say that I began coding at a young age; I always
                enjoyed customizing HTML and CSS and seeing the change that I
                had made on the screen. I studied Psychology at University and
                since became a Media Marketing Executive and then a Teacher in
                South Korea. Both these career paths were challenging in their
                own ways but I felt unfufilflled and that I wasn't pushing
                myself or learning anything new. I left South Korea and moved to
                Lisbon where I joined a 10 Week Web Development Bootcamp. This
                was one of the best choices I have made; I have rediscovered my
                love for coding and design and am currently looking for my first
                professional role.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Lissy Gundersen</span>
                    <br />
                    <span>
                      Lisbon
                      <br />
                    </span>
                    <br />
                    <span>+ 44 7931 118321</span>
                    <br />
                    <span>lissygundersen@gmail.com</span>
                  </p>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
