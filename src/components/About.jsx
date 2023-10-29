import React from "react";
import "../styles/About.css";
import illustration from "../assets/kids-reading.jfif";

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Our Magical Library</h1>
      <img src={illustration} alt="Kids Reading" className="about-illustration" />
      <p className="about-description">
        Welcome to our enchanting Children's Library, a place where your child's
        imagination knows no bounds. Our library is filled with a world of
        colorful stories, exciting adventures, and endless learning
        opportunities.
      </p>
      <p className="about-fun-facts">
        Fun Facts:
        <ul>
          <li>We have a magical collection of over 1000 books.</li>
          <li>Join our reading quests and embark on epic journeys.</li>
          <li>Discover a new enchanting story every week.</li>
        </ul>
      </p>
    </div>
  );
};

export default About;
