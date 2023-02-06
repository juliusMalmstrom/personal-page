import React from "react";
import ReactDOM from "react-dom/client";
import 'bulma/css/bulma.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Menu from "./components/Menu"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);