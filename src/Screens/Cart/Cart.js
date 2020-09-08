import React, { useContext } from 'react';
import { Col, Row, Container, Card, Button, ListGroup, FormControl } from 'react-bootstrap';
import swal from 'sweetalert';

import './Cart.css';

import { GlobalContext } from "../../context/GlobalState";
import img from '../../assets/shoes/shoe1a.png';

export const Cart = () => {
  const { shoes,onBuy } = useContext(GlobalContext);

  const onBuyHandler = () => {
    swal("Purchase Succesfull!", "You successfully purchased all items!", "success");
    onBuy();
  }

  return (
    <div className="mainWrapper">
      <div className="checkoutWrapper">
        <h1 className="checkout">Cart</h1>
      </div>
      <Container className="shoppingCartWrapper">
        {shoes.length > 0 ?
          <Row>
            <Col lg={8}>
              <Card className="cartCard">
                <Card.Header className="cardHeader mr-3 ml-3 pl-2">Shopping Cart</Card.Header>
                <Card.Body className="pt-0 pl-3">
                  <ListGroup variant="flush" className="pt-1">
                    {shoes.map(shoe => (
                      <ListGroup.Item className="d-flex justify-content-between align-items-center mt-2" key={shoe.id}>
                        <div className="productDetailWrapper">
                          <img src={shoe.images[0]} width={70} alt="shoe" />
                          <span className="productName ml-2">{shoe.name}</span>
                        </div>
                        <div>
                          <span className="productPrice">${shoe.price}</span>
                        </div>
                      </ListGroup.Item>
                    ))
                    }
                    <ListGroup.Item className="d-flex justify-content-between align-items-center mt-2">
                      <span className="productName">Subtotal:</span>
                      <span className="productName">${shoes.reduce((sum, { price }) => sum + price, 0)}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center mt-2">
                      <span className="productTotal">Total:</span>
                      <span className="productTotal">${shoes.reduce((sum, { price }) => sum + price, 0)}</span>
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
                    placeholder="Promo code"
                    aria-label="Promo code"
                    aria-describedby="basic-addon2"
                  />
                </Card.Body>
              </Card>
              <Card className="mt-5">
                <Card.Header className="cardHeader mx-3 pl-2">Payment</Card.Header>
                <Card.Body>
                  <Button variant="dark buyBtn mt-2" block onClick={onBuyHandler}>Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          :
          <h1 className="mt-5 text-center">Cart is empty</h1>
        }
      </Container>
    </div>
  );
}