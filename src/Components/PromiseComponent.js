import React from "react";
import { connect } from "react-redux";
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