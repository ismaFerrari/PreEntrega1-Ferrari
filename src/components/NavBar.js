import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  const cryptoData = [
    { name: 'Bitcoin', category: 'Cryptocurrency', price: '1.654,34€', logo: 'bitcoin-logo.png' },
    { name: 'Ethereum', category: 'Cryptocurrency', price: '1.234,56€', logo: 'ethereum-logo.png' },
    { name: 'Tether', category: 'Cryptocurrency', price: '1.00€', logo: 'tether-logo.png' },
    { name: 'USD Coin', category: 'Cryptocurrency', price: '1.00€', logo: 'usdcoin-logo.png' },
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <div className="contenedor_btn">
          <button className="btn">
            <a>CRYFIT</a>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Otras opciones del menú */}
          </ul>
        </div>

        {/* Botones de selección de criptomonedas */}
        <div className="btn-group">
          <div className="dropdown-menu">
            <button className="dropdown-item">Bitcoin</button>
            <button className="dropdown-item">Ethereum</button>
            <button className="dropdown-item">Tether</button>
            <button className="dropdown-item">USD Coin</button>
          </div>
        </div>

        {/* Integra el componente CartWidget aquí */}
        <CartWidget />
      </nav>

      <div className="card-container">
        {cryptoData.map((crypto, index) => (
          <div className="card" key={index}>
            <div
              className="logo"
              style={{ backgroundImage: `url(${crypto.logo})` }}
            ></div>
            <div className="textBox">
              <p className="text head">{crypto.name}</p>
              <span>{crypto.category}</span>
              <p className="text price">{crypto.price}</p>
              {/* Shopping cart icon */}
              <div className="cart-container">
                <span className="cart-icon">🛒</span>
                <span className="cart-count">5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default NavBar;
