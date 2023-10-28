import React from 'react';
import '../styles/Navigation.css'
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><Link to="/books">Book List</Link></li>
        <li className="nav-item"><a href="/about">About</a></li>
        <li className="nav-item"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
