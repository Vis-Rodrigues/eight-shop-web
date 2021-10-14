import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProductNavigation.css';

const ProductNavigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/vegano">Vegano</NavLink></li>
        <li><NavLink to="/sem-gluten">Sem Glutén</NavLink></li>
        <li><NavLink to="/vegetariano">Vegetariano</NavLink></li>
      </ul>
    </nav>
  );
}

export default ProductNavigation;
