import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from "./Navigation";
import Root from "./Root";

import TaskApp from "./pages/task/index.jsx";
import ThemeApp from "./pages/theme_toggle/index.jsx";
import FetchData from "./pages/fetchdada/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/task",
    element: <TaskApp />,
  },
  {
    path: "/theme_toggle",
    element: <ThemeApp />,
  },
  {
    path: "/fetch",
    element: <FetchData />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <div
    style={{
      display: "flex",
      margin: "0",
      padding: "0",
      width: "100%",
      height: "100%",
    }}
  >
    <Navigation />
    <RouterProvider router={router} />
  </div>
);
