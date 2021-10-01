import logo from '../logoOlx.png';
import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {actionAuthLogout} from '../actions/index'
import { connect } from 'react-redux';
import { useState } from 'react';
// import Button from '@restart/ui/esm/Button';
import CButtonLogout from './Logout';

export function Navibar({isLogin}){
  // let [isLogout, setIsLogout] = useState(false)
    return(
    <>
        <Navbar className='Navbar'>
            <Container className='header'>
              <Navbar.Brand><Link to="/"><img src={logo} alt={"logo"}/></Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  {isLogin ? (
                    <>
                      <CButtonLogout />
                    </>
                  ):(
                      <>
                        <Nav.Link><Link to="/login">Войти</Link></Nav.Link>
                        <Nav.Link><Link to="/sign">Зарегистрироваться</Link></Nav.Link>
                      </> 
                    )}
                  {/* <Nav.Link><Link to="/login">Войти</Link></Nav.Link>
                  <Nav.Link><Link to="/sign">Зарегистрироваться</Link></Nav.Link> */}

                  {/* {isLogout && <Logout onClick={() =>{onLogout();setIsLogout(false)}} />} */}
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
  }
const ConnectNav = connect(state => ({isLogin: state.authReducer.payload}),null)(Navibar)
export default ConnectNav