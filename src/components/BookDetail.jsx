import React, { useState } from "react";
import "../styles/BookDetail.css";

const BookDetail = ({ book, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) {
    return null; // If isVisible is false, don't render the component
  }
  if (!book) {
    return null;
  }
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
          <p className="book-detail-description">{book.description}</p>
          <button className="read-button">Read</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
