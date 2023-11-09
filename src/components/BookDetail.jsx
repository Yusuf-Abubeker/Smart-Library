import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import books from "../data/bookData";
import styles from "../styles/BookDetail.module.css";
import ErrorPage from "./ErrorPage";

const BookDetail = () => {
  const navigate = useNavigate();
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
    navigate('/books');
  };

  const handleReadBook = () => {
    setIsBookOpen(true);
  };

  if (!book) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.book_detail}>
      <div className={styles.book_detail_header}>
        <h2 className={styles.book_detail_title}>{book.title}</h2>
        <button className={styles.close_button} onClick={handleClose}>
          Close
        </button>
      </div>
      <div className={styles.book_detail_content}>
        <div className={styles.book_detail_image}>
          <img src={book.image} alt={book.title} />
        </div>
        <div className={styles.book_detail_info}>
          {isBookOpen ? (
            <div className={styles.book_detail_content}>
              <p>{book.content}</p>
            </div>
          ) : (
            <div>
              <p className={styles.book_detail_category}>{book.category}</p>
              <p className={styles.book_detail_description}>{book.description}</p>
              <button className={styles.read_button} onClick={handleReadBook}>
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
