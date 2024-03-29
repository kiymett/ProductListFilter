import React from "react";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { useState } from 'react'

const ProductCard = ({ title, image, price }) => {

  const [color, setColor] = useState('black')

  const handleHeart = () => {
    setColor('red')
  }

  return (
    <Card className="rounded-2 m-auto card" role="button">
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{price}</Card.Title>
        <MdFavorite size={30} style={{ color: color }} onClick={handleHeart} />
      </Card.Header>
      <Card.Img variant="top" src={image} className="player-logo" />
      <Card.Footer className="card__over">
        <Card.Title>{title}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
