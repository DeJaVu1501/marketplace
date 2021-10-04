import React from 'react';
import { connect } from 'react-redux';
import { actionAuthLogout } from '../actions';
const ButtonLogout = ({onLogout, isLoggedIn}) => {
return(
    <a className="adada" onClick={()=>onLogout()}
        >Выйти</a>
)
}
const CButtonLogout = connect(state => ({isLoggedIn: state.authReducer.payload}),{onLogout: actionAuthLogout})(ButtonLogout)
export default CButtonLogout