import React from 'react';
import ReactDOM from 'react-dom';
// import { Navbar } from '/Users/miaomiao/dev/princess-cake/src/Navbar';
// import { Section } from '/Users/miaomiao/dev/princess-cake/src/Section';
// import { Navbar } from 'react-bootstrap';
import Section from './Section';
import Navbar from './Navbar';
import Login from './Login';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { ParallaxProvider } from 'react-scroll-parallax';


// class Wrpper extends React.Component {
//   render() {
//   return(
//        <ParallaxProvider> 
//           <Cake />
//         </ParallaxProvider>
//         )
//   }
// }

 
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Lady Yang</h1> 
        <button className="btn-3d purple">My first button</button>
        <button className="btn-3d purple">More Cakes</button>
        <Login />
         <div className="Cake">
          <Navbar />
            <Section
              title="Section 1"
              subtitle={"Customize your cake"}
              dark={true}
              id="section1">
                <div class="cakecontainer">
                  <div id = "cake-minions" class="product">
                    <img
                      src="http://media.clickondetroit.com/photo/2017/03/03/Bakery%20big%20wedding%20cake_1488564279182_9092226_ver1.0_1280_720.JPG"
                      className="nav-logo"
                      alt="Logo"
                      onClick={this.scrollToTop}
                    />
                  </div>
                <a href="localhost:3000">
                <span class="scroll-down et-pb-icon">next</span>
                </a>
              </div>
            </Section>
            <Section
              title="Section 2"
              subtitle={"Top 10 best sells"}
              dark={false}
              id="section2"
            />
            <Section
              title="Section 3"
              subtitle={"Order the cake and send greetings"}
              dark={true}
              id="section3"
            />
            </div>
      </div>
    );
  }
}

export default App;


