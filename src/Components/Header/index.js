import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";

import { updatePrevPage } from "../../redux/actions/prevPage";

@withRouter
class Header extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleAdmin = this.handleAdmin.bind(this);
    }

    // Listen for route change
    componentDidUpdate(prevProps) {
        // If the route has changed
        if (this.props.location !== prevProps.location) {
            this.setState({ redirectTo: false });
            if (this.props.location.pathname === "/ssc/admin") {
                this.props.updatePrevPage("/ssc/admin");
            } else {
                this.props.updatePrevPage(false);
            }
        }
    }

    handleLogout() {
        this.setState({ redirectTo: "/ssc/logout" });
    }

    handleLogin() {
        this.setState({ redirectTo: "/ssc/login" });
    }

    handleAdmin() {
        this.setState({ redirectTo: "/ssc/admin" });
    }

    render() {
        if (this.state.redirectTo)
            return <Redirect to={{ pathname: this.state.redirectTo }} />;
        return (
            <div className="header">
                <div className="header_options">
                    {(!this.props.auth.user ||
                        (this.props.auth.user &&
                            this.props.auth.isAdmin &&
                            this.props.location.pathname !== "/ssc/admin")) &&
                    this.props.location.pathname !== "/ssc/login" ? (
                        <p
                            className="header_options_option"
                            onClick={this.handleAdmin}
                        >
                            Admin
                        </p>
                    ) : (
                        <p className="header_options_option"></p>
                    )}
                    {this.props.auth.user ? (
                        <p
                            className="header_options_option"
                            onClick={this.handleLogout}
                        >
                            Logout
                        </p>
                    ) : this.props.location.pathname !== "/ssc/login" ? (
                        <p
                            className="header_options_option"
                            onClick={this.handleLogin}
                        >
                            Login
                        </p>
                    ) : null}
                </div>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({ redirectTo: "/ssc" });
                    }}
                >
                    <p className="header_text">Simons Sweet Co.</p>
                </a>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    const { auth, loading } = store;
    return { auth, loading };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePrevPage: bindActionCreators(updatePrevPage, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// TODO: figure out best way to redirect to admin
