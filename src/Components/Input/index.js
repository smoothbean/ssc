import React, { Component } from "react";

class Input extends Component {
    render() {
        return (
            <input
                className={`input ${this.props.modal ? "input--large" : ""}${
                    this.props.full ? "input--full" : ""
                }`}
                type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                name={this.props.name}
            />
        );
    }
}

export default Input;
