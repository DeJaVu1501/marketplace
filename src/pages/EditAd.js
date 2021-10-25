import React ,{useState,useEffect,useRef} from "react";
import { connect } from "react-redux";
import { actionPostAd, actionTypeAdOne } from "../actions";
import { Container } from "react-bootstrap";
import CPromiseComponent from "../Components/PromiseComponent";
import { Redirect , useHistory} from "react-router";
import {useDropzone} from 'react-dropzone'
import { Carousel } from 'react-responsive-carousel';
import nofoto from '../images/placeholder.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Post = ({data,onChange,match:{params:{id}},getData}) => {
    let history = useHistory()

    let [title,setTitle] = useState('')
    let [description,setDescription] = useState('')
    let [price,setPrice] = useState(0)
    let [images,setImages] = useState()

    const loading = useRef()  
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    // const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);
    if(acceptedFiles.length > 0 && !loading.current) {
      loading.current = true
    }

    const files = acceptedFiles.map(file => (
        <li key={file.name}>
          {file.name}
        </li>
      ));

    useEffect(()=>{
        setTitle(data?.title)
        setDescription(data?.description)
        setPrice(data?.price)
        setImages(data?.images)
    },[data])

    useEffect(() => 
        getData(id),[id]
    )
    
    return (
        <>
            <CPromiseComponent promiseName='AdFindOne'>
                <Container >
                    <div className='d-flex flex-column align-items-start post'>
                        <label>Введите название</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} ></input>
                    </div>
                    <div className='post'>
                        <Carousel className='carousel' infiniteLoop useKeyboardArrows showStatus={false} showThumbs={false} >
                            {images ? images.map(image =>  
                                <img src = {`http://marketplace.asmer.fs.a-level.com.ua/${image.url}`} />
                            ): <img src={nofoto} />} 
                        </Carousel>
                    </div>
                    <div className='post'>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input onChange={e => setImages(e.target.value)} {...getInputProps() }/>
                            <p>Фото, нажмите для обновления. Первое фото будет на обложке объявления</p>
                        </div>
                        <aside>
                            <h5>Фото: </h5>
                            <ul>{files}</ul>
                        </aside>
                    </div>
                    <div className='d-flex flex-column align-items-start post'>
                        <label>Описание</label>
                        <textarea rows="5" cols="75" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                    </div>
                    <div className='d-flex flex-column align-items-start post'>
                        <label>Введите цену</label>
                        <input type={"number"} value={price} onChange={e => e.target.value>=0 ? setPrice(+e.target.value) : ""} ></input>
                    </div>
                    <div className="d-flex flex-column align-items-end post">
                        <button onClick={()=> onChange(title,description,price,data.images && acceptedFiles,data._id) && history.push('/profile')}>Изменить объявление</button>
                    </div>
                </Container>
            </CPromiseComponent>
        </>
    )
}

const CChange = connect(state => ({data: state.promiseReducer.AdFindOne?.payload?.data?.AdFindOne}),{onChange: actionPostAd, getData: actionTypeAdOne})(Post)
export default CChange
