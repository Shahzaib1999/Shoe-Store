import React from 'react';
import { Navbar, Nav,Badge  } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom'

import './Navbar.css';

export const NavbarCom = (props) => {
  let location = useLocation();
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" style={location.pathname === '/' ? { background: '#f5f5f5' } : { boxShadow: '17px 0px 6px lightgrey', zIndex: 9 }}>
        <Navbar.Brand href="/">
          <img src={props?.img} width={40} height={40} alt="logo" />
          <span className="brandName"> Kickasso</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            {props?.navLinks?.map(((navLink, ind) => (
              <Nav.Link as="li" key={ind} className="navLink">
                <Link to={navLink.link} className="navLink">{navLink.name}</Link>
                {navLink.link === 'cart' && <Badge pill variant="dark ml-1 pt-1">1</Badge>}
              </Nav.Link>
            )))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}