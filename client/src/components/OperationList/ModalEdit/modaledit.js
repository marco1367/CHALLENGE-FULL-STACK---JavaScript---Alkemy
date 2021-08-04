import React, { useState, useEffect } from 'react';
import "./modaledit.css";
import { connect } from "react-redux";
import { UpdateOperation, GetLastOperations, GetAllOperations } from "../../Redux/actions";
import { Button, Modal, ModalBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css"


function ModalEdit({ open, openModal, operation, UpdateOperation, GetLastOperations, GetAllOperations, msgUpdateOperation }) {
    const [inputValues, setImputValues] = useState({ id_operation: operation.id_operation, concept: "", amount: "", date: "" })


    function closeModal() {
        setImputValues({
            id_operation: operation.id_operation,
            concept: "",
            amount: "",
            date: ""
        });

        UpdateOperation("")
        openModal();
    }

    function handleChange(e) {
        const name = e.target.name;
        setImputValues({
            ...inputValues,
            [name]: e.target.value
        });
    }


    async function handleSubmit(event) {
        event.preventDefault();

        await UpdateOperation({
            id_operation: inputValues.id_operation,
            concept: inputValues.concept,
            amount: parseFloat(inputValues.amount),
            date: inputValues.date
        });

        await GetLastOperations();
        await GetAllOperations();

    }



    return (

        <Modal isOpen={open} >
            <Button onClick={() => { closeModal() }} >X</Button>
            <ModalBody>

                {
                    msgUpdateOperation.message
                        ?
                        <div>
                            <h3> {msgUpdateOperation.message} </h3>
                        </div>
                        :
                        <form>

                            <div className="div_inputs_container" >
                                <h4>Here you can edit the selected operation</h4>
                                <p>At least one field is required</p>
                            </div>

                            <div className="div_inputs_container" >
                                <label>New operation concept :</label>
                                <input type="text" name="concept" placeholder="New concept..." onChange={(e) => { handleChange(e) }} />
                            </div>

                            <div className="div_inputs_container" >
                                <label>New amount of the operation :</label>
                                <input type="number" name="amount" step="0.001" placeholder="New amount...." onChange={(e) => { handleChange(e) }} />
                            </div>

                            <div className="div_inputs_container" >
                                <label>New date of operation :</label>
                                <input type="date" name="date" onChange={(e) => { handleChange(e) }} />
                            </div>

                            <div className="div_inputs_container" >
                                <Button onClick={(event) => { handleSubmit(event) }} >Make changes</Button>
                            </div>

                        </form>
                }


            </ModalBody>
        </Modal>




    );
}



function mapStateToProps(state) {
    return {
        msgUpdateOperation: state.msgUpdateOperation,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        UpdateOperation: (obj) => dispatch(UpdateOperation(obj)),
        GetLastOperations: () => dispatch(GetLastOperations()),
        GetAllOperations: () => dispatch(GetAllOperations()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);