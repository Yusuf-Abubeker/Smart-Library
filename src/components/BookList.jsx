import React, { useState } from "react";
import "../styles/BookList.css";
import BookDetail from "./BookDetail";

const books = [
  {
    id: 1,
    title: "Adventure in Wonderland",
    description: "Join Alice on her magical journey.",
    image: "book1.jpg",
  },
  {
    id: 2,
    title: "The Dinosaur Guide",
    description: "Learn about the fascinating world of dinosaurs.",
    image: "book2.jpg",
  },
  {
    id: 3,
    title: "Pirate Adventures",
    description: "Set sail with Captain Jack on epic pirate adventures.",
    image: "book3.jpg",
  },
  {
    id: 4,
    title: "Space Explorers",
    description:
      "Embark on a journey through the stars and explore the cosmos.",
    image: "book4.jpg",
  },
  {
    id: 5,
    title: "Enchanted Forest",
    description: "Discover the magical creatures of the Enchanted Forest.",
    image: "book5.jpg",
  },
  {
    id: 6,
    title: "Under the Sea",
    description:
      "Dive into the depths of the ocean and meet its mysterious inhabitants.",
    image: "book6.jpg",
  },
  {
    id: 7,
    title: "The Secret Garden",
    description: "Uncover the hidden beauty of a forgotten garden.",
    image: "book7.jpg",
  },
  {
    id: 8,
    title: "Superheroes Unleashed",
    description: "Join the worlds mightiest heroes on their quests.",
    image: "book8.jpg",
  },
  {
    id: 9,
    title: "Magical Creatures",
    description: "Encounter mythical beings from around the world.",
    image: "book9.jpg",
  },
  {
    id: 10,
    title: "Robots of the Future",
    description: "Explore the world of advanced robotics and AI.",
    image: "book10.jpg",
  },
  {
    id: 11,
    title: "Mysteries of the Pyramids",
    description: "Unlock the secrets of ancient Egypt and its pyramids.",
    image: "book11.jpg",
  },
  {
    id: 12,
    title: "Wild Safari",
    description: "Embark on a safari and meet the wild animals of Africa.",
    image: "book12.jpg",
  },
  {
    id: 13,
    title: "Time Travelers",
    description: "Take a journey through time and explore different eras.",
    image: "book13.jpg",
  },
  {
    id: 14,
    title: "Enchanted Kingdom",
    description: "Visit a realm filled with magical creatures and wonders.",
    image: "book14.jpg",
  },
  {
    id: 15,
    title: "The Great Inventors",
    description: "Learn about the inventors who changed the world.",
    image: "book15.jpg",
  },
  {
    id: 16,
    title: "Journey to the Moon",
    description: "Join astronauts on a mission to the moon.",
    image: "book16.jpg",
  },
  {
    id: 17,
    title: "Wonders of the Rainforest",
    description: "Explore the rich biodiversity of the rainforest.",
    image: "book17.jpg",
  },
  {
    id: 18,
    title: "Carnival of Colors",
    description: "Discover the vibrant world of colors and art.",
    image: "book18.jpg",
  },
  {
    id: 19,
    title: "Secrets of the Deep Sea",
    description: "Dive into the depths and uncover deep-sea mysteries.",
    image: "book19.jpg",
  },
  {
    id: 20,
    title: "Fantasy Kingdoms",
    description: "Visit mythical kingdoms with legendary creatures.",
    image: "book20.jpg",
  },
  {
    id: 21,
    title: "Whale Adventure",
    description: "Join a friendly whale on an underwater journey.",
    image: "book21.jpg",
  },
  {
    id: 22,
    title: "Robot Rumble",
    description: "Watch robots battle it out in the ultimate showdown.",
    image: "book22.jpg",
  },
  {
    id: 23,
    title: "The Enchanted Castle",
    description: "Uncover the secrets of a castle hidden in the woods.",
    image: "book23.jpg",
  },
  {
    id: 24,
    title: "Mystery Detectives",
    description:
      "Solve mysteries and puzzles with a group of young detectives.",
    image: "book24.jpg",
  },
  {
    id: 25,
    title: "Dreamy Adventures",
    description: "Embark on imaginative journeys to dreamy lands.",
    image: "book25.jpg",
  },
];

const BookList = () => {
  // Define the state for the selected book
  const [selectedBook, setSelectedBook] = useState(null);

  // Handle book selection
  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };
  const handleCloseBookDetail = () => {
    setSelectedBook(null);
  };
  return (
    <div className="book-list">
      <header className="header">
        <h1 className="library-title">Children's Library</h1>
      </header>
      <div className="book-container">
        {books.map((book) => (
          <div
            key={book.id}
            className="book-card"
            onClick={() => handleBookSelect(book)}
          >
            <img src={book.image} alt={book.title} className="book-cover" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-description">{book.description}</p>
            <button className="read-button">Read</button>
          </div>
        ))}
      </div>
      <BookDetail book={selectedBook} onClose={handleCloseBookDetail} />
    </div>
  );
};

export default BookList;
