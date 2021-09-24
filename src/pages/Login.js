import React from "react";
import {connect}   from 'react-redux';
import {useState} from "react";
import {actionFullLogin} from '../actions'

import showPwdImg from '../images/3844476-eye-see-show-view-watch_110339.svg';
import hidePwdImg from '../images/3844477-disable-eye-inactive-see-show-view-watch_110343.svg';

const LoginForm = ({onLogin}) => {
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')
  const [open,setOpen] = useState(false)
  return (
    <div className="divLogin">
        <h4>Войти</h4>
        <div className="login-container">
            <label>Nickname</label>
            <input value={login} onChange={e => setLogin(e.target.value)} placeholder="Nickname"></input>
        </div>
        <div className='pwd-container'>
            <label>Ваш текущий пароль от olx</label>
            <input value={password} type={open ? "text" : "password"} onChange={e => setPassword(e.target.value)} placeholder="Пароль"  />
            <img src={open ? hidePwdImg : showPwdImg} onClick={() => setOpen(!open)}/>
        </div>
            <button onClick={() => onLogin(login,password)}>Send</button>  
    </div>
  )
}
///
const ConnectLog = connect(null, {onLogin: actionFullLogin})(LoginForm)
export default ConnectLog
