import React, { Component } from 'react';
import fire from './config/Fire';
import LoginRegister from './components/LoginRegister';
import Home from './components/Home';
import SignIn from './components/SignIn';
import './App.css';
import Register from './components/Register';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
      <div>
        {this.state.user ? (<Home />) : (<Register />)}
      </div>
    );
  }
}

export default App;
