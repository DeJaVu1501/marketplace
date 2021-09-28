import React from "react";
import { actionTypeAd } from "../actions";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


export const AdFeed=({_id, price, owner,title,description,images}) => {
    return (
        <div className="row ad">
            <div className="col img">
                <img src = {`http://marketplace.asmer.fs.a-level.com.ua/${images ? images[0]?.url : ''}`} />
            </div> 
            <div className="col-6" info>   
                <Link to={ `/${_id}`}>{title}</Link>
                <p>{description}</p>
            </div>
            <div className="col price">   
                <p>{owner}</p>
                <p>{`${price ? price : "0"} грн.`}</p>
            </div>    
        </div>
        
    )
}

// const CAdFeed = connect(state =>({listAd: state.promiseReducer?.AdFind?.payload?.data?.AdFind || []}),{listAd: actionTypeAd})(AdFeed)
// export default CAdFeed