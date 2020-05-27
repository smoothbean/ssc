import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Loading from "../../Components/Loading";
import Card from "../../Components/Card";
import Button from "../../Components/Button";
import Form from "../../Components/Form";

class Order extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            qty: "",
        };

        this.handleOrder = this.handleOrder.bind(this);
        this.handleCustomOrder = this.handleCustomOrder.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 2000);
    }

    handleOrder(id) {
        console.log(id);
    }

    handleCustomOrder() {
        console.log(this.state);
    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }

    render() {
        const { loading } = this.state;
        if (loading) return <Loading />;
        return (
            <div className="page col">
                <p className="title">Custom Order</p>
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
