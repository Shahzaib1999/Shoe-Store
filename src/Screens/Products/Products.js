import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Products.css';

import { CardCom } from '../../components/Card/Card';
import Shoes from '../../data';

export const Product = () => {
  return (
    <div className="headerWrapper">
      <Container className="productsWrapper mx-0">
        <Row className="py-5">
          {Shoes.map((shoe, ind) => {
            // let shoe = Shoes[key];
            // console.log(Shoes);
            return (
              <Col md={6} lg={4} key={ind}>
                <Link to={`/product/${shoe.id}`} className="navLink">
                  <CardCom product={shoe} />
                </Link>
              </Col>
            )
          })}
          {/* <Col md={6} lg={4}>
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
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}