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

import Header from "./Components/Header/index";

import "./App.scss";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path="/login" exact component={Login} />
                        <Route
                            exact
                            path="/admin"
                            render={() => {
                                return true ? (
                                    <Redirect to="/login" />
                                ) : (
                                    <Redirect to="/order" />
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
