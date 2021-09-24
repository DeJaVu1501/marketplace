import React from "react";
import {connect}   from 'react-redux';
import {useState} from "react";
import {actionFullRegister} from '../actions'
import {Redirect} from 'react-router-dom';
import ConfirmPass from "../Components/RegErrors/Confirmpass";
import ExistingLogin from "../Components/RegErrors/exicitingLogin";
import NumberCheckPass from "../Components/RegErrors/numberCheckPass";
import showPwdImg from '../images/3844476-eye-see-show-view-watch_110339.svg';
import hidePwdImg from '../images/3844477-disable-eye-inactive-see-show-view-watch_110343.svg';


const Sign = ({onSign,loggedIn,confirmError, numberError}) => {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [open,setOpen] = useState(false)
    const [open2,setOpen2] = useState(false)
    return (
      <div className="divSign">
          <h4>Регистрация</h4>
          <div className="login-container">
              <label>Придумайте логин</label>
              <input value={login} onChange={e => setLogin(e.target.value)} placeholder="Nickname"></input>
          </div>
          <div className='pwd-container1'>
              <label>Придумайте пароль</label>
              <input value={password} type={open ? "text" : "password"} onChange={e => setPassword(e.target.value)} placeholder="Пароль"  />
              <img src={open ? hidePwdImg : showPwdImg} onClick={() => setOpen(!open)}/>
          </div>
          <div className='pwd-container2'>
              <label>Повторите пароль</label>
              <input value={password2} type={open2 ? "text" : "password"} onChange={e => setPassword2(e.target.value)} placeholder="Пароль"  />
              <img src={open2 ? hidePwdImg : showPwdImg} onClick={() => setOpen2(!open2)}/>
          </div>
              <button onClick={() => {onSign(login,password)}}>Send</button>  
              {loggedIn && <Redirect from="/sign" to="/" /> || numberError && (!password.match(/\d/)) ? <NumberCheckPass /> : (password !== password2) ? <ConfirmPass /> : console.log("poshel nahoi")}
      </div>

    )
}

const ConnectSign = connect(state=> ({loggedIn:state.authReducer.login}),{onSign: actionFullRegister})(Sign)
export default ConnectSign