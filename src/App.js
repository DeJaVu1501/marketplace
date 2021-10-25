import React from 'react';
import './App.scss';
import {Provider}   from 'react-redux';
import Footer from './Components/Footer';
import RoleRoute from './Components/PrivateRoute';
import ConnectNav from './Components/NaviBar';
import { createBrowserHistory } from "history";
import store from './reducers';
import { Router,Switch } from "react-router-dom";
import {ConnectLog, TypeAd, TypeAdOne, ConnectSign,Instruction,Advertisment,CPost,СChange,Profile,AdSearch,NotFound} from './pages/AllPages'

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
            <RoleRoute roles={['unknown']} component={NotFound} exact/>
          </Switch>
          <Footer />
      </Router>
      </Provider>
    </>
  );
}

export default App;
