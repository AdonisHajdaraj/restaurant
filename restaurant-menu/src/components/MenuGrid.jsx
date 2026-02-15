import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';

function MenuGrid({ items, onAddToCart }) {
  if (items.length === 0) {
    return (
      <motion.div 
        className="no-items"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p>😕 Nuk u gjet asnjë artikull</p>
        <p>Provo të kërkosh për diçka tjetër</p>
      </motion.div>
    );
  }

  return (
    <div className="menu-grid">
      <AnimatePresence>
        {items.map((item) => (
          <MenuItem 
            key={item.id} 
            item={item} 
            onAddToCart={onAddToCart}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default MenuGrid;