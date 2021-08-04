// import React, {useState, useEffect} from 'react';
import "./modalDelete.css";
import { connect } from "react-redux";
import { Button, Modal, ModalBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css"
import { DeleteOperation, GetLastOperations, GetAllOperations } from "../../Redux/actions";



function ModalDelete({ open, openModal, id, DeleteOperation, GetLastOperations, GetAllOperations, msgDeleteOperation }) {



    async function handleSubmit(event) {
        event.preventDefault();

        await DeleteOperation({
            id_operation: id,
        })

        await GetLastOperations();
        await GetAllOperations();
    }

    return (

        <Modal isOpen={open} >
            <Button onClick={() => { openModal() }} >X</Button>
            <ModalBody>

                {
                    msgDeleteOperation.message
                        ?
                        <div>
                            <h3> {msgDeleteOperation.message} </h3>
                        </div>
                        :
                        <div className="div_inputs_container" >
                            <h4>You are about to delete an operation</h4>
                            <h5>¿are you sure of this?</h5>
                            <div>
                                <button type="button" onClick={(event) => { handleSubmit(event) }} >Yes, delete</button>
                            </div>
                        </div>

                }


            </ModalBody>
        </Modal>

    );
}


function mapStateToProps(state) {
    return {
        msgDeleteOperation: state.msgDeleteOperation,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        DeleteOperation: (obj) => dispatch(DeleteOperation(obj)),
        GetLastOperations: () => dispatch(GetLastOperations()),
        GetAllOperations: () => dispatch(GetAllOperations()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDelete);