import React from 'react';
import { motion } from 'framer-motion';

function CategoryTabs({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => setActiveCategory(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="category-icon">{category.icon}</span>
          <span className="category-name">{category.name}</span>
        </motion.button>
      ))}
    </div>
  );
}

export default CategoryTabs;