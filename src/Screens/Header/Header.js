import React from 'react';
import { Button } from 'react-bootstrap';

import { NavbarCom } from '../../components/Navbar/Navbar';

import ShoeImg from '../../assets/shoe.png';
import Logo from '../../assets/logo.png';
import BrandLogo from '../../assets/brandTag.png';

export const Header = () => {
  return (
    <div className="headerWrapper">
      <NavbarCom img={Logo} navLinks={[{ name: 'Home' }, { name: 'Products' }, { name: 'Cart' }]} />
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