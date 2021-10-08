import React, {useEffect} from "react";
import {connect}   from 'react-redux';
import {AdOne} from "../Components/AdOne";
import {actionTypeAdOne} from "../actions";
import {useHistory} from 'react-router-dom';
import CPromiseComponent from "../Components/PromiseComponent";

export const Ad = ({getData3,data3, match:{params:{id}}}) => {
    useEffect(()=>getData3(id),[id])

    if(data3){
        return (
            <CPromiseComponent promiseName='AdFindOne'>
                <div className="adone">
                    <AdOne key={data3._id} price = {data3.price} title = {data3.title} description={data3.description}  images={data3.images} />
                </div>
            </CPromiseComponent>
        )
    }
}

const TypeAdOne = connect((state) => ({data3: state.promiseReducer.AdFindOne?.payload?.data?.AdFindOne || []}),{getData3: actionTypeAdOne})(Ad)
export default TypeAdOne