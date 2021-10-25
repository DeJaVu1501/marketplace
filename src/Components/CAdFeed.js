import React from "react";
import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";
import nofoto from '../images/placeholder.png'

export const AdFeed=({_id, price,title,description,images}) => {
    
    return (
        <Container>
            {title !== null &&
                <div className="row ad ">
                    <div className="col img">
                        {images ?
                            <img src = {`http://marketplace.asmer.fs.a-level.com.ua/${images[0]?.url}`} />
                            : <img src={nofoto} />
                        }
                    </div> 
                    <div className="col-6 info">   
                        <Link to={ `/home/${_id}`}>{title}</Link>
                        <p>{description}</p>
                    </div>
                    <div className="col price">   
                        <p>{`Цена: ${price ? price : "0"} грн.`}</p>
                    </div> 
                </div>
            }
        </Container> 
    )
}

