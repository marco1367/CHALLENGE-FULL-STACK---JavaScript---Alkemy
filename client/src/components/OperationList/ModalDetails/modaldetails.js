// import React, {useState, useEffect} from 'react';
import "./modaldetails.css";
import {Button, Modal, ModalBody} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css"


function ModalDetails({open, openModal, operation}){

    return(
            
        <Modal isOpen={open} >
            <Button onClick={()=>{openModal()}} >X</Button>
            <ModalBody>

                <div>
                    <div className="modal_details_div_concept" >
                        <h4>Concept :</h4>
                        <p> {operation.concept} </p>
                    </div>

                    <div className="modal_details_div" >
                        <h4>Amount :</h4>
                        <p> ${operation.amount} </p>
                    </div>

                    <div className="modal_details_div" >
                        <h4>Date :</h4>
                        <p> {operation.date} </p>
                    </div>

                    <div className="modal_details_div" >
                        <h4>Type :</h4>
                        <p> {operation.type.name} </p>
                    </div>
                </div>
                

            </ModalBody>
        </Modal>
            

        

    );
}

export default ModalDetails;