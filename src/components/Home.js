import React, { Component } from 'react';
import fire from '../config/Fire';
import Header from './header/Header';

class Home extends Component{

    logout = () => {
        fire.auth().signOut();
    }
    render(){
        return(
            <div>
                <h1>My Society</h1>
                <Header />
            </div>
        )
    }
}

export default Home;