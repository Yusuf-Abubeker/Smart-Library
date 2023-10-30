import React from 'react';
import '../styles/Navigation.css'
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaInfo, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/"><FaHome/>Home</Link></li>
        <li className="nav-item"><Link to="/books"><FaBook/>Book List</Link></li>
        <li className="nav-item"><Link to="/about"><FaInfo/>About</Link></li>
        <li className="nav-item"><Link to="/contact"><FaEnvelope/>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
