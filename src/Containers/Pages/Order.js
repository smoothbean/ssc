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

    onChange(name, val) {
        this.setState({ [name]: val });
    }

    handleOrder(id) {
        if (!this.props.auth.user)
            return this.setState({ redirectTo: "/login" });
        if (this.props.auth.isAdmin) return alert("Login to a user account.");
        this.setState({
            size: this.props.packs.find((p) => p.id == Number(id)).size,
            isOrderSuccessModalOpen: true,
        });
    }

    handleCustomOrder() {
        if (!this.props.auth.user)
            return this.setState({ redirectTo: "/login" });
        if (this.props.auth.isAdmin) return alert("Login to a user account.");
        if (!this.state.size) return alert("Please enter a qty.");
        if (!Number(this.state.size))
            return alert("Please enter a numeric value.");

        if (this.props.packs.find((p) => p.size == Number(this.state.size))) {
            return this.setState({
                isOrderSuccessModalOpen: true,
            });
        }

        let size = Number(this.state.size);
        let remainingSize = size;
        let itemised = [];

        let ratedPacks = this.getBestPacksForSize(remainingSize);

        // Sort packs , first by Qty needed to fulfill size and then by amount of sweets it will provide
        // Doing this means it prefers the least amount of packaging
        let sortQtyAndSweets = ratedPacks
            .sort((a, b) => a.qty - b.qty)
            .sort((a, b) => a.sweets - b.sweets);

        let chosenPack = false;
        // Loop through the sorted pack
        sortQtyAndSweets.forEach((item, key) => {
            if (!chosenPack) {
                // Check the wastage (excess sweets)
                let wastage = remainingSize - item.sweets;

                // Get the difference between wastage and 0
                let difference = Math.abs(0 - wastage);

                console.log(wastage, difference, "-");

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

        console.log(ratedPacks, sortQtyAndSweets, chosenPack);

        // let sizes = [];
        // let sweets = {};

        // while (remainingSize > 0) {
        //     // See how many it would take of each pack size for the remaining size
        //     this.props.packs.forEach((pack) => {
        //         sizes.push({
        //             pack,
        //             qty: remainingSize / pack.size,
        //         });
        //     });

        //     // Create a rating for each pack
        //     let ratings = [];
        //     sizes.forEach((s) => {
        //         let rating = 0;
        //         let obj = {
        //             pack: s.pack,
        //             rating: s.qty,
        //         };
        //         // Do not add the rating if it is 0
        //         console.log(obj, s.qty, "----");
        //         ratings.push(obj);
        //     });

        //     // Get the closest rating to 1
        //     let closestToZero = ratings.sort(
        //         (a, b) => Math.abs(1 - a.rating) - Math.abs(1 - b.rating)
        //     );
        //     let bestRating = closestToZero[0];

        //     // If it is already itemised then increase qty
        //     let qKey = Object.keys(itemised).find(
        //         (i) => itemised[i].size === bestRating.pack.size
        //     );
        //     if (qKey) {
        //         itemised[qKey].qty++;
        //     } else {
        //         // Else push it to the arr
        //         itemised.push({ qty: 1, pack: bestRating.pack });
        //     }

        //     console.log(ratings, bestRating);

        //     remainingSize = remainingSize - bestRating.pack.size;
        //     sizes = [];
        //     sweets = {};
        // }

        this.setState({
            itemised,
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
                        {this.state.itemised &&
                            this.state.itemised.map((i, key) => (
                                <p key={key} className="item">
                                    x{i.qty} - {i.pack.size}
                                </p>
                            ))}
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
