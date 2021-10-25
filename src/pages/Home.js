import React, {useEffect, useState} from "react";
import {connect}   from 'react-redux';
import {AdFeed} from "../Components/CAdFeed";
import { actionTypeAd} from "../actions";
import CPromiseComponent from "../Components/PromiseComponent";

export const Home = ({getData,data}) => {
    const [fetching,setFetching] = useState(true)
    
    useEffect(()=> setFetching(false),[data])

    useEffect(()=>{
        if(fetching){
            getData()
        }},[fetching])

    useEffect(() => {
        document.addEventListener('scroll',scrollHandler)
        return function() {
            document.removeEventListener('scroll',scrollHandler)
        }
    },[])

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (window.innerHeight + e.target.documentElement.scrollTop) < 300){
           setFetching(true)
           console.log(e.target.documentElement.scrollHeight)
        }
    }
    if(data){
        return (
            <CPromiseComponent promiseName='AdFind'>
                <div>
                    {data.map(ad => <AdFeed key={ad._id} _id = {ad. _id} price = {ad.price} title = {ad.title} description={ad.description} owner={ad.owner} images={ad.images} comments={ad.comments} />)}
                </div>
            </CPromiseComponent>
        )
    }
}

const TypeAd = connect(state => ({data: state.promiseReducer.AdFind?.payload?.data?.AdFind || []}),{getData: actionTypeAd})(Home)
export default TypeAd