import React from "react";
import {connect}   from 'react-redux';
import {useState} from "react";
import {actionFullRegister} from '../actions'
import {Redirect} from 'react-router-dom';

const Sign = ({onSign,loggedIn}) => {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [open,setOpen] = useState(false)
    return (
      <div className="divSign">
          <h4>Войти</h4>
          <div>
              <label>Nickname</label>
              <input value={login} onChange={e => setLogin(e.target.value)} placeholder="Nickname"></input>
          </div>
          <div className='pwd-container2'>
              <label>Ваш текущий пароль от olx</label>
              <input value={password} type={open ? "text" : "password"} onChange={e => setPassword(e.target.value)} placeholder="Пароль"  />
              <img src={open ? hidePwdImg : showPwdImg} onClick={() => setOpen(!open)}/>
          </div>
              <button onClick={() => onSign(login,password)}>Send</button>  
              {loggedIn && <Redirect from="/sign" to="/" />}
      </div>

    )
}

const ConnectSign = connect(store=> ({loggedIn:store.authReducer.login }),{onSign: actionFullRegister})(Sign)
export default ConnectSign