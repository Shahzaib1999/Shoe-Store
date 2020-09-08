import React from 'react';
import { Card } from 'react-bootstrap';

import './Card.css';

export const CardCom = (props) => {
  // console.log(props.product);
  return (
    <Card className="myCard">
      <Card.Img variant="top" src={props.product.images[0]} />
      <Card.Body className="text-center">
        <Card.Title className="cardTitle">{props.product.name}</Card.Title>
        <Card.Text className="cardPrice">
          ${props.product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}