import React, { useState } from "react";
import "../styles/BookDetail.css";

const BookDetail = ({ book, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isBookOpen, setIsBookOpen] = useState(false); // State to track if the book is open for reading

  const handleClose = () => {
    setIsVisible(false);
    setIsBookOpen(false)
    onClose();
  };

  const handleReadBook = () => {
    setIsBookOpen(true);
  };

  if (!isVisible) {
    setIsVisible(true);
    return null; // If isVisible is false, don't render the component
  }
  if (!book) {
    return null;
  }

  // Render the book detail or the book content based on whether it's open for reading
  return (
    <div className="book-detail book-detail-overlay">
      <div className="book-detail-header">
        <h2 className="book-detail-title">{book.title}</h2>
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
      <div className="book-detail-content">
        <div className="book-detail-image">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="book-detail-info">
          {isBookOpen ? (
            <div className="book-detail-content">
              <p>{book.content}</p>
            </div>
          ) : (
            <div>
              <p className="book-detail-category">{book.category}</p>
              <p className="book-detail-description">{book.description}</p>
              <button className="read-button" onClick={handleReadBook}>
                Read
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
