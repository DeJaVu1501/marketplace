import React from 'react';
import './App.scss';
import createHistory from "history/createBrowserHistory";
import {Provider, connect}   from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import Navibar from './Components/NaviBar';
import Footer from './Components/Footer';

import store from './reducers';
import ConnectLog from './pages/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";

import TypeAd, {Home} from "./pages/Home";
import ConnectSign from './pages/Login';
import {Login} from "./pages/Login";
import {Instruction} from "./pages/Instriction";
import {Advertisment} from "./pages/Advertisment";

// const store = createStore((state, action) => { //единственный редьюсер данного хранилища
//   if (state === undefined){ //redux запускает редьюсер хотя бы раз, что бы инициализировать хранилище
//       return {counter: 0};  //обязательно вернуть новый объект, а не изменить текущий state
//   }
//   if (action.type === 'COUNTER_INC'){ //в каждом action должен быть type
//       return {counter: state.counter +1} //создаем новый объект базируясь на данных из предыдущего состояния
//   }
//   if (action.type === 'COUNTER_DEC'){
//       return {counter: state.counter -1}
//   }
//   return state; //редьюсеров может быть несколько, в таком случае вызываются все редьюсеры, но далеко не всегда action.type будет относится к этому редьюсеру. Тогда редьюсер должен вернуть state как есть. 
// })

// store.subscribe(()=> console.log(store.getState())) // подписка на обновления store

// store.dispatch({
//   type: 'COUNTER_INC'
// })

// store.dispatch({
//   type: 'COUNTER_DEC'
// })

// const actiononInc = () => ({type: 'COUNTER_INC'})
// const actiononDec = () => ({type: 'COUNTER_DEC'})
// store.dispatch(actiononInc())
// store.dispatch(actiononDec())

// const Counter = ({i=0,onInc,onDec}) => {
//   return (
//     <>
//       <h4>{i}</h4>
//       <button onClick={onInc}>+</button>
//       <button disabled={i <= 0} onClick={onDec}>-</button>
//     </>
//   )
// }

// const ConnectedCounter = connect(state => ({i: state.counter}), {onInc: actiononInc ,onDec: actiononDec})(Counter)

// const getGQL = url => 
//     (query, variables={}) => fetch(url, {
//         method: 'POST',
//         headers: {
//             //Accept: "application/json",
//             "Content-Type": "application/json",
//             ...(localStorage.authToken ? {Authorization: "Bearer " + localStorage.authToken } : {})
//         },
//         body: JSON.stringify({query, variables})
//     }).then(res => res.json())

// const actionPending = name => ({type: 'PROMISE', status: 'PENDING', name})
// const actionResolved = (name, payload) => ({type: 'PROMISE', status: 'RESOLVED', name, payload})
// const actionRejected = (name, error) => ({type: 'PROMISE', status: 'REJECTED', name, error})

// let shopGQL = getGQL('http://shop-roles.asmer.fs.a-level.com.ua/graphql')
// const actionPromise = (name, promise) => 
//     async dispatch => {
//         dispatch(actionPending(name))
//         try{
//             let payload = await promise
//             dispatch(actionResolved(name, payload)) 
//             return payload
//         }
//         catch(error){
//              dispatch(actionRejected(name, error))
//         }
//     }


// const combineReducer = combineReducers({auth: authReducer, promise: promiseReducer})
//  function authReducer(state, action){
//     if(state === undefined){
//         if(localStorage.authToken || localStorage.authToken === 'null'){
//             action.type = 'LOGIN'
//             action.token = localStorage.authToken
//         }
//         else {
//             return {}
//         }
//     }
//     if(action.type === 'LOGIN'){
//         console.log('LOGIN')
//         localStorage.authToken = action.token
//         let tok = localStorage.authToken.split('.')[1]
//         let decoded = JSON.parse(atob((tok)))
//         return {token:action.token, payload: decoded}
//     }
//     if(action.type === 'LOGOUT'){
//         console.log("LOGOUT")
//         localStorage.authToken = ''
//         return {}
//     }
//     return state
//   }
//   function promiseReducer(state={}, {type, status, payload, error, name}){
//       if (type === 'PROMISE'){
//           return {
//               ...state,
//               [name]:{status, payload, error}
//           }
//       }
//       return state
//   }

// const store = createStore(combineReducer, applyMiddleware(thunk)) 

// const actionAuthLogin = token => ({type:'LOGIN', token})
// const actionAuthLogout = () => ({type:"LOGOUT"})

// let log = async (login, password) => {
//   let query = `query log($l: String, $p: String) {
//         login(login: $l, password: $p)
//       }`

//   let variables = {
//       "l": login,
//       "p": password
//   }

//   let token = await shopGQL(query, variables)
//   console.log(token)
//   return token.data.login
// }

// const actionLogin = (login, password) => actionPromise("login", log(login, password))

// const actionFullLogin = (login, password) => {
//   return async (dispatch) => {
//       let result = await dispatch(actionLogin(login, password))
//       if(result)
//           dispatch(actionAuthLogin(result))
//   }
// }

// const LoginForm = ({onLogin}) => {
//   const [login,setLogin] = useState('')
//   const [password,setPassword] = useState('')
//   return (
//     <div>
//       <input value={login} onChange={e => setLogin(e.target.value)} ></input>
//       <input value={password} onChange={e => setPassword(e.target.value)} type="password"></input>
//       <button onClick={() => onLogin(login,password)}>Send</button>
//     </div>
//   )
// }


// const ConnectLog = connect(null, {onLogin: actionFullLogin})(LoginForm)
// const ConnectLogout = connect(state => ({children: 'logout'}),{onClick: actionAuthLogout})('button')

function App() {
  return (
    <>
      <Provider store={store}>
        <Router history = {createHistory()}>
          <Navibar />
          <Footer />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/sign' component={ConnectSign}/>
            <Route path='/login' component={ConnectLog}/>
            <Route path='/instruction' component={Instruction} />
            <Route path='/advertisment' component={Advertisment} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
