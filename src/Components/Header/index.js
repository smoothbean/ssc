import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
    render() {
        return (
            <div className="header">
                <p className="header_text">Simons Sweet Co.</p>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    const { auth, loading } = store;
    return { auth, loading };
};

export default connect(mapStateToProps)(Login);
