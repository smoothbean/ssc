import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
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

    onChange(name, val) {
        this.setState({ [name]: val });
    }

    handleOrder(id) {
        if (!this.props.auth.user)
            return this.setState({ redirectTo: "/ssc/login" });
        if (this.props.auth.isAdmin) return alert("Login to a user account.");
        this.setState({
            size: this.props.packs.find((p) => p.id === Number(id)).size,
            isOrderSuccessModalOpen: true,
        });
    }

    handleCustomOrder() {
        if (!this.props.auth.user)
            return this.setState({ redirectTo: "/ssc/login" });
        if (this.props.auth.isAdmin) return alert("Login to a user account.");
        if (!this.state.size) return alert("Please enter a qty.");
        if (!Number(this.state.size))
            return alert("Please enter a numeric value.");

        if (this.props.packs.find((p) => p.size === Number(this.state.size))) {
            return this.setState({
                isOrderSuccessModalOpen: true,
            });
        }

        let size = Number(this.state.size);
        let remainingSize = size;
        let itemised = [];
        let total = 0;

        while (remainingSize > 0) {
            let ratedPacks = this.getBestPacksForSize(remainingSize);

            let lowestCanCoverIt = true;
            // Check if all the Qtys are 1
            ratedPacks.forEach((pack) => {
                if (pack.qty !== 1) lowestCanCoverIt = false;
            });

            let chosenPack = false;

            // If it only takes one of any of our packs then our lowest qty pack can cover it
            if (lowestCanCoverIt) {
                chosenPack = ratedPacks[0].pack;
            }

            if (!chosenPack) {
                // Else check the wastage of each option

                // Sort packs , first by Qty needed to fulfill size and then by amount of sweets it will provide
                // Doing this means it prefers the least amount of packaging
                let sortQtyAndSweets = ratedPacks
                    .sort((a, b) => a.qty - b.qty)
                    .sort((a, b) => a.sweets - b.sweets);

                // Loop through the sorted pack
                sortQtyAndSweets.forEach((item, key) => {
                    if (!chosenPack) {
                        // Check the wastage (excess sweets)
                        let wastage = remainingSize - item.sweets;

                        // Get the difference between wastage and 0
                        let difference = Math.abs(0 - wastage);

                        // Check that the difference is no greater than the remaining size
                        if (difference < remainingSize) {
                            chosenPack = item.pack;
                        } else {
                            // If the wastage is more than the remaining order than try and go for a lower pack

                            // Check a lower pack exists
                            if (sortQtyAndSweets[key + 1]) {
                                return;
                            } else {
                                // If a lower pack doesnt exist , use this one as it is the last
                                chosenPack = item.pack;
                            }
                        }
                    }
                });
            }

            // If it is already itemised then increase qty
            let qKey = Object.keys(itemised).find(
                (i) => Number(itemised[i].pack.size) === Number(chosenPack.size)
            );

            if (qKey || qKey === "0") {
                itemised[qKey].qty++;
            } else {
                // Else push it to the arr
                itemised.push({ qty: 1, pack: chosenPack });
            }

            total += chosenPack.size;
            remainingSize = remainingSize - chosenPack.size;
        }

        console.log(itemised, "down-");

        this.setState({
            itemised,
            total,
            isOrderSuccessModalOpen: true,
        });
    }

    getBestPacksForSize(size) {
        let sizes = [];
        this.props.packs.forEach((pack) => {
            // Calculate qty of packs needed for given order size
            let qty = Math.ceil(size / pack.size);
            sizes.push({
                pack,
                qty,
                // Calculate the total amount of sweets this will provide
                sweets: qty * pack.size,
            });
        });
        return sizes;
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
                            - <Link to="ssc/login">Login</Link> to order
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
                        <p className="title">Qty ordered: {this.state.size}</p>
                        {this.state.itemised && (
                            <Fragment>
                                {this.state.itemised.map((i, key) => (
                                    <p key={key} className="item">
                                        x{i.qty} - {i.pack.size}
                                    </p>
                                ))}
                                <p className="title">
                                    Qty shipped: {this.state.total}
                                </p>
                            </Fragment>
                        )}
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

export default connect(mapStateToProps)(Order);
