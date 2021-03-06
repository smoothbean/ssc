import React, { Component } from "react";

import Input from "../Input";

class Form extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(e.target.name, e.target.value);
    }

    render() {
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className={`form ${this.props.modal ? "form--modal" : ""}${
                    this.props.full ? "form--full" : ""
                }`}
            >
                {this.props.inputs.map((i) => (
                    <Input
                        type={i.type}
                        label={i.label}
                        placeholder={i.placeholder}
                        onChange={this.onChange}
                        key={i.label}
                        name={i.name}
                        full={this.props.full}
                        modal={this.props.modal}
                    />
                ))}
                {this.props.children}
            </form>
        );
    }
}

export default Form;
