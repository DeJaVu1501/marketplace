import React from "react"; 
import { Container,Carousel } from "react-bootstrap";

export const AdOne=({price, title,description,images}) => {
    return (
        <Container>
            <div>
                <Carousel>
                    <img src = {`http://marketplace.asmer.fs.a-level.com.ua/${images ? images[0]?.url : ''}`} />
                </Carousel>
                <p>{title}</p>
                <p>{description}</p>
                <p>{`${price ? price : "0"} грн.`}</p>
            </div>
            </Container>
    )
}