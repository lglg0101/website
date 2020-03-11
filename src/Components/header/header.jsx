import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {" "}
        {
          <header id="home">
            <nav id="nav-wrap">
              <a
                className="mobile-btn"
                href="#nav-wrap"
                title="Show navigation"
              >
                {" "}
                Show navigation{" "}
              </a>
              <a className="mobile-btn" href="#" title="Hide navigation">
                {" "}
                Hide navigation{" "}
              </a>
              <ul id="nav" className="nav">
                <li className="current">
                  {" "}
                  <a className="smoothscroll" href="#home">
                    {" "}
                    Home{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  <a className="smoothscroll" href="#about">
                    {" "}
                    About{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="smoothscroll" href="#resume">
                    {" "}
                    Resume{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="smoothscroll" href="#portfolio">
                    {" "}
                    Works{" "}
                  </a>
                </li>
              </ul>{" "}
            </nav>{" "}
            <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline"> I'm Lissy</h1>{" "}
                <h3>
                  {" "}
                  I'm a Lisbon based <span>front-end web developer</span>. Let
                  's{" "}
                  <a className="smoothscroll" href="#about">
                    start scrolling
                  </a>
                </h3>
                <hr />
                <ul className="social">
                  <li>
                    {" "}
                    <a href="https://twitter.com/lglg0101">
                      {" "}
                      <i className="fa fa-twitter" />{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="linkedin.com/in/lissy-gundersen/">
                      {" "}
                      <i className="fa fa-linkedin" />{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://github.com/lglg0101">
                      {" "}
                      <i className="fa fa-github" />{" "}
                    </a>
                  </li>
                </ul>{" "}
              </div>{" "}
            </div>{" "}
            <p className="scrolldown">
              <a className="smoothscroll" href="#about">
                {" "}
                <i className="icon-down-circle" />{" "}
              </a>{" "}
            </p>{" "}
          </header>
        }
      </React.Fragment>
    );
  }
}
