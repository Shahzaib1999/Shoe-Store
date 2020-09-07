import React from 'react';
import { Nav, Button, Row, Col, Container } from 'react-bootstrap';
import { NavbarCom } from '../../components/Navbar/Navbar';

import './Products.css';
import Logo from '../../assets/logo.png';
import shoe1 from '../../assets/shoe1.png';
import { CardCom } from '../../components/Card/Card';

export const Product = () => {
  return (
    <div className="headerWrapper">
      {/* <NavbarCom img={Logo} navLinks={[{ name: 'Home' }, { name: 'Products' }, { name: 'Cart' }]} /> */}
      <Container className="productsWrapper mx-0">
        <Row className="py-5">
          <Col md={6} lg={4}>
            <CardCom product={{ title: 'Blacked-Out OG Camo NMD', price: 245.00, img: shoe1, description: `Each pair is hand painted and no two pairs are identical. Upon purchasing this product, please allow up to 4 weeks for delivery. As with all art, each product is made with the customers satisfaction in mind, however please be mindful of the art and wear each product with care. Thank you for your continuous support!` }} />
          </Col>
          <Col md={6} lg={4}>
            <CardCom product={{ title: 'Blacked-Out OG Camo NMD', price: 245.00, img: shoe1 }} />
          </Col>
          <Col md={6} lg={4}>
            <CardCom product={{ title: 'Blacked-Out OG Camo NMD', price: 245.00, img: shoe1 }} />
          </Col>
          <Col md={6} lg={4}>
            <CardCom product={{ title: 'Blacked-Out OG Camo NMD', price: 245.00, img: shoe1 }} />
          </Col>
          <Col md={6} lg={4}>
            <CardCom product={{ title: 'Blacked-Out OG Camo NMD', price: 245.00, img: shoe1 }} />
          </Col>
          <Col md={6} lg={4}>
            <CardCom product={{ title: 'Blacked-Out OG Camo NMD', price: 245.00, img: shoe1 }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}