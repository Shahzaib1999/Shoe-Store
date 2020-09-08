import React from 'react';
import { Col, Row, Container, Card, Button, ListGroup, FormControl } from 'react-bootstrap';

import './Cart.css';

import img from '../../assets/shoes/shoe1a.png'

export const Cart = () => {
  // const [item]
  return (
    <div className="mainWrapper">
      <div className="checkoutWrapper">
        <h1 className="checkout">Cart</h1>
      </div>
      <Container className="shoppingCartWrapper">
        <Row>
          <Col lg={8}>
            <Card className="cartCard">
              <Card.Header className="cardHeader mr-3 ml-3 pl-2">Shopping Cart</Card.Header>
              <Card.Body className="pt-0 pl-3">
                <ListGroup variant="flush" className="pt-1">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center mt-2">
                    <div className="productDetailWrapper">
                      <img src={img} width={70} />
                      <span className="productName ml-2">Jordan 'Why Not?' Zer0.3</span>
                    </div>
                    {/* <div>
                      <span>
                        <div className="number-input">
                          <button  className="minus">-</button>
                          <input type="number" className="quantity" name="quantity" disabled  />
                          <button  className="plus">
                            <span>+</span>
                            </button>
                        </div>
                      </span>
                    </div> */}
                    <div>
                      <span className="productPrice">$70</span>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center mt-2">
                    <div className="productDetailWrapper">
                      <img src={img} width={70} />
                      <span className="productName ml-2">Jordan 'Why Not?' Zer0.3</span>
                    </div>
                    <div>
                      <span className="productPrice">$70</span>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center mt-2">
                    <span className="productName">Subtotal:</span>
                    <span className="productName">$70</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center mt-2">
                    <span className="productTotal">Total:</span>
                    <span className="productTotal">$70</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="paymentWrapper">
            <Card className="pb-2">
              <Card.Header className="cardHeader mx-3 pl-2">Coupon</Card.Header>
              <Card.Body>
                <FormControl
                  className="mt-2"
                  placeholder="Coupon number"
                  aria-label="Coupon number"
                  aria-describedby="basic-addon2"
                />
              </Card.Body>
            </Card>
            <Card className="mt-5">
              <Card.Header className="cardHeader mx-3 pl-2">Payment</Card.Header>
              <Card.Body>
                <Button variant="dark buyBtn mt-2" block>Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}