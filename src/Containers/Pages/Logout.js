import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";

import Loading from "../../Components/Loading";

import { updateAuth } from "./../../redux/actions/auth";

class Logout extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        this.props.updateAuth({});
        this.setState({ loading: false });
    }

    render() {
        const { loading } = this.state;
        if (loading) return <Loading />;
        return <Redirect to={"/"} />;
    }
}

const mapStateToProps = (store) => {
    const { auth, loading } = store;
    return { auth, loading };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAuth: bindActionCreators(updateAuth, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
