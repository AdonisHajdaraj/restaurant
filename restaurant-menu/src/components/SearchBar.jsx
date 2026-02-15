import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Kërko për ushqime ose pije..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button 
          className="clear-search"
          onClick={() => setSearchTerm('')}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;