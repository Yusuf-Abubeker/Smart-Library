import { createBrowserRouter } from "react-router-dom";
import BookList from "./components/BookList";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import BookDetail from "./components/BookDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/childLayout";

const router = createBrowserRouter([
  {
    path: "/child",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "books", element: <BookList /> },
      { path: "books/:bookId", element: <BookDetail /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
