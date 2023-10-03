import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page from "./Page";
import FinderPage from "./FinderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/finder",
    element: <FinderPage />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
