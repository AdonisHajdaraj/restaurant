import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaFire, FaLeaf } from 'react-icons/fa';

function MenuItem({ item, onAddToCart }) {
  return (
    <motion.div 
      className="menu-item"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 20px 30px rgba(0,0,0,0.15)'
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="item-image">
        <img src={item.image} alt={item.name} />
        {item.popular && (
          <span className="popular-badge">🔥 Popular</span>
        )}
        <div className="item-icons">
          {item.spicy && <span className="spicy-icon" title="Pikante">🌶️</span>}
          {item.vegetarian && <FaLeaf className="veg-icon" title="Vegetarian" />}
        </div>
      </div>
      
      <div className="item-content">
        <div className="item-header">
          <h3>{item.name}</h3>
          <span className="item-price">€{item.price.toFixed(2)}</span>
        </div>
        
        <p className="item-description">{item.description}</p>
        
        <motion.button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(item)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaShoppingCart /> Shto në Porosi
        </motion.button>
      </div>
    </motion.div>
  );
}

export default MenuItem;