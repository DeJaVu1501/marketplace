import React from "react";
import { actionTypeAd } from "../actions";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";

export const AdFeed=({_id, price, owner,title,description,images,comments}) => {
    return (
        <Container>
        <div className="row ad">
            <div className="col img">
                <img src = {`http://marketplace.asmer.fs.a-level.com.ua/${images ? images[0]?.url : ''}`} />
            </div> 
            <div className="col-6" info>   
                <Link to={ `/home/${_id}`}>{title}</Link>
                <p>{description}</p>
            </div>
            <div className="col price">   
                <p>{owner}</p>
                <p>{`${price ? price : "0"} грн.`}</p>
            </div> 
            <div>
                <p>{comments || null}</p>
            </div>   
        </div>
        </Container> 
    )
}
export const CAdfeed = connect(state=>({comments: state.promiseReducer.AdFind?.payload?.data?.AdFind.comments[0]?.owner}))(AdFeed)
