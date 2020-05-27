import React, { Component } from "react";

class Button extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <button className="button" onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;
