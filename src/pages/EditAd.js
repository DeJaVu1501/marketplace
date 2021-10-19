import React ,{useState,useEffect} from "react";
import { connect } from "react-redux";
import { actionPostAd, actionTypeAdOne } from "../actions";
import { Container } from "react-bootstrap";
import CPromiseComponent from "../Components/PromiseComponent";
import { Redirect } from "react-router";


const Post = ({data,onChange,match:{params:{id}},getData, posted}) => {
    let [title,setTitle] = useState('')
    let [description,setDescription] = useState('')
    let [price,setPrice] = useState(0)

    useEffect(()=>{
        setTitle(data?.title)
        setDescription(data?.description)
        setPrice(data?.price)
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
                    <div className='d-flex flex-column align-items-start post'>
                        <label>Описание</label>
                        <textarea rows="5" cols="75" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                    </div>
                    <div className='d-flex flex-column align-items-start post'>
                        <label>Введите цену</label>
                        <input type={"number"} value={price} onChange={e => e.target.value>=0 ? setPrice(+e.target.value) : ""} ></input>
                    </div>
                    <div className="d-flex flex-column align-items-end post">
                        <button onClick={()=> onChange(title,description,price,data._id)}>Изменить объявление</button>
                    </div>
                </Container>
            </CPromiseComponent>
            {posted && <Redirect push to ='/profile'/>} 
        </>
    )
}

const CChange = connect(state => ({data: state.promiseReducer.AdFindOne?.payload?.data?.AdFindOne, posted: state.promiseReducer.PostAd?.payload?.data?.AdUpsert}),{onChange: actionPostAd, getData: actionTypeAdOne})(Post)
export default CChange
