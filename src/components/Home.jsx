import React from 'react';
import { Link } from 'react-router-dom';
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
            <button to="/books/adventure" className="read-more-link">
              Read More
            </button>
          </div>
          <div className="book-card">
            <img
              src={bookImg}
              alt="Book 2"
              className="book-cover"
            />
            <h3>The Dinosaur Guide</h3>
            <p>Learn about the fascinating world of dinosaurs.</p>
            <button to="/books/dinosaurs" className="read-more-link">
              Read More
            </button>
          </div>
        </div>
      </section>
      <section className="popular-categories">
        <h2>Popular Categories</h2>
        <div className="category-list">
          <button to="/categories/adventure" className="category-button">
            Adventure
          </button>
          <button to="/categories/education" className="category-button">
            Education
          </button>
          <button to="/categories/mystery" className="category-button">
            Mystery
          </button>
        </div>
      </section>
      <section className="call-to-action">
        <h2>Get Started</h2>
        <p>Start exploring a world of wonderful stories and educational resources for kids.</p>
        <Link to="/books" className="btn btn-primary">Browse the Library</Link>
      </section>
    </div>
  );
};

export default Home;
