import React, { useState, useContext } from 'react';
import { Col, Row, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Magnifier from "react-magnifier";

import './ProductDetail.css';

import { GlobalContext } from "../../context/GlobalState";
import Shoes from '../../data';

export const ProductDetail = () => {
  const { addToCart, shoes } = useContext(GlobalContext);
  const [imageInd, setImageInd] = useState(0);
  const { id } = useParams();
  let shoe = Shoes.find(x => x.id === +(id));
  
  const addToCartHandler = (param) => {
    addToCart(param);
  };

  if (!shoe) {
    return <p>Product not found</p>
  }
  return (
    <div>
      <div className="headingWrapper">
        <h1 className="heading">
          {shoe?.name}
        </h1>
        <p className="price">${shoe?.price}.00</p>
      </div>
      <Row className="mainWrapper m-0">
        <Col xs={12} sm={12} md={12} lg={6} className="imgWrapper">
          <Magnifier
            src={shoe?.images[imageInd]}
            className="img mt-4"
          />
          <div className="thumbnailWrapper">
            {shoe?.images.map((img, ind) => (
              <img src={img} className={ind === imageInd ? "thumbImg ml-4 active" : "thumbImg ml-4"} key={ind} onClick={() => setImageInd(ind)} alt={shoe.name} />
            ))}
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className="descriptionWrapper">
          <p className="description">
            {shoe?.description}
          </p>
          {(shoes.length > 0 && shoes.some(x => x.id === shoe.id)) ?
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="button-tooltip">Already added</Tooltip>}
            >
              <Button className="cartBtn disabled">+ ADD TO CART</Button>
            </OverlayTrigger>
            :
            <Button className="cartBtn" onClick={() => addToCartHandler(shoe)}>+ ADD TO CART</Button>
          }
        </Col>
      </Row>
    </div>
  );
}