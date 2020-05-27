import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "../../Components/Form";

import { withRouter } from "react-router-dom";

@withRouter
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(name, val) {
        this.setState({
            [name]: val,
        });
    }

    render() {
        return (
            <div className="centered">
                <div className="title">login</div>
                <Form
                    onChange={this.onChange}
                    inputs={[
                        {
                            type: "text",
                            name: "username",
                            placeholder: "Enter your username",
                        },
                        {
                            type: "password",
                            name: "password",
                            placeholder: "Enter your password",
                        },
                    ]}
                >
                    <button className="button">Login</button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    const { auth, loading } = store;
    return { auth, loading };
};

export default connect(mapStateToProps)(Login);
