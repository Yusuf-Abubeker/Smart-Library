import React from "react";
import "../styles/BookList.css";

const BookList = ({ books, onBookSelect }) => {
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
            onClick={() => onBookSelect(book)}
          >
            <img src={book.image} alt={book.title} className="book-cover" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-description">{book.description}</p>
            <button className="read-button">Read</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
