import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import MenuGrid from './components/MenuGrid';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { menuItems, menuCategories } from './data/menuData';
import './styles/App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [filteredItems, setFilteredItems] = useState(menuItems);

  // Filter items based on category and search
  useEffect(() => {
    let filtered = menuItems;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredItems(filtered);
  }, [activeCategory, searchTerm]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    
    // Show cart briefly when adding item
    setShowCart(true);
    setTimeout(() => setShowCart(false), 2000);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="app">
      <Header 
        cartItemCount={getTotalItems()} 
        onCartClick={() => setShowCart(!showCart)}
      />
      
      <Hero />
      
      <main className="main-content">
        <div className="container">
          <div className="menu-header">
            <h2>📖 Mena Jonë</h2>
            <p>Zbuloni shijet më të mira italiane të përgatitura me dashuri</p>
          </div>
          
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          
          <CategoryTabs 
            categories={menuCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MenuGrid 
                items={filteredItems} 
                onAddToCart={addToCart}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      
      <AnimatePresence>
        {showCart && (
          <Cart
            items={cartItems}
            onClose={() => setShowCart(false)}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            totalPrice={getTotalPrice()}
          />
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;