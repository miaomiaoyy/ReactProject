import React from "react";
import ReactDOM from "react-dom";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import Register from "./Register";

// React.Component = class {
// 	foo() {
// 		console.log('hi');
// 	}
// }

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      registered: false
    };
  }

  render() {
    return (
      <div className="container">
        <div className="homeImage" flex-center>
          <div className="center-box-input">
            <label>Username</label>
            <input
              name="username"
              type="text"
              className="container flex-center"
            />
            <div className="help-block">Please enter username!</div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="container flex-center"
            />
            <div className="help-block">Please enter Password!</div>
            <div className="registerButton">
              <button
                className="btn-3d purple"
                onClick={!this.state.registered}
              >
                Register
              </button>
              {this.state.registered && (
                <div className="register">
                  <Register />
                </div>
              )}
            </div>

            <div className="text-center" />
          </div>
        </div>
      </div>
    );
  }
}
