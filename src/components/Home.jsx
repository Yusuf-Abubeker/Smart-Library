import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaSchool, FaQuestionCircle, FaArrowRight } from 'react-icons/fa'; // Import icons from react-icons
import bookImg from "../assets/book1.jfif"
import '../styles/Home.css';

const Home = () => {

  return (
    <div className="home">
      <header className='header'>
        <h1>Welcome to the Digital Smart Library for Kids</h1>
      </header>
      <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="book-list">
          <div className="book-card">
            <img
              src={bookImg}
              alt="Book 1"
              className="book-cover"
            />
            <h3>Adventure in Wonderland</h3>
            <p>Join Alice on her magical journey.</p>
            <Link to="/books/1" className="read-more-link">
              Read More
            </Link>
          </div>
          <div className="book-card">
            <img
              src={bookImg}
              alt="Book 2"
              className="book-cover"
            />
            <h3>The Dinosaur Guide</h3>
            <p>Learn about the fascinating world of dinosaurs.</p>
            <Link to="/books/2" className="read-more-link">
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className="popular-categories">
        <h2>Popular Categories</h2>
        <div className="category-list">
          <Link to="/books?category=Adventure" className="category-button">
          <FaStar />Adventure
          </Link>
          <Link  to="/books?category=Education" className="category-button">
          <FaSchool />Education
          </Link>
          <Link  to="/books?category=Mystery" className="category-button">
          <FaQuestionCircle />Mystery
          </Link>
        </div>
      </section>
      <section className="call-to-action">
        <h2>Get Started</h2>
        <p>Start exploring a world of wonderful stories and educational resources for kids.</p>
        <Link to="/books" className="btn btn-primary">Browse the Library <FaArrowRight /></Link>
      </section>
    </div>
  );
};

export default Home;
