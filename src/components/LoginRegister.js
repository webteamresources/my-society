import React, { Component } from 'react';
import fire from '../config/Fire';

class LoginRegister extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login',
            loginBtn: true
        };
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

  render(){

    let errorMessage = this.state.fireErrors ?
        (<div>{this.state.fireErrors}</div>) : null;


    return (
      <div>
        <div id="title">{this.state.formTitle}</div>
        <div>
                {errorMessage}
            <form>
                <input type="text"
                value={this.state.email}
                onChange={this.handleChange}
                name="email" />

                <input type="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password" />

                <input type="submit" className="loginBtn" onClick={this.login} value="Enter" />
            </form>
        </div>
      </div>
    );
  }
}

export default LoginRegister;
