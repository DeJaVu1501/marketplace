import logo from '../logoOlx.png';
import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import CButtonLogout from './Logout';
import Search from './Search';

export function Navibar({isLogin}){
    return(
    <>
        <Navbar className='Navbar'>
            <Container className='header'>
              <Navbar.Brand><Link to="/"><img src={logo} alt={"logo"}/></Link></Navbar.Brand>
              {isLogin && <Search /> }
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  {isLogin ? (
                    <>
                      
                      <Nav.Link><Link to='/post-ad'>Добавить товар</Link></Nav.Link>
                      <Nav.Link><Link to='/profile'>Профиль</Link></Nav.Link>
                      <Nav.Link><CButtonLogout /></Nav.Link>
                    </>
                  ):(
                      <>
                        <Nav.Link><Link to="/login">Войти</Link></Nav.Link>
                        <Nav.Link><Link to="/sign">Зарегистрироваться</Link></Nav.Link>
                      </> 
                    )}
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
  }
const ConnectNav = connect(state => ({isLogin: state.authReducer.payload}),null)(Navibar)
export default ConnectNav