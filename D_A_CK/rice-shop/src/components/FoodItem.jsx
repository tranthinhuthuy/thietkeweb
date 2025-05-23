import React from "react";

const FoodItem = ({ name, price, img }) => {
  return (
    <div className="food-card">
      <img src={img} alt={name} className="food-image" />
      <h3>{name}</h3>
      <p>Giá: {price}</p>
      <button className="food-btn">Thêm vào giỏ</button>
    </div>
  );
};

export default FoodItem;