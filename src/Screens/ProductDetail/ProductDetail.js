import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

import Logo from '../../assets/logo.png';
import shoe2 from '../../assets/shoe2.png';

import './ProductDetail.css';

export const ProductDetail = (props) => {
  return (
    <div>
      <div className="headingWrapper">
        <h1 className="heading">
          Blacked-Out OG Camo NMD
          </h1>
        <p className="price">$245.00</p>
      </div>
      <Row className="mainWrapper m-0">
        <Col xs={12} sm={12} md={12} lg={6} className="imgWrapper">
          <img src={shoe2} className="img" />
          <div>
            <img src={shoe2} className="thumbImg active" />
            <img src={shoe2} className="thumbImg ml-4" />
            <img src={shoe2} className="thumbImg ml-4"  />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className="descriptionWrapper">
          <p className="description">
            As with all art, each product is made with the customers satisfaction in mind, however please be mindful of the art and wear each product with care.
            Thank you for your continuous support!
          </p>
          <Button className="cartBtn">+ ADD TO CART</Button>
        </Col>
      </Row>
    </div>
  );
}