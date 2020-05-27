import React, { Component } from "react";
import logo from "../../spog.png";

class Loading extends Component {
    render() {
        return (
            <div className="page_loading">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Loading;
