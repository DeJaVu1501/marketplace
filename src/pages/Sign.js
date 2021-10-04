import React from "react";
import {connect}   from 'react-redux';
import {useState} from "react";
import {actionFullRegister} from '../actions'
import {Redirect} from 'react-router-dom';
import ConfirmPass from "../Components/RegErrors/Confirmpass";
import MinPass from "../Components/RegErrors/MinPass";
import NumberCheckPass from "../Components/RegErrors/numberCheckPass";
import showPwdImg from '../images/3844476-eye-see-show-view-watch_110339.svg';
import hidePwdImg from '../images/3844477-disable-eye-inactive-see-show-view-watch_110343.svg';
import Button from "../Components/Button";
import { MyDropzone } from "../Components/DropZone";

const Sign = ({onSign,loggedIn}) => {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const[show,setShow]=useState(false)
    const[show2,setShow2]=useState(false)
    const[show3,setShow3]=useState(false)

    const [open,setOpen] = useState(false)
    const [open2,setOpen2] = useState(false)
   

    const isRegistrationValid = () => {
        if(!login || password.length<3 || password2.length<3) {
            return false 
        }
        if(!password.match(/\d/)){
            return false
        }
        if(password !== password2) {
            return false
        }   
        else return true
    }

    const registrationCallback = () => {
        if(isRegistrationValid()) {
            onSign(login, password)
        }
        else {
            setShow(true)
            setShow2(true)
            setShow3(true)
        }
    }

    return (
      <div className="divSign">
          <h4>Регистрация</h4>
          <div className="login-container">
              <label>Придумайте логин</label>
              <input value={login} onChange={e => setLogin(e.target.value)}  placeholder="Логин"></input>
          </div>
          <div className='pwd-container1'>
              <label>Придумайте пароль</label>
              <input value={password} type={open ? "text" : "password"} onChange={e => setPassword(e.target.value)}  placeholder="Пароль"  />
              <img src={open ? hidePwdImg : showPwdImg} onClick={() => setOpen(!open)}/>
          </div>
          <div className='pwd-container2'>
              <label>Повторите пароль</label>
              <input value={password2} type={open2 ? "text" : "password"} onChange={e => setPassword2(e.target.value)}  placeholder="Пароль"  />
              <img src={open2 ? hidePwdImg : showPwdImg} onClick={() => setOpen2(!open2)}/>
          </div>
          <MyDropzone />
          <Button
                name='Зарегистрироваться'
                isValid={isRegistrationValid()}
                callback={registrationCallback}
            />
                {show && (!login || password.length<3 || password2.length<3) && <MinPass/>}
                {show2 && (!password.match(/\d/)) && <NumberCheckPass />}
                {show3 && (password !== password2) && <ConfirmPass />}
                {loggedIn && <Redirect push to='/'/>}
      </div>

    )
}

const ConnectSign = connect(state=> ({loggedIn:state.authReducer.payload}),{onSign: actionFullRegister})(Sign)
export default ConnectSign