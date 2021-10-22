import React from "react";
import {connect}   from 'react-redux';
import {useState} from "react";
import {actionFullLogin} from '../actions'
import Button from "../Components/Button";
import LoginError from "../Components/RegErrors/LoginError";
import showPwdImg from '../images/3844476-eye-see-show-view-watch_110339.svg';
import hidePwdImg from '../images/3844477-disable-eye-inactive-see-show-view-watch_110343.svg';
import {Link, useHistory} from 'react-router-dom';


const LoginForm = ({onLogin,loggedIn}) => {
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')
  const [open,setOpen] = useState(false)
  const[show,setShow]=useState(false)

  let history = useHistory()

  if(localStorage.authToken) {
        history.push('/')
  }

  const isLoginValid = () => {
    if(!login || !password) {
        return false 
    }
    else return true
}

const loginCallback = () => {
    if(isLoginValid()) {
        onLogin(login, password)
    }
    else {
        setShow(true)
    }
}

  return (
        <div className="divLogin">
            <h4>Войти</h4>
            <div className="login-container">
                <label>Логин</label>
                <input value={login} onChange={e => setLogin(e.target.value)} placeholder="Логин"></input>
            </div>
            <div className='pwd-container'>
                <label>Ваш текущий пароль от olx</label>
                <input value={password} type={open ? "text" : "password"} onChange={e => setPassword(e.target.value)} placeholder="Пароль"  />
                <img src={open ? hidePwdImg : showPwdImg} onClick={() => setOpen(!open)}/>
            </div>
            <div className='login-container'>
                Не зарегистрированы? <Link to='sign' className='mb-3'>Создать аккаунт</Link>
                <Button name='Войти' isValid={isLoginValid()} callback={loginCallback} /> 
            </div> 
                {(loggedIn === null) && <p>Неверный логин или пароль</p>}
                {show && (!login || !password) && <LoginError />}
        </div>
  )
}


const ConnectLog = connect(state => ({loggedIn: state.promiseReducer?.login?.payload}), {onLogin: actionFullLogin})(LoginForm)
export default ConnectLog
