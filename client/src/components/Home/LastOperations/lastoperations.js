import React from "react";
import { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import "./lastoperations.css"
import { GetLastOperations } from "../../Redux/actions";
import OperationList from "../../OperationList/index";



function LastOperations({GetLastOperations, LastOperations}) {

    useEffect(async () => {
        await GetLastOperations();
    }, []);

    return (
        <div id="last_operations_container" >
            <div id="last_operation_contener_title" >
                <h1>Last ten operations recorded</h1>
            </div>
            
            <OperationList Operations={LastOperations} />
            
            <div id="form_bttn_container" >
                <Link to="/alloperations" >
                    <button id="form_newopertaion_bttn" >All operations</button>
                </Link>
            </div>

        </div>
    );
  }
  


function mapStateToProps(state) {
    return {
        LastOperations: state.LastOperations,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        GetLastOperations: () => dispatch(GetLastOperations()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LastOperations);