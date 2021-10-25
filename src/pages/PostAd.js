import React ,{useState, useRef} from "react";
import { connect } from "react-redux";
import { actionPostAd } from "../actions";
import { Container } from "react-bootstrap";
import {useDropzone} from 'react-dropzone'
import { Redirect ,useHistory} from "react-router";


const Post = ({onPost}) => {
    let history = useHistory()
    let [title,setTitle] = useState('')
    let [description,setDescription] = useState('')
    let [price,setPrice] = useState(0)
    const loading = useRef()  
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    if(acceptedFiles.length > 0 && !loading.current) {
      loading.current = true
    }

    const files = acceptedFiles.map(file => (
        <li key={file.name}>
          {file.name}
        </li>
    ));

    return (
        <Container >
            <div className='d-flex flex-column align-items-start post'>
                <label>Введите название</label>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder='Например,Iphone 8'></input>
            </div>
            <div className='post'>
                <div {...getRootProps({className: 'dropzone'})}>
                  <input {...getInputProps() }/>
                  <p>Фото, нажмите для добавления. Первое фото будет на обложке объявления</p>
                </div>
                <aside>
                    <h5>Фото: </h5>
                    <ul>{files}</ul>
                </aside>
            </div>
            <div className='d-flex flex-column align-items-start post'>
                <label>Описание</label>
                <textarea rows="5" cols="75" value={description} onChange={e => setDescription(e.target.value)} placeholder='Подумайте,какие подробности вы бы хотели узнать из объявления. И добавьте их в описание'></textarea>
            </div>
            <div className='d-flex flex-column align-items-start post'>
                <label>Введите цену</label>
                <input type={"number"} value={price} onChange={e => e.target.value>=0 ? setPrice(+e.target.value) : ""} placeholder='Цена' ></input>
            </div>
            <div className="d-flex flex-column align-items-end post">
                <button onClick={()=> onPost(title,description,price,acceptedFiles) && history.push('/')}>Опубликовать</button>
            </div>
        </Container>
    )
}

const CPost = connect(null,{onPost: actionPostAd})(Post)
export default CPost