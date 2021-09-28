import React, {useEffect} from "react";
import {connect}   from 'react-redux';
import {AdFeed} from "../Components/CAdFeed";
import {AdOne} from "../Components/AdOne";
import { actionTypeAd ,actionTypeAdOne} from "../actions";
import { Redirect } from "react-router";
import {useHistory} from 'react-router-dom';

export const Home = ({getData,data2}) => {
    useEffect(()=>getData(),[])
    let history = useHistory()
    if(!localStorage.authToken) {
        history.push("/login") 
    }
    if(data2){
        return (
            <div>
                {data2.map(ad => <AdFeed key={ad._id} _id = {ad. _id} price = {ad.price} title = {ad.title} description={ad.description} owner={ad.owner} images={ad.images} />)}
            </div>
        )
    }
}

const TypeAd = connect(state => ({data2: state.promiseReducer.AdFind?.payload?.data?.AdFind || []}),{getData: actionTypeAd})(Home)
export default TypeAd