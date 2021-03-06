import React, {useEffect} from "react";
import {connect}   from 'react-redux';
import {AdOne} from "../Components/AdOne";
import {actionTypeAdOne} from "../actions";
import {useHistory} from 'react-router-dom';
import CPromiseComponent from "../Components/PromiseComponent";

export const Ad = ({getData,data, match:{params:{id}}}) => {
    useEffect(()=>getData(id),[id])

    if(data){
        return (
            <CPromiseComponent promiseName='AdFindOne'>
                <div>
                    <AdOne key={data._id} price = {data.price} title = {data.title} description={data.description} owner ={data.owner} images={data.images} createdAt={data.createdAt} comments={data.comments}/>
                </div>
            </CPromiseComponent>
        )
    }
}

const TypeAdOne = connect((state) => ({data: state.promiseReducer.AdFindOne?.payload?.data?.AdFindOne || []}),{getData: actionTypeAdOne})(Ad)
export default TypeAdOne