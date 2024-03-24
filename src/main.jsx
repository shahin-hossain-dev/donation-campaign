import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Donation from "./components/Donation/Donation.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import DonationDetails from "./components/DonationDetails/DonationDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/donation", element: <Donation /> },
      { path: "/statistics", element: <Statistics /> },
      {
        path: "/donation-details/:id",
        element: <DonationDetails />,
        loader: () => fetch("../public/donation.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
