import React from 'react';
import '../styles/Navigation.css'
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/books">Book List</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
