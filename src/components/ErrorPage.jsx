import React from "react";
import "../styles/ErrorPage.css";
import img from "../assets/unicorn.png"
import { useParams } from "react-router-dom";
import books from "../data/bookData";

const ErrorPage = () => {
  const{bookId} = useParams();
  let msg;
  bookId >= books.length ? msg = 'Oops! The book is not in store ': msg ='Oops! Page Not Found'
  return (
    <div className="error-page">
      <h1 className="error-title">{msg}</h1>
      <p className="error-message">
        Looks like you've entered a magical land that doesn't exist.
      </p>
      <img className="error-image" src={img} alt="Unicorn" />
    </div>
  );
};

export default ErrorPage;
