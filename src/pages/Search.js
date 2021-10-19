import React, {useEffect} from "react";
import {connect}   from 'react-redux';
import {AdFeed} from "../Components/CAdFeed";
import { actionSearch} from "../actions";
import CPromiseComponent from "../Components/PromiseComponent";
export const Search = ({getData,data}) => {
    useEffect(()=>getData(),[])
    
        return (
            <CPromiseComponent promiseName='SearchAd'>
                <div>
                    {data?.map(ad => <AdFeed key={ad._id} _id = {ad. _id} price = {ad.price} title = {ad.title} description={ad.description} images={ad.images} />)}
                </div>
            </CPromiseComponent>
        )
    
}

const AdSearch = connect(state => ({data: state.promiseReducer.SearchAd?.payload?.data?.AdFind}),{getData: actionSearch})(Search)
export default AdSearch