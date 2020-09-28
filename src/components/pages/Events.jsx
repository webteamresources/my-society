import React, { Component } from 'react';
import Header from '../header/Header';

class Events extends Component{
    render(){
        return(
            <div>
                <h1>Events</h1>
                <Header />
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScpas0FNPbUQ6o0Al4uO6odRyR-f-qiCP5w9BhDgLpL8gvBIg/viewform?embedded=true" width="100%" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        )
    }
}

export default Events;