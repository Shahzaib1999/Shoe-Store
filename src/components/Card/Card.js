import React from 'react';
import { Card } from 'react-bootstrap';

import './Card.css';

export const CardCom = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.product.img} />
      <Card.Body className="text-center">
        <Card.Title className="cardTitle">{props.product.title}</Card.Title>
        <Card.Text className="cardPrice">
          ${props.product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}