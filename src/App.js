import React from 'react';
import './App.scss';
import {Provider}   from 'react-redux';
import Footer from './Components/Footer';
import { createBrowserHistory } from "history";
import store from './reducers';
import ConnectLog from './pages/Login';
import { Router,Switch } from "react-router-dom";
import TypeAd from "./pages/Home";
import TypeAdOne from './pages/AdOne';
import ConnectSign from './pages/Sign';
import {Instruction} from "./pages/Instriction";
import {Advertisment} from "./pages/Advertisment";
import RoleRoute from './Components/PrivateRoute';
import ConnectNav from './Components/NaviBar';
import CPost from './pages/PostAd';
import СChange from './pages/EditAd';
import Profile from './pages/Profile';
import AdSearch from './pages/Search';

function App() {
  return (
    <>
      <Provider store={store}>
      <Router history = {createBrowserHistory()}>
          <ConnectNav />
          <Switch>
            <RoleRoute path='/' roles ={['user']} component = {TypeAd} exact />
            <RoleRoute path='/home/:id' roles={['user']} component={TypeAdOne} exact />
            <RoleRoute path='/home/edit/:id' roles={['user']} component={СChange} exact />
            <RoleRoute path='/login' roles={['unknown']} component={ConnectLog} />
            <RoleRoute path='/sign' roles={['unknown']} component={ConnectSign} />
            <RoleRoute path='/search/:searchName' roles={['unknown']} component={AdSearch} />
            <RoleRoute path='/profile' roles={['user']} component={Profile} />
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
