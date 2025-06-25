import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../resetStyle.css";
import "../variables.css";

import App from "../App/App.jsx";
import Home from "../pages/home/home.jsx";
import CountryDetail from "../components/country_detail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/country/:name",
    element: <CountryDetail />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
