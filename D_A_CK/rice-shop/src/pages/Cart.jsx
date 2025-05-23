import React, { useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cơm sườn",
      price: "25-30k",
      img:"/images/com-suon.jpg"
    },
    {
      id: 2,
      name: "Cơm gà",
      price: "30k",
      img:"/images/com-ga.jpg"
    },
    {
      id: 3,
      name: "Cơm cá",
      price: "25k",
      img: "/images/com-ca.jpg",
    },
    {
      id: 4,
      name: "Cơm thập cẩm",
      price: "20-25-30k",
      img: "/images/com-thap-cam.jpg",
    },
    {
      id: 5,
      name: "Cơm chiên",
      price: "25k",
      img: "/images/com-chien.jpg",
    },
    
    {
      id: 6,
      name: "Cơm chay",
      price: "20-25-30k",
      img: "/images/com-chay.jpg",
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeItem} />
        ))
      )}
    </div>
  );
};

export default Cart;