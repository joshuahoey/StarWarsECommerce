import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import ProductTable from "../ProductTable/productTable";

function HomePage(props) {

    return (
        <React.Fragment>
            <div className="navbar">

            </div>
            <div className="productTable">
                 <ProductTable products={props.products} user={props.user} createCart={props.createCart}/>
            </div>
        </React.Fragment>
    )
}

export default withRouter(HomePage);