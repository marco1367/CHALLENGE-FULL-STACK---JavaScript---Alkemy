import React, { useState, useEffect } from 'react';
import "./FormNewOperation.css";
import Select from 'react-select';
import { connect } from "react-redux";
import { GetTypes, PostNewOperation, GetLastOperations, GetAllOperations } from "../Redux/actions";
import rejected from "./rejected.png";
import goodcheck from "./goodcheck.png";



function FormNewOperation({ GetTypes, Types, msgNewOperation, PostNewOperation, GetLastOperations, GetAllOperations }) {
    const [inputTypes, setImputTypes] = useState([]);
    const [inputValues, setImputValues] = useState( { id_type:"", concept:"", amount:"", date:"" } )


    useEffect(async () => {
        await GetTypes();
    }, []);

    useEffect(() => {
        let list_types = [];
        Types.forEach(type => {
            list_types.push(
                { value: type.id_type, label: type.name }
            )
        });
        setImputTypes(list_types);
    }, [Types]);



    // Function to limit maximum date (input Date): (this function return a string date)
    function maxDate(){
        const date = new Date();
        let day = (date.getDay()+1).toString();
        let month = (date.getMonth()+1).toString();
        let year = (date.getFullYear()).toString();

        if (day.length===1) {
            day = 0+day;
        }
        if (month.length===1) {
            month = 0+month;
        }

        return year+"-"+month+"-"+day;
    }
    //--------------------------------------------//


    function handleChange(e){

        const name = e.target.name;
        setImputValues({
            ...inputValues,
            [name]: e.target.value
        });
    }

    function handleChangeSelect(event){

        setImputValues({
            ...inputValues,
            id_type: event.value
        })
    }


    async function handleSubmit(event){
        event.preventDefault();
        await PostNewOperation({
            id_type: inputValues.id_type,
            concept: inputValues.concept,
            amount: parseFloat(inputValues.amount),
            date: inputValues.date
        });

        await GetLastOperations();
        await GetAllOperations();

    }

    // functio_bttn_click message new operation
    function bttnClick(){
        PostNewOperation("")
    }



    return (
        <div id="newoperation_container_principal" >

            {
                msgNewOperation.message 
                ?
                    <div>
                        {
                            msgNewOperation.message==="Operation registered successfully."
                            ? 
                                <div className="from_message_container_principal">
                                    <div className="form_message_container" >
                                        <h3> {msgNewOperation.message} </h3>
                                        <img src={goodcheck} />
                                    </div> 
                                    <button 
                                        className="form_message_bttn"
                                        onClick={(e)=>{bttnClick(e)}} 
                                    >Register another operation</button> 
                                </div>
                            :
                                <div className="from_message_container_principal" >
                                    <div className="form_message_container" >
                                        <h3> {msgNewOperation.message} </h3>
                                        <img src={rejected} />
                                    </div>
                                    <button 
                                        className="form_message_bttn"
                                        onClick={(e)=>{bttnClick(e)}} 
                                    >Re-register operation</button>
                                </div>
                        }
                    </div>
                :
                    <div id="newoperation_container_secondary" >
                        <div id="newoperation_conteiner_secondary_header">
                            <h1>Register a new operation</h1>
                            <div className="linea_titulo_home" ></div>
                            <p>* Required fields</p>
                        </div>

                        <form id="form_newoperation_container" onSubmit={(event)=>{handleSubmit(event)}} >

                            <div id="form_inputs_container" >
                                
                                <div className="form_select_conteiner_individual" >
                                    <label>* Type of operation :</label>
                                    <Select
                                        options={inputTypes}
                                        onChange={ (event)=>{handleChangeSelect(event)} }
                                    />
                                </div>

                                <div className="form_input_conteiner_individual" >
                                    <label>* Operation concept :</label>
                                    <input type="text" name="concept" placeholder="Concept..." onChange={(e)=>{handleChange(e)}} />
                                </div>

                                <div className="form_input_conteiner_individual" >
                                    <label>* Amount of the operation :</label>
                                    <input type="number" name="amount" step="0.001" placeholder="Amount...." onChange={(e)=>{handleChange(e)}} />
                                </div>

                                <div className="form_input_conteiner_individual" >
                                    <label>* Date of operation :</label>
                                    <input type="date" name="date" max={maxDate()} onChange={(e)=>{handleChange(e)}} />
                                </div>

                            </div>

                            <div id="form_bttn_container" >
                                <button 
                                    type="submit" 
                                    id="form_newopertaion_bttn"
                                    disabled={ ( inputValues.id_type==="" || inputValues.concept==="" || inputValues.amount==="" || inputValues.date==="" ) ? true : false }  
                                >Create operation</button>
                            </div>

                        </form>
                    </div>
            }



        </div>
    );
}


function mapStateToProps(state) {
    return {
        Types: state.TypesLoaded,
        msgNewOperation: state.msgNewOperation,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        GetTypes: () => dispatch(GetTypes()),
        PostNewOperation: (obj) => dispatch(PostNewOperation(obj)),
        GetLastOperations: () => dispatch(GetLastOperations()),
        GetAllOperations: () => dispatch(GetAllOperations()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormNewOperation);