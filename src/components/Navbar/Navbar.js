import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Navbar.css';

export const NavbarCom = (props) => {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <img src={props?.img} width={40} height={40} />
          <span className="brandName"> Kickasso</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            {props?.navLinks?.map(((navLink, ind) => (
              <Nav.Link key={ind} className="navLink">
                {navLink.name}
              </Nav.Link>
            )))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}