import React, {useEffect} from "react";
import {connect}   from 'react-redux';
import {AdFeed} from "../Components/CAdFeed";
import { actionSearch} from "../actions";
import CPromiseComponent from "../Components/PromiseComponent";
import ErrorSearch from "../Components/RegErrors/SearchError";
export const Search = ({getData,data,match:{params:{searchName}}}) => {
    useEffect(()=>getData(searchName),[searchName])
        return (
            <CPromiseComponent promiseName='SearchAd'>
                {data && Object.keys(data).length === 0 && <ErrorSearch />}
                {data?.map(ad => <AdFeed key={ad._id} _id = {ad. _id} price = {ad.price} title = {ad.title} description={ad.description} images={ad.images}/>)}
            </CPromiseComponent>
        )
    
}

const AdSearch = connect(state => ({data: state.promiseReducer.SearchAd?.payload?.data?.AdFind}),{getData: actionSearch})(Search)
export default AdSearch