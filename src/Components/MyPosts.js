import React from "react";
import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";
import nofoto from '../images/placeholder.png'

export const MyFeed=({_id, price, owner,title,description,images,comments,createdAt}) => {
    function timeConverter(t){
        let a = new Date(+t);
        let months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' в ' + hour + ':' + min ;
        return time;
      }
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