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
      <NavbarCom img={Logo} navLinks={[{ name: 'Home' }, { name: 'Products' }, { name: 'Cart' }]} />
      <Container className="productsWrapper my-5 mx-0">
        <Row className="mt-5">
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
          <Col md={6} lg={4}>
            <CardCom product={{ title: 'Blacked-Out OG Camo NMD', price: 245.00, img: shoe1 }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}