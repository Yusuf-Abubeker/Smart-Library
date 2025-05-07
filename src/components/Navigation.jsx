import React from 'react';
import styles from '../styles/Navigation.module.css'
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaInfo, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}><Link to="/"><FaHome/>Home</Link></li>
        <li className={styles.nav_item}><Link to="/books"><FaBook/>Book List</Link></li>
        <li className={styles.nav_item}><Link to="/about"><FaInfo/>About</Link></li>
        <li className={styles.nav_item}><Link to="/contact"><FaEnvelope/>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
