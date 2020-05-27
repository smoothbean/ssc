import React, { Component } from "react";

class Input extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <input
                className={`input ${this.props.modal ? "input--large" : ""}`}
                type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                name={this.props.name}
            />
        );
    }
}

export default Input;
