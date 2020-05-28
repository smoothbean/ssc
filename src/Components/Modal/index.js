import React, { Component } from "react";
import * as ReactModal from "react-modal";
import "./modal.scss";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement("#root");

class Modal extends Component {
    render() {
        return (
            <ReactModal
                isOpen={this.props.open}
                onRequestClose={this.props.toggle}
                style={{
                    content: {
                        maxWidth: "580px",
                        maxHeight: "300px",
                    },
                    overlay: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "rgba(0, 0, 0, 0.53)",
                        zIndex: 1000,
                    },
                }}
                contentLabel="Example Modal"
            >
                <div className="inner">{this.props.children}</div>
            </ReactModal>
        );
    }
}

export default Modal;
