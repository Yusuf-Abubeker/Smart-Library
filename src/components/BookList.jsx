import React from "react";
import { Link, useLocation } from "react-router-dom";
import books from "../data/bookData";
import styles from "../styles/BookList.module.css";

const BookList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  // Filter books by the selected category, or display all books if no category is selected
  const filteredBooks = selectedCategory
    ? books.filter((book) => book.category === selectedCategory)
    : books;

  return (
    <div className={styles.book_list}>
      <header className={styles.header}>
        <h1 className={styles.library_title}>Children's Library</h1>
      </header>
   
        {selectedCategory && (
          <h2 className={styles.category_header}>{selectedCategory} Books</h2>
        )}
     
      <div className={styles.book_container}>
        {filteredBooks.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id}>
            <div className={styles.book_card}>
              <img src={book.image} alt={book.title} className={styles.book_cover} />
              <h3 className={styles.book_title}>{book.title}</h3>
              <p className={styles.book_description}>{book.description}</p>
              <button className={styles.read_button}>Read</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
