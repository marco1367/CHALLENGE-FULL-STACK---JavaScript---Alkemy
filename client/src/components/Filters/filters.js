import React from "react";
import { useState, useEffect } from 'react';
import "./filters.css"
import { connect } from "react-redux";
import Select from 'react-select';
import {GetTypes, GetAllOperations} from "../Redux/actions";
// import OperationList from "../OperationList/index";




function Filters({Types, GetTypes, GetAllOperations}) {
    const [inputTypes, setImputTypes] = useState([]);
    // const [idType, setIdType] = useState("")


    useEffect(async()=>{
        GetTypes();
    },[])

    useEffect(() => {
        let list_types = [];
        Types.forEach(type => {
            list_types.push(
                { value: type.id_type, label: type.name }
            )
        });
        setImputTypes(list_types);
    }, [Types]);



    function handleChangeTypes(e){
        if (e) {
            GetAllOperations(e.value);
        }else{
            GetAllOperations("");
        }
    }

    


    return (

        <div id="filter_container_principal" >
            <p>Select Type:</p>

            <form id="form_filters_container"  >
                <div id="form_filters_div_select" >   
                    <Select
                        options={inputTypes}
                        onChange={(e)=>{handleChangeTypes(e)}}
                        isClearable={true}
                    />
                </div>
                {/* <button type="submit">Aply</button> */}
            </form>
        </div>

    );
  }



function mapStateToProps(state) {
    return {
        Types: state.TypesLoaded,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        GetTypes: () => dispatch(GetTypes()),
        GetAllOperations: (val) => dispatch(GetAllOperations(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);