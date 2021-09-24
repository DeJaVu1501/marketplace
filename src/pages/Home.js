import React, {useEffect} from "react";
import {connect}   from 'react-redux';
import {AdFeed} from "../Components/CAdFeed";
import { actionTypeAd } from "../actions";


export const Home = ({getData,data2}) => {
    useEffect(()=>getData(),[])
    if(data2){
        return (
            <div>
                {data2.map(ad => <AdFeed key={ad._id} _id = {ad. _id} price = {ad.price} title = {ad.title} description={ad.description} owner={ad.owner} images={ad.images}/>)}
            </div>
        )
    }
}

const TypeAd = connect(state => ({data2: state.promiseReducer.AdFind?.payload?.data?.AdFind || []}),{getData: actionTypeAd})(Home)
export default TypeAd