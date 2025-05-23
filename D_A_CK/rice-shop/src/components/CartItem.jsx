import React from "react";

const CartItem = ({ item, onRemove }) => {
  const { name, price, img } = item;
  return (
    <div className="cart-item">
      <img src={img} alt={name} className="cart-item-image" />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{name}</h3>
        <p className="cart-item-price">Giá: {price}</p>
        <button className="remove-button" onClick={() => onRemove(item.id)}>Xóa</button>
      </div>
    </div>
  );
};

export default CartItem;