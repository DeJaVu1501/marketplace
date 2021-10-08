import React, { useState } from "react";
import { connect } from "react-redux";
import TypeAd from "../pages/Home";
import Loader from "./PreLoader";

const PromiseComponent = ({promiseStatus,promiseName,children}) => {
    if(promiseStatus[promiseName] && promiseStatus[promiseName].status === "RESOLVED") {
        return children
    }
    else {
        return (
        <div className='loader'>
            <Loader />
        </div>
        )
    }
}

const CPromiseComponent = connect(state => ({promiseStatus: state.promiseReducer}))(PromiseComponent)
export default CPromiseComponent