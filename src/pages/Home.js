import React from "react";
import {connect}   from 'react-redux';
import {useState} from "react";
import {actionTypeAd} from '../actions'


export const Home = (_id,owner) => {
    return (
        <h1>home</h1>
    )
}

const TypeAd = connect(null,{_id: actionTypeAd})(Home)
export default TypeAd