import React, { Component } from 'react';

class Navbutton extends Component {
    constructor() {
        super();

        this.state = {
            buttonLabel: ""
        }
    }
    render() {
        return (
            <a href="#" class="nav-button">
                <div><p>Penis</p></div>
            </a>
        )
    }
}

export default Navbutton;