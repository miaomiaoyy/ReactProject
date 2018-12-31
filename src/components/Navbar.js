import React, { Component } from "react";
// import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Parallax, Background } from 'react-parallax';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <div className="sep">
          <Parallax strength={300}>
              <h1>Lady Yang</h1>
              <Background className="custom-bg">
                  <img src="https://i.pinimg.com/originals/99/98/e8/9998e84d729b1a8b06f37018b4080920.jpg" alt="fill murray" />
              </Background>
          </Parallax>
          </div>
          <img
            // src="https://via.placeholder.com/200x100"
            src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
     


            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}