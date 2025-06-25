import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../resetStyle.css";
import "../variables.css";

import App from "../App/App.jsx";
import Home from "../pages/home/home.jsx";
import CountryDetail from "../components/country_detail.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/REST-Countries-API">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<CountryDetail />} />
    </Routes>
  </BrowserRouter>
);
