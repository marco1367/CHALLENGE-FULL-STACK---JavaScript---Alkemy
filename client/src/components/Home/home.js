import React from "react";
import "./home.css"
import { useState, useEffect } from 'react';
import LastOperations from "./LastOperations/lastoperations";
import {GetAllOperations} from "../Redux/actions";
import { connect } from "react-redux";
import img_positive from "./contento.png";
import img_negative from "./cara-triste.png";




function Home({ AllOperations, GetAllOperations }) {
    const [state, setState] = useState(0);


    useEffect(async () => {
        await GetAllOperations();
    }, []);

    useEffect(async () => {
        let state_acount = 0;
        AllOperations.forEach(operation => {

            if(operation.type.name==="entry"){
                state_acount = state_acount + operation.amount;
            }else{
                state_acount = state_acount - operation.amount;
            }
        });
        setState(state_acount);
    }, [AllOperations]);



    return (
        <div id="home_container" >

            <div id="home_account_status_container" >
                <div id={state<0 ? "acount_status_color_negative" : "acount_status_color_positive"} >
                    <h2 className="home_account_status_elements" >Account status:</h2>
                    <p className="home_account_status_elements" id="p_amount_account_status" > $ {state} </p>
                </div>
                { state<0 ? <img src={img_negative} className="home_acount_status_img" /> : <img src={img_positive} className="home_acount_status_img" />}
            </div>

            <LastOperations/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);