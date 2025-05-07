import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaSchool, FaQuestionCircle, FaArrowRight } from 'react-icons/fa';
import bookImg from "../assets/book1.jfif";
import styles from '../styles/Home.module.css';

const Home = () => {

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Welcome to the Digital Smart Library for Kids</h1>
      </header>
      <section className={styles.featured_books}>
        <h2>Featured Books</h2>
        <div className={styles.book_list}>
          <div className={styles.book_card}>
            <img
              src={bookImg}
              alt="Book 1"
              className={styles.book_cover}
            />
            <h3>Adventure in Wonderland</h3>
            <p>Join Alice on her magical journey.</p>
            <Link to="/books/1" className={styles.read_more_link}>
              Read More
            </Link>
          </div>
          <div className={styles.book_card}>
            <img
              src={bookImg}
              alt="Book 2"
              className={styles.book_cover}
            />
            <h3>The Dinosaur Guide</h3>
            <p>Learn about the fascinating world of dinosaurs.</p>
            <Link to="/books/2" className={styles.read_more_link}>
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.popular_categories}>
        <h2>Popular Categories</h2>
        <div className={styles.category_list}>
          <Link to="/books?category=Adventure" className={styles.category_button}>
            <FaStar />Adventure
          </Link>
          <Link to="/books?category=Education" className={styles.category_button}>
            <FaSchool />Education
          </Link>
          <Link to="/books?category=Mystery" className={styles.category_button}>
            <FaQuestionCircle />Mystery
          </Link>
        </div>
      </section>
      <section className={styles.call_to_action}>
        <h2>Get Started</h2>
        <p>Start exploring a world of wonderful stories and educational resources for kids.</p>
        <Link to="/books" className={styles.btn}>Browse the Library <FaArrowRight /></Link>
      </section>
    </div>
  );
};

export default Home;
