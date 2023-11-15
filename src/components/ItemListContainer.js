// ItemListContainer.js
import React from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = (props) => {
  return (
    <div className="item-list-container">
      <p>{props.greeting}</p>
      {/* Ejemplo de enlace a un item específico */}
      <Link to="/item/1">Ver Detalles del Producto 1</Link>
    </div>
  );
};

export default ItemListContainer;
