import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects From Ironhack!</h1>
              {/* portfolio-wrapper */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt="" src="/images/viral2000.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Viral 2000</h5>
                          <p>Front-End Canvas Game</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt="" src="/images/newday.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>New Day</h5>
                          <p>Back-End Application</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt="" src="/images/thriftpoint.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Thrift Point</h5>
                          <p>MERN Full Stack Application</p>
                        </div>
                      </div>

                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                {/* item end */}
                {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title>
                      <img alt="" src="images/portfolio/farmerboy.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Farmer Boy</h5>
                          <p>Branding</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "} */}
                {/* item end */}
                {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" title>
                      <img alt="" src="images/portfolio/girl.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Girl</h5>
                          <p>Photography</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "} */}
                {/* item end
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07" title>
                      <img alt="" src="images/portfolio/origami.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Origami</h5>
                          <p>Illustrration</p>
                        </div> */}
                {/* </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "} */}
                {/* item end
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08" title>
                      <img alt="" src="images/portfolio/retrocam.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Retrocam</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "} */}
                {/* item end */}
              </div>{" "}
              {/* portfolio-wrapper end */}
            </div>{" "}
            {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="/images/viral2000.png"
                alt=""
              />
              <div className="description-box">
                <h4>Viral 2000</h4>
                <p>
                  A dual-concept game that is also an ‘audio/visual experience’
                  that takes you through the Internet’s oldest viral videos.
                  Catch the video’s to hear/view a Youtube clip, collect the
                  bitcoins for points and avoid the trolls!  
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  HTML5, CSS3, JavaScript ES6, Canvas
                </span>
              </div>
              <div className="link-box">
                <a href="https://viral2000.netlify.com">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="/images/newday.png"
                alt=""
              />
              <div className="description-box">
                <h4> New Day</h4>
                <p>
                  A ‘Back-End’ app focused on wellness, journal writing and
                  affirmations. Users answer 5 daily questions to start and end
                  their day on a  positive note and to focus on their goals. 
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  NodeJS, MongoDB, Nodemailer, Express, HTML5, Handlebars, CSS,
                  Javascript, jQuery, Bootstrap, REST, Scrum
                </span>
              </div>
              <div className="link-box">
                <a href="https://new-day-journal.herokuapp.com/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="/images/thriftpoint.png"
                alt=""
              />
              <div className="description-box">
                <h4>Thrift Point</h4>
                <p>
                  A ‘Full Stack’ MERN application that locates local Thrift
                  Stores and encourages a continuous conversation between store
                  owners and consumers, creating a community and encouraging
                  people to shop second-hand. Shop Owners register their store.
                  and can write posts, while customers can write reviews.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  React, NodeJS, MongoDB, Express, HTML5, CSS, JavaScript, Scrum
                </span>
              </div>
              <div className="link-box">
                <a href="https://thriftpointapp.herokuapp.com/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-intothelight.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Into the Light</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Photography
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-farmerboy.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Farmer Boy</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Branding, Webdesign
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-girl.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Girl</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Photography
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-origami.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Origami</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Branding, Illustration
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-retrocam.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Retrocam</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Webdesign, Photography
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
          </div>{" "}
          {/* row End */}
        </section>
      </React.Fragment>
    );
  }
}
