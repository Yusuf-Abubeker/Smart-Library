import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import BookDetail from "./components/BookDetail";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:bookId" element={<BookDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
