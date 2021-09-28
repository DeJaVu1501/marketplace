import logo from '../logoOlx.png';
import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";

export default function Navibar({}){
    return(
    <>
        <Navbar className='Navbar'>
            <Container className='header'>
              <Navbar.Brand><Link to="/"><img src={logo} alt={"logo"}/></Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link><Link to="/login">Войти</Link></Nav.Link>
                  <Nav.Link><Link to="/sign">Зарегистрироваться</Link></Nav.Link>
                  {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
  }
