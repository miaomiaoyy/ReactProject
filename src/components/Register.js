import React from 'react';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            email:''
        };
        this.usernameChange = this.usernameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    usernameChange(event) {
        this.setState(
            {username: event.target.value}
        )
    }

    passwordChange(event){
        this.setState(
            {password: event.target.value}
        )
    }

    emailChange(event){
        this.setState(
            {email: event.target.value}
        )
    }

    render() {

    return(
        <div>
            <form>
                <label>
                    Username:
                    <input type= "text" value = {this.state.username} onChange={this.usernameChange}/>
                </label>

                <label>
                    Password:
                    <input type = "text" value ={this.state.password} onChange={this.passwordChange}/>

                </label>

                <label>
                    Email:
                    <input type ="text" value = {this.state.email} onChange={this.emailChange}/>
                </label>

            </form>
        </div>
    )
    }
}
export default Register;
