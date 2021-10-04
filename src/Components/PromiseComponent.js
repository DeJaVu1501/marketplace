import React, { useState } from "react";
import { connect } from "react-redux";
import TypeAd from "../pages/Home";
import Loader from "./PreLoader";

const PromiseComponent = ({component,promiseName,pending,resolved}) => {
    // const PromiseWrapper = ({}) => {
        // const OriginalComp = component
        // let [error,setError] = useState()
        // if(promiseName ==='PENDING') {
        //     return <Loader />
        // }
        // if(promiseName === 'RESOLVED') {
        //     return <OriginalComp />
        // }
        return (
           <div>
               {pending && <Loader />}
               {resolved && <TypeAd /> }
           </div>
        )
    // }
    // return <PromiseWrapper component={OriginalComp} />
}

const CPromiseComponent = connect(state => ({pending: state.promiseReducer?.AdFind?.status.includes('PENDING')}, {resolved: state.promiseReducer?.AdFind?.status.includes('RESOLVED') }))(PromiseComponent)
export default CPromiseComponent