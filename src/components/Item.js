import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setAddToCart] = useState("");

  function handleAddToCart () {
    setAddToCart("in-cart")
  };

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">{cart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
