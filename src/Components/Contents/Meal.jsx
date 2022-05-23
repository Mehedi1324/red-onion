import React from 'react';
import { Button } from 'react-bootstrap';
import '../StyleSheets/Meal.css';
const Meal = ({ meal }) => {
  const { img, name, price } = meal;
  return (
    <div className="food__card">
      <img className="card_img" src={img} alt="" />
      <h5>{name}</h5>
      <h5 className="my-3">$ {price} </h5>
      <Button variant="outline-danger">Order Now</Button>{' '}
    </div>
  );
};

export default Meal;
