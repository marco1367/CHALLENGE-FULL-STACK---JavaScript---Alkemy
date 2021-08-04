import React from "react";
import "./index.css"
import { useState} from 'react';
import ReactPaginate from 'react-paginate';
import Card from "./CardOperation/card";



function OperationList({ Operations }) {
    const [pageNumber, setPageNumber] = useState(0);

    const operationsPerPage = 10;
    const pageVisited = pageNumber * operationsPerPage;
    const displayOperations = Operations.slice(pageVisited, pageVisited + operationsPerPage);
    const pageCount = Math.ceil(Operations.length / operationsPerPage);
    //callback function paginate:
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <div id="operation_list_container" >

            <div id="last_operations_container_title_colums" >
                <div className="card_div_container" > <p>Concept</p> </div>
                <div className="card_div_container" > <p>Amount</p> </div>
                <div className="card_div_container" > <p>Date</p> </div>
                <div className="card_div_container" > <p>Type</p> </div>
                <div className="card_div_container" ></div>
            </div>

            {
                displayOperations.map(operation => {
                    return <Card key={operation.id_operation} operation={operation} />
                })
            }

            {
                Operations.length > 10
                    ?
                    <ReactPaginate
                        previousLabel={"<<"}
                        nextLabel={">>"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        activeClassName={"paginationActive"}
                    />
                    :
                    null
            }

        </div>
    );
}

export default OperationList;