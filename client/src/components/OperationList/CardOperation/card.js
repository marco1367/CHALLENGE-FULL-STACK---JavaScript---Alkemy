import React from "react";
import { useState, useEffect } from 'react';
import "./card.css"
import imgEdit from "./lapiz.png";
import imgDetails from "./ver.png"; 
import ModalDetails from "../ModalDetails/modaldetails";
import ModalEdit from "../ModalEdit/modaledit";




function Card( {operation} ) {
    const [stateModalDetails, setStateModalDetails] = useState({ open: false });
    const [stateModalEdit, setStateModalEdit] = useState({ open: false });


  //-------FUNCIONES CALLBACK PARA MODAL------//
  //--------------------------------------------------//
  function openModalDetails() {
    setStateModalDetails({ open: !stateModalDetails.open })
  }

  function openModalEdit() {
    setStateModalEdit({ open: !stateModalEdit.open })
  }
  //--------------------------------------------------//
  //--------------------------------------------------//

    
    return (
        <div className="card_container" >
            <div className="card_div_container" >
                <p>{operation.concept.substring(0,10)}...</p>
            </div>

            <div className="card_div_container" >
                <p>{`$ `+operation.amount}</p>
            </div>

            <div className="card_div_container" >
                <p>{operation.date}</p>
            </div>

            <div className="card_div_container" >
                <p>{operation.type.name}</p>
            </div>
            
            
            <div className="card_div_container" >
                <img src={imgDetails} className="card_img" onClick={()=>{openModalDetails()}} />
                <img src={imgEdit} className="card_img" onClick={()=>{openModalEdit()}} />
            </div>
            
            <ModalDetails open={stateModalDetails.open} openModal={openModalDetails} operation={operation} />
            <ModalEdit open={stateModalEdit.open} openModal={openModalEdit} operation={operation} />
        </div>

    );
}
  
  export default Card;