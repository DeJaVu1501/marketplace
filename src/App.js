import React, { useEffect } from 'react';
import './App.scss';
import {Provider, connect}   from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import Navibar from './Components/NaviBar';
import Footer from './Components/Footer';
import { createBrowserHistory } from "history";

import store from './reducers';
import ConnectLog from './pages/Login';

import {
  Router,
  Switch,
  Route, 
  Link,
  useHistory
} from "react-router-dom";

import TypeAd, {Home} from "./pages/Home";
import TypeAdOne from './pages/AdOne';
import ConnectSign from './pages/Sign';
import {Login} from "./pages/Login";
import {Instruction} from "./pages/Instriction";
import {Advertisment} from "./pages/Advertisment";
import {useDropzone} from 'react-dropzone'


// const ConnectLogout = connect(state => ({children: 'logout'}),{onClick: actionAuthLogout})('button')

function App() {
  return (
    <>
      <Provider store={store}>
      <Router history = {createBrowserHistory()}>
          <Navibar />
          <Switch>
            <Route exact path='/' component={TypeAd}/>
            <Route exact path='/:id' component={TypeAdOne} />
            <Route path='/login' component={ConnectLog}/>
            <Route path='/sign' component={ConnectSign}/>
            <Route path='/instruction' component={Instruction} />
            <Route path='/advertisment' component={Advertisment} />
          </Switch>
          <Footer />
      </Router>
      </Provider>
    </>
  );
}

export default App;
