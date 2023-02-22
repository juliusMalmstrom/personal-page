import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";;
import Menu from "./components/Menu";
import ErrorPage from "./components/error-page";
import "./styles/index.scss";
import About from "./components/About";
import Projects from "./components/Projects";
import Searchbar from "./components/Searchbar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Projects",
        element: <Projects />
      },
      {
        path: "/Searchbar",
        element: <Searchbar />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);