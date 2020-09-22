import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import fire from './config/Fire';
import Home from './components/Home';
import Login from './components/LoginRegister';
import Profile from './components/pages/Profile';
import Statement from './components/pages/Statement';
import Events from './components/pages/Events';

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
      <Router>
        {this.state.user ? (
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/statement">
            <Statement />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
        </Switch>
        ) : (<Login />)}
      
      </Router>
    );
  }
}

export default App;
