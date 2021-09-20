import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';

 function authReducer(state, action){
    if(state === undefined){
        if(localStorage.authToken || localStorage.authToken === 'null'){
            action.type = 'LOGIN'
            action.token = localStorage.authToken
        }
        else {
            return {}
        }
    }
    if(action.type === 'LOGIN'){
        console.log('LOGIN')
        localStorage.authToken = action.token
        let tok = localStorage.authToken.split('.')[1]
        let decoded = JSON.parse(atob((tok)))
        return {token:action.token, payload: decoded}
    }
    if(action.type === 'LOGOUT'){
        console.log("LOGOUT")
        localStorage.authToken = ''
        return {}
    }
    return state
  }
  
  function promiseReducer(state={}, {type, status, payload, error, name}){
      if (type === 'PROMISE'){
          return {
              ...state,
              [name]:{status, payload, error}
          }
      }
      return state
  }



const rootReducer = combineReducers({authReducer, promiseReducer});
const store = createStore(rootReducer, applyMiddleware(thunk)) 

export default store