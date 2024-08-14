import React from 'react';
import '../styles/FoodBasketAnimation.css';

const FoodBasketAnimation = () => {
  return (
    <div className="food-animation-container">
      <div className="food-basket">🧺</div>
      <div className="food-item apple">🍎</div>
      <div className="food-item carrot">🥕</div>
      <div className="food-item broccoli">🥦</div>
      <div className="food-item grapes">🍇</div>
      <div className="food-item bread">🍞</div>
      <div className="food-item cheese">🧀</div>
      <div className="food-item egg">🥚</div>
      <div className="food-item milk">🥛</div>
      <div className="food-item fish">🐟</div>
      <div className="food-item chicken">🍗</div>
      <svg className="food-item tomato" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#ff6347" />
        <path d="M50 5 Q60 20 50 35 Q40 20 50 5" fill="#228b22" />
      </svg>
      <svg className="food-item lettuce" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,50 Q50,10 90,50 Q50,90 10,50" fill="#90ee90" />
        <path d="M20,50 Q50,20 80,50 Q50,80 20,50" fill="#32cd32" />
        <path d="M30,50 Q50,30 70,50 Q50,70 30,50" fill="#228b22" />
      </svg>
    </div>
  );
};

export default FoodBasketAnimation;
