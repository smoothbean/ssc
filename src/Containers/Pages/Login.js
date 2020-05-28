import React, { Component } from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";

import Form from "../../Components/Form";
import Button from "../../Components/Button";

import { updateAuth } from "./../../redux/actions/auth";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        const { username, password } = this.state;

        if (!username || !password)
            return alert("Please enter your username and password");

        if (password === "password") {
            if (username === "user") {
                this.props.updateAuth({
                    user: { username: "user", email: "user@test.co" },
                });
                return this.setState({ redirectTo: "ssc/order" });
            }
            if (username === "admin") {
                this.props.updateAuth({
                    user: {
                        username: "admin",
                        email: "admin@test.co",
                    },
                    isAdmin: true,
                });
                return this.setState({ redirectTo: "ssc/admin" });
            }
        }

        alert("Incorrect details");
    }

    onChange(name, val) {
        this.setState({
            [name]: val,
        });
    }

    render() {
        if (this.state.redirectTo)
            return <Redirect to={this.state.redirectTo} />;

        return (
            <div className="centered">
                <div className="title">Login</div>
                <div className="clues">
                    <p>Admin: admin&password</p>
                    <p>User: user&password</p>
                </div>
                <Form
                    onChange={this.onChange}
                    inputs={[
                        {
                            type: "text",
                            name: "username",
                            placeholder: "Enter your username",
                            label: "Username",
                        },
                        {
                            type: "password",
                            name: "password",
                            placeholder: "Enter your password",
                            label: "Password",
                        },
                    ]}
                >
                    <Button onClick={this.onClick} text="Login" />
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    const { auth, loading, prevPage } = store;
    return { auth, loading, prevPage };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAuth: bindActionCreators(updateAuth, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
