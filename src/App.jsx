import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<BookList/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
