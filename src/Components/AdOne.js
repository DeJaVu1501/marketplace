import React from "react"; 
import { Container } from "react-bootstrap";

export const AdOne=({_id, price, title,description,images}) => {
    return (
        <div>
            <img src = {`http://marketplace.asmer.fs.a-level.com.ua/${images ? images[0]?.url : ''}`} />
            <p>{title}</p>
            <p>{description}</p>
            <p>{`${price ? price : "0"} грн.`}</p>
        </div>
    )
}