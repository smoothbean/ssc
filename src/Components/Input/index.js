import React, { Component } from "react";

class Input extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(e.target.name, e.target.value);
    }

    render() {
        return (
            <input
                className="input"
                type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
            />
        );
    }
}

export default Input;
