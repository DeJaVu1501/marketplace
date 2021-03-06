import React from "react"; 
import { Container } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import nofoto from '../images/placeholder.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CCommentInput from "./CommentInput";

export const AdOne=({price, title,description,images,comments,createdAt,owner}) => {
    function timeConverter(t){
        let a = new Date(+t);
        let months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' в ' + hour + ':' + (min < 10 ? `0${min}`: min) ;
        return time;
      }
    return (
        <Container>
            <div className='AdPage '>
                <Carousel className='carousel' infiniteLoop useKeyboardArrows showStatus={false} showThumbs={false} >
                    {images? images.map(image =>  
                        <img src = {`http://marketplace.asmer.fs.a-level.com.ua/${image.url}`} />
                    ): <img src={nofoto} />} 
                    
                </Carousel>
                <div className='mainInfo'>
                    <i>{`Опубликовано: ${timeConverter(createdAt)}`}</i>
                    <b>{title}</b>
                    <h4>{`${price ? price : "0"} грн.`}</h4>
                    <p>{description}</p>
                    <p>{`Владелец: ${owner.login}`}</p>
                    <p>{`Зарегистрирован на marketplace: ${timeConverter(owner.createdAt)}`}</p>
                </div>
                <div className='mainInfo'>
                    {comments ? 
                        comments.map(comment => {
                            return (<div><p>{` ${comment.owner.login} : ${comment.text}`}</p></div>)})
                            : <p>Коментариев нет</p>
                    }
                <CCommentInput />
                </div>
            </div>
        </Container>
    )
}