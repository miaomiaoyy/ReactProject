import React from 'react';
import ReactDOM from 'react-dom';
// import { Navbar } from '/Users/miaomiao/dev/princess-cake/src/Navbar';
// import { Section } from '/Users/miaomiao/dev/princess-cake/src/Section';
// import { Navbar } from 'react-bootstrap';
import Section from './Section';
import Navbar from './Navbar';
import Login from './Login';
import 'antd/dist/antd.css'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'gestalt/dist/gestalt.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax, Background } from 'react-parallax';
import Sider from './Sider';


// class Wrpper extends React.Component {
//   render() {
//   return(
//        <ParallaxProvider> 
//           <App />
//         </ParallaxProvider>
//         )
//   }
// }

// const SubMenu = Menu.SubMenu;

// handleClick = (e) => {
//   console.log('click ', e);
//   this.setState({
//     current: e.key,
//   });
// }

class App extends React.Component {
  render() {
    return (
      <div>
      <Parallax strength={500} bgImage="https://img.freepik.com/free-vector/pink-background-with-waves_23-2147631423.jpg?size=338&ext=jpg">
              <h1 className="dance">Lady Yang</h1>

      </Parallax>
      

      <Navbar />
    
        
         <div className="Cake">
           
            <Section
              title="Love empowers"
              subtitle={"Send love and greetings here"}
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


