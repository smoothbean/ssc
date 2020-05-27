import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Loading from "../../Components/Loading";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Modal from "../../Components/Modal";
import Form from "../../Components/Form";

import { removePack, addPack } from "./../../redux/actions/packs";

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            isAddModalOpen: false,
            size: "",
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.toggleAddModal = this.toggleAddModal.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 2000);
    }

    handleDelete(id) {
        if (window.confirm(`Are you sure you want to delete pack ${id}?`)) {
            return this.props.removePack(id);
        }
    }

    handleAdd() {
        if (!this.state.size) return alert("Please enter a qty");

        if (this.props.packs.find((p) => p.size == this.state.size))
            return alert("That qty. already exists");

        this.props.addPack(this.state.size);
        this.toggleAddModal();
    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }

    toggleAddModal() {
        this.setState({ isAddModalOpen: !this.state.isAddModalOpen });
    }

    render() {
        const { loading } = this.state;
        if (loading) return <Loading />;
        return (
            <div className="page">
                <p className="title">Packs</p>
                <div className="cards">
                    <Card add title="Pack" onClick={this.toggleAddModal} />
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
                </div>
                <Modal
                    open={this.state.isAddModalOpen}
                    toggle={this.toggleAddModal}
                >
                    <div className="col">
                        <p className="title">Add a pack</p>
                        <Form
                            onChange={this.onChange}
                            modal
                            inputs={[
                                {
                                    type: "text",
                                    name: "size",
                                    placeholder: "Enter the qty",
                                    label: "Qty",
                                },
                            ]}
                        >
                            <Button onClick={this.handleAdd} text="Add" large />
                        </Form>
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
        removePack: bindActionCreators(removePack, dispatch),
        addPack: bindActionCreators(addPack, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
