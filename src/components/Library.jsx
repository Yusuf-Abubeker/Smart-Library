import React, { useState } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import books from "../data/bookData";

const Library = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    if (selectedBook && selectedBook.id === book.id) {
      setSelectedBook(null);
    } else {
      setSelectedBook(book);
    }
  };

  const handleCloseBookDetail = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <BookList books={books} onBookSelect={handleBookSelect} />
      <BookDetail book={selectedBook} onClose={handleCloseBookDetail} />
    </div>
  );
};

export default Library;
