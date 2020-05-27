import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Loading from "../../Components/Loading";
import Button from "../../Components/Button";
import Card from "../../Components/Card";

import { removePack, addPack } from "./../../redux/actions/packs";

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }

    handleDelete(id) {
        if (window.confirm(`Are you sure you want to delete pack ${id}?`)) {
            return this.props.removePack(id);
        }
    }

    handleAdd() {}

    render() {
        const { loading } = this.state;
        if (loading) return <Loading />;
        return (
            <div className="page">
                <p className="title">Packs</p>
                <div className="cards">
                    {this.props.packs.map((p) => (
                        <Card title={p.id} key={p.id}>
                            <p className="title">Qty: {p.size}</p>
                            <Button
                                text="Delete"
                                onClick={() => {
                                    this.handleDelete(p.id);
                                }}
                            />
                        </Card>
                    ))}
                    <Card add title="Pack" onClick={this.handleAdd} />
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
        removePack: bindActionCreators(removePack, dispatch),
        addPack: bindActionCreators(addPack, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
