import React from 'react';
import { Nav, Button } from 'react-bootstrap';

import ShoeImg from '../../assets/shoe.png';
import Logo from '../../assets/logo.png';
import BrandLogo from '../../assets/brandTag.png';
import { NavbarCom } from '../../components/Navbar/Navbar';

export const Header = () => {
  return (
    <div className="headerWrapper" style={{  }}>
      <NavbarCom img={Logo} navLinks={[{name: 'Home'},{name: 'Products'},{name: 'Cart'}]} />
      <div style={{}} className="d-flex flex-column justify-content-center text-center position-relative">
        <img src={BrandLogo} className="brandLogo" />
        <span className="headerSubHeading">BRAND BY</span>
        <span className="headerHeading">KICKASSO</span>
        <img src={ShoeImg} className="headerImg" />
        <Button className="headerBtn">SHOP NOW</Button>
      </div>
    </div>
  );
}