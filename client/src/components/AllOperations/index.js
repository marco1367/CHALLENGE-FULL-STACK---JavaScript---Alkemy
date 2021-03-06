import React from "react";
import "./index.css"
import { useEffect } from 'react';
import { connect } from "react-redux";
import {GetAllOperations} from "../Redux/actions";
import OperationList from "../OperationList/index";
import Filters from "../Filters/filters";




function AllOperations({GetAllOperations, AllOperations}) {

    useEffect(async () => {
        await GetAllOperations();
    }, []);

    return (
        <div id="all_operations_container_principal" >

            <Filters/>

            <div id="last_operations_container" >
                <div id="last_operation_contener_title" >
                    <h1>Record of all operations</h1>
                    <div className="linea_titulo_home" ></div>
                </div>
                
                <OperationList Operations={AllOperations} />
                

            </div>
        </div>
    );
  }



function mapStateToProps(state) {
    return {
        AllOperations: state.AllOperations,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        GetAllOperations: () => dispatch(GetAllOperations()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOperations);

