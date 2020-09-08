import React from 'react';
import { Button } from 'react-bootstrap';

import ShoeImg from '../../assets/shoe.png';
import BrandLogo from '../../assets/brandTag.png';

import './Header.css';

export const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="d-flex flex-column justify-content-center text-center position-relative">
        <img src={BrandLogo} className="brandLogo" alt="brand_logo" />
        <span className="headerSubHeading">BRAND BY</span>
        <span className="headerHeading">KICKASSO</span>
        <img src={ShoeImg} className="headerImg" alt="main_logo" />
        <Button className="headerBtn">SHOP NOW</Button>
      </div>
    </div>
  );
}