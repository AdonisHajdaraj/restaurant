import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaPhone, FaClock } from 'react-icons/fa';

function Header({ cartItemCount, onCartClick }) {
  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="header-container">
        <div className="logo">
          <h1>🍝 Gourmet Italiano</h1>
          <p className="tagline">Shije Autentike Italiane</p>
        </div>
        
        <div className="header-info">
          <div className="info-item">
            <FaPhone className="info-icon" />
            <span>+355 69 123 4567</span>
          </div>
          <div className="info-item">
            <FaClock className="info-icon" />
            <span>09:00 - 23:00</span>
          </div>
        </div>
        
        <motion.button 
          className="cart-button"
          onClick={onCartClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaShoppingCart />
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </motion.button>
      </div>
    </motion.header>
  );
}

export default Header;