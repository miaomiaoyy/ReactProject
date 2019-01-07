import React, { Component } from "react";
// import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Box, Text, Heading, Image } from 'gestalt';
import { NavLink } from 'react-router-dom';
import logoSrc from './t2.jpg';


export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (

      <div className="foo">
    
        <Box
          height={50}
          color="lightGray"
          padding={1}
          shape="roundBottom"
          justifyContent="around"
          direction="row"
          display="flex"
          alignItems="center"
        >
          <NavLink to="/signin">
            <Text size="xl" color="midnight">
              SignIn 
            </Text>
          </NavLink>

          <NavLink to="/" >
            <Box direction="row" alignItems="center" display="flex">
              <img
                src={logoSrc}
                alt="logo"
                height={31}
              />
              <h1 size='xs' className="dance"> sheepChef</h1>
            </Box>
          
          </NavLink>
          <NavLink to="/register">
            <Text size="xl" color="midnight">
              Register 
            </Text>
          </NavLink>
              
        </Box>

        <div className="nav-content" display="block">
          <img
            // src="https://via.placeholder.com/200x100"
            src="https://images.wallpaperscraft.com/image/valentines_day_cake_gift_recognition_99516_1920x1080.jpg"
            alt="Flower"
            display="block"
            onClick={this.scrollToTop}
          />
        
        </div>

    <div className="nav-content" display="block">
      <img
            src="http://media.clickondetroit.com/photo/2017/03/03/Bakery%20big%20wedding%20cake_1488564279182_9092226_ver1.0_1280_720.JPG"
            alt="Wedding"
            display="block"
            onClick={this.scrollToTop}
          />

      </div>
    </div>
    );
  }
}