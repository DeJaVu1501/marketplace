import React from 'react';
import './App.scss';
import {Provider, connect}   from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Navibar} from './Components/NaviBar';
import Footer from './Components/Footer';
import { createBrowserHistory } from "history";
import { actionAuthLogout } from './actions';

import store from './reducers';
import ConnectLog from './pages/Login';

import { Router,Switch, Route, Link, useHistory } from "react-router-dom";

import TypeAd, {Home} from "./pages/Home";
import TypeAdOne from './pages/AdOne';
import ConnectSign from './pages/Sign';
import {Login} from "./pages/Login";
import {Instruction} from "./pages/Instriction";
import {Advertisment} from "./pages/Advertisment";
import RoleRoute from './Components/PrivateRoute';
import ConnectNav from './Components/NaviBar';
import CProfile from './Components/Profile';
import CPost from './pages/PostAd';

function App() {
  return (
    <>
      <Provider store={store}>
      <Router history = {createBrowserHistory()}>
          <ConnectNav />
          <Switch>
            <RoleRoute exact path='/' roles ={['user']} component = {TypeAd}  />
            <RoleRoute path='/home/:id' roles={['user']} component={TypeAdOne} />
            <RoleRoute path='/login' roles={['unknown']} component={ConnectLog}/>
            <RoleRoute path='/sign' roles={['unknown']} component={ConnectSign}/>
            <RoleRoute path='/profile' roles={['user']} component={CProfile} />
            <RoleRoute path='/post-ad' roles={['user']} component={CPost} />
            <RoleRoute path='/instruction' roles={['unknown']} component={Instruction} />
            <RoleRoute path='/advertisment' roles={['unknown']} component={Advertisment} />
          </Switch>
          <Footer />
      </Router>
      </Provider>
    </>
  );
}


export default App;
