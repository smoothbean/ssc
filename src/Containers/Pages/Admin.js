import React, { Component } from "react";
import { connect } from "react-redux";

import Loading from "../../Components/Loading";

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }

    render() {
        const { loading } = this.state;
        if (loading) return <Loading />;
        return <p>Admin</p>;
    }
}

const mapStateToProps = (store) => {
    const { auth, loading } = store;
    return { auth, loading };
};

export default connect(mapStateToProps)(Admin);
