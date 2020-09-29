import React, { Component } from 'react';
import fire from '../../config/Fire';
import {
    NavLink, Link
} from "react-router-dom";
import './Navbar.css';

class Navbar extends Component{

    logout = (e) => {
        e.preventDefault();
        fire.auth().signOut();
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <ul className="nav nav-pills">
                        <li><NavLink activeClassName="active" exact className="btn btn-primary" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" className="btn btn-primary" to="/profile">Profile</NavLink></li>
                        <li><NavLink activeClassName="active" className="btn btn-primary" to="/statement">Statement</NavLink></li>
                        <li><NavLink activeClassName="active" className="btn btn-primary" to="/events">Events</NavLink></li>
                        <li><NavLink activeClassName="active" className="btn btn-primary" to="/members">Members</NavLink></li>
                        <li><Link className="btn btn-primary logoutButton" onClick={this.logout}>LogOut</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;
