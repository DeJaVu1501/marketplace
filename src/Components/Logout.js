import React from 'react';
import { connect } from 'react-redux';
import { actionAuthLogout } from '../actions';
const ButtonLogout = ({onLogout}) => {
return(
    <a className="adada" onClick={()=>onLogout()}
        >Выйти</a>
)
}
const CButtonLogout = connect(null,{onLogout: actionAuthLogout})(ButtonLogout)
export default CButtonLogout