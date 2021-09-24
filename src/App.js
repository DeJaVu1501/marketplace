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
import ConnectSign from './pages/Sign';
import {Login} from "./pages/Login";
import {Instruction} from "./pages/Instriction";
import {Advertisment} from "./pages/Advertisment";


// const ConnectLogout = connect(state => ({children: 'logout'}),{onClick: actionAuthLogout})('button')

function App() {
  return (
    <>
      <Provider store={store}>
        <Router history = {createHistory()}>
          <Navibar />
          <Footer />
          <Switch>
            <Route exact path='/' component={TypeAd}/>
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
