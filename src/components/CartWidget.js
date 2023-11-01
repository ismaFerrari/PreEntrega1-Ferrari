import React from 'react';

const CartWidget = () => {
  const itemsInCart = 5; // Número de elementos en el carrito (puede ser hardcodeado)

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-items">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;
