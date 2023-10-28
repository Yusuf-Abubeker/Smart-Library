import React from "react";
import "../styles/ErrorPage.css";
import img from "../assets/unicorn.png"

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">Oops! Page Not Found</h1>
      <p className="error-message">
        Looks like you've entered a magical land that doesn't exist.
      </p>
      <img className="error-image" src={img} alt="Unicorn" />
    </div>
  );
};

export default ErrorPage;
