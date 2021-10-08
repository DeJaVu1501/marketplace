import React, {useEffect} from "react";
import {connect}   from 'react-redux';
import {AdFeed} from "../Components/CAdFeed";
import {AdOne} from "../Components/AdOne";
import { actionTypeAd ,actionTypeAdOne} from "../actions";
import { Redirect } from "react-router";
import {useHistory} from 'react-router-dom';
import Loader from "../Components/PreLoader";
import { CAdfeed } from "../Components/CAdFeed";
import CPromiseComponent from "../Components/PromiseComponent";
export const Home = ({getData,data2}) => {
    useEffect(()=>getData(),[])
   
    if(data2){
        return (
            <CPromiseComponent promiseName='AdFind'>
                <div>
                    {data2.map(ad => <AdFeed key={ad._id} _id = {ad. _id} price = {ad.price} title = {ad.title} description={ad.description} owner={ad.owner} images={ad.images} comments={ad.comments} />)}
                </div>
            </CPromiseComponent>
        )
    }
}

const TypeAd = connect(state => ({data2: state.promiseReducer.AdFind?.payload?.data?.AdFind || []}),{getData: actionTypeAd})(Home)
export default TypeAd