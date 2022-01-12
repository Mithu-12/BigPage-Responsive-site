import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Header.css';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import logo from '../image/logo.png';

const Header = () => {
  
    return (
    <div className="nav-background">
      <Navbar className="navmenu"  sticky="top" collapseOnSelect expand="lg" >
        <Container className='nav-container'>
            <Navbar.Brand href="#home" className="logo"><h3 className="hero-font">BizPage</h3></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <NavLink to="/" className="items">
                          <li>Home</li>
                        </NavLink>
                      <NavLink to="#about" className="items">
                          <li>About</li>
                        </NavLink>
                      <NavLink to="/" className="items">
                          <li>Services</li>
                        </NavLink>
                      <NavLink to="/" className="items">
                          <li>Protfolio</li>
                        </NavLink>
                      <NavLink to="/" className="items">
                          <li>Team</li>
                        </NavLink>
                      <NavLink to="/" className="items">
                          <li>Blog</li>
                        </NavLink>
                      <NavLink to="/" className="items">
                          <li>Support</li>
                        </NavLink>
                      <NavLink to="/" className="items">
                          <li>Contact</li>
                        </NavLink>
                        
                      
                        
            </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
      
    );
};

export default Header;