import React, { useEffect, useState } from 'react';

import '../StyleSheets/Meals.css';
import Meal from './Meal';
const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('./meals.json')
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  useEffect(() => {
    fetch('./meals.json')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const filterItem = (catItem) => {
    const updateItems = items.filter((curElem) => {
      return curElem.category === catItem;
    });
    setMeals(updateItems);
  };
  return (
    <div className="meal_section py-5">
      <div className="m-auto menu w-50 text-center ">
        <button
          onClick={() => setMeals(items)}
          className="btn menubtn w-25 active"
        >
          ALL
        </button>
        <button
          onClick={() => filterItem('breakfast')}
          className="btn menubtn w-25 "
        >
          Breakfast
        </button>
        <button
          onClick={() => filterItem('lunch')}
          className="btn mx-5 w-25 menubtn"
        >
          Lunch
        </button>
        <button
          onClick={() => filterItem('dinner')}
          className="btn w-25 menubtn"
        >
          Dinner
        </button>
      </div>
      <div className="meal__pack py-5">
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
