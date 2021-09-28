import React, {useEffect} from "react";
import {connect}   from 'react-redux';
import {AdOne} from "../Components/AdOne";
import {actionTypeAdOne} from "../actions";
import {useHistory} from 'react-router-dom';

export const Ad = ({getData3,data3, match:{params:{id}}}) => {
    useEffect(()=>getData3(id),[id])

    if(data3){
        return (
            <div>
                {(ad) =><AdOne key={ad._id} price = {ad.price} title = {ad.title} description={ad.description}  images={ad.images} /> }
            </div>
        )
    }
}

const TypeAdOne = connect((state) => ({data3: state.promiseReducer.AdFindOne?.payload?.data?.AdFindOne || []}),{getData3: actionTypeAdOne})(Ad)
export default TypeAdOne