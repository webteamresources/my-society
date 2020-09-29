import React, { Component } from 'react';
import Header from '../header/Header';
import AddNote from "./AddNote";
import NoteLists from "./NoteLists";

class Members extends Component{
    render(){
        return(
            <div>
                <h1>Members</h1>
                <Header />
                <AddNote />
                <NoteLists />
            </div>
        )
    }
}

export default Members;