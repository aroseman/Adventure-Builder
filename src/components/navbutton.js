import React, { Component } from 'react';

class Navbutton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonLabel: "weenie"
        }
    }
    render() {
        return (
            <a href="#" class="nav-button">
                <div><p>{this.props.buttonText}</p></div>
            </a>
        )
    }
}

export default Navbutton;