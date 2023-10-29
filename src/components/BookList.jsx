import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/BookList.css";

const BookList = ({ books, onBookSelect }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  // Filter books by the selected category, or display all books if no category is selected
  const filteredBooks = selectedCategory
    ? books.filter((book) => book.category === selectedCategory)
    : books;

  return (
    <div className="book-list">
      <header className="header">
        <h1 className="library-title">Children's Library</h1>
      </header>
   
        {selectedCategory && (
          <h2 className="category-header">{selectedCategory} Books</h2>
        )}
     
      <div className="book-container">
        {filteredBooks.map((book) => (
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
