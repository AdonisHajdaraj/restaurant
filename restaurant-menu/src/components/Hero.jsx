import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mirësevini në Gourmet Italiano
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Shijoni më të mirat nga kuzhina italiane
        </motion.p>
        <motion.div
          className="hero-features"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="feature">
            <span className="feature-icon">🥩</span>
            <span>Përbërës Freskë</span>
          </div>
          <div className="feature">
            <span className="feature-icon">👨‍🍳</span>
            <span>Shef Italian</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🏆</span>
            <span>Cilësi e Lartë</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;