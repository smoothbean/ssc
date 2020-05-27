import React, { Component } from "react";
import { connect } from "react-redux";

import Loading from "../../Components/Loading";
import Form from "../../Components/Form";

class Login extends Component {
    constructor() {
        super();
    }

    render() {
        return <Form>p</Form>;
    }
}

const mapStateToProps = (store) => {
    const { auth, loading } = store;
    return { auth, loading };
};

export default connect(mapStateToProps)(Login);
