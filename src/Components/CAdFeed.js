import React from "react";
import { actionTypeAd } from "../actions";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


export const AdFeed=({_id, price, owner,title,description,images}) => {
    return (
        <div className="ad">
            <Link to={ `/${_id}`}>{title}</Link>
            <img src = {`http://marketplace.fs.a-level.com.ua/${Ad.images[0].url}`} />
            <p>{description}</p>
            <p>{owner}</p>
            <p>{price}</p>
        </div>
    )
}

// const CAdFeed = connect(state =>({listAd: state.promiseReducer?.AdFind?.payload?.data?.AdFind || []}),{listAd: actionTypeAd})(AdFeed)
// export default CAdFeed