import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import books from "../data/bookData"; 
import "../styles/BookDetail.css";
import ErrorPage from "./ErrorPage";

const BookDetail = () => {
  const navigate = useNavigate()
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [book, setBook] = useState(null); // Store the selected book

  const { bookId } = useParams();

  useEffect(() => {
 
    const selectedBook = books.find((book) => book.id === parseInt(bookId));
    if (selectedBook) {
      setBook(selectedBook);
    }
  }, [bookId]);

  const handleClose = () => {

    setIsBookOpen(false);
    navigate('/books')
  };

  const handleReadBook = () => {
    setIsBookOpen(true);
  };

  if (!book) {
    return <ErrorPage/>;
  }

  return (
    <div className="book-detail">
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
