import React, { Component } from "react";
import "./App.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Containers/Pages/Login";
import Order from "./Containers/Pages/Order";
import Admin from "./Containers/Pages/Admin";
import Logout from "./Containers/Pages/Logout";

import Header from "./Components/Header/index";

import "./App.scss";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path="/logout" exact component={Logout} />
                        <Route
                            path="/login"
                            exact
                            render={() => {
                                return this.props.auth.user ? (
                                    <Redirect to="/" />
                                ) : (
                                    <Login />
                                );
                            }}
                        />
                        <Route
                            exact
                            path="/admin"
                            render={() => {
                                return !this.props.auth.isAdmin ? (
                                    <Redirect to="/login" />
                                ) : (
                                    <Admin />
                                );
                            }}
                        />
                        <Route exact component={Order} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

{
    /* <Route
path="/order"
exact
children={<PlayerDashboard />}
/> */
}

const mapStateToProps = (store) => {
    const { auth, loading } = store;
    return { auth, loading };
};

export default connect(mapStateToProps)(App);
