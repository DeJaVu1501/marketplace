import React from "react";
import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";
import nofoto from '../images/placeholder.png'

export const MyFeed=({_id, price, owner,title,description,images,comments,createdAt}) => {
    
    return (
        <Container>
            <div className="row ad">
                <div className="col img">
                    {images ? 
                        <img src = {`http://marketplace.asmer.fs.a-level.com.ua/${images[0]?.url}`} />
                        : <img src={nofoto} />
                    }
                </div> 
                <div className="col-6" info>   
                    <Link to={ `/home/${_id}`}>{title}</Link>
                    <p>{description}</p>
                </div>
                <div className="col price">   
                    <p>{`${price ? price : "0"} грн.`}</p>
                </div>
                <div>
                <Link className='href' to={`/home/edit/${_id}`}>Редактировать</Link>
                </div> 
            </div>
        </Container> 
    )
}