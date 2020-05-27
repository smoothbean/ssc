import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect, Link } from "react-router-dom";

import Loading from "../../Components/Loading";
import Card from "../../Components/Card";
import Button from "../../Components/Button";
import Form from "../../Components/Form";
import Modal from "../../Components/Modal";

class Order extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            size: "",
        };

        this.handleOrder = this.handleOrder.bind(this);
        this.handleCustomOrder = this.handleCustomOrder.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggleOrderSuccessModal = this.toggleOrderSuccessModal.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1500);
    }

    handleOrder(id) {
        if (!this.props.auth.user)
            return this.setState({ redirectTo: "/login" });
        if (this.props.auth.isAdmin) return alert("Login to a user account");
        this.setState({
            size: this.props.packs.find((p) => p.id == Number(id)).size,
            isOrderSuccessModalOpen: true,
        });
    }

    handleCustomOrder() {
        if (!this.props.auth.user)
            return this.setState({ redirectTo: "/login" });
        if (this.props.auth.isAdmin) return alert("Login to a user account");
        if (!this.state.size) return alert("Please enter a qty.");
        if (!Number(this.state.size))
            return alert("Please enter a numeric value.");

        if (this.props.packs.find((p) => p.size == Number(this.state.size))) {
            return this.setState({
                isOrderSuccessModalOpen: true,
            });
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }

    toggleOrderSuccessModal() {
        this.setState({
            isOrderSuccessModalOpen: !this.state.isOrderSuccessModalOpen,
        });
    }

    render() {
        if (this.state.redirectTo)
            return <Redirect to={this.state.redirectTo} />;
        const { loading } = this.state;
        if (loading) return <Loading />;
        return (
            <div className="page col">
                <p className="title">
                    Custom Order
                    {!this.props.auth.user ? (
                        <span>
                            - <Link to="/login">Login</Link> to order
                        </span>
                    ) : (
                        ""
                    )}
                </p>
                <Card title="Custom Order">
                    <Form
                        onChange={this.onChange}
                        full
                        inputs={[
                            {
                                type: "text",
                                name: "size",
                                placeholder: "Enter the qty",
                                label: "Qty",
                            },
                        ]}
                    />
                    <Button text="Order" onClick={this.handleCustomOrder} />
                </Card>
                <p className="title title--upper_space">Our Products</p>
                <div className="cards">
                    {this.props.packs.map((p) => (
                        <Card title={p.id} key={p.id}>
                            <p className="title">Qty: {p.size}</p>
                            <Button
                                text="Order"
                                onClick={() => {
                                    this.handleOrder(p.id);
                                }}
                            />
                        </Card>
                    ))}
                </div>
                <Modal
                    open={this.state.isOrderSuccessModalOpen}
                    toggle={this.toggleOrderSuccessModal}
                >
                    <div className="col">
                        <p className="title">Order Successful</p>
                        <p className="title">Qty: {this.state.size}</p>
                        <Button
                            text="Buy more sweets"
                            onClick={this.toggleOrderSuccessModal}
                            large
                        />
                    </div>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    const { auth, loading, packs } = store;
    return { auth, loading, packs };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // removePack: bindActionCreators(removePack, dispatch),
        // addPack: bindActionCreators(addPack, dispatch),
    };
};

export default connect(mapStateToProps)(Order);
