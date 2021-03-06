import React, { Component } from "react";

import "./card.scss";

class Card extends Component {
    render() {
        if (this.props.add)
            return (
                <div className="card card--add" onClick={this.props.onClick}>
                    <div className="card_body card--add_body">
                        Add a {this.props.title}
                    </div>
                    <p className="add">+</p>
                </div>
            );
        return (
            <div className="card">
                <div className="card_title">{this.props.title}</div>
                <div className="card_body">{this.props.children}</div>
            </div>
        );
    }
}

export default Card;
