// router.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../pages/home/home.jsx";
import CountryDetail from "../components/country_detail.jsx";

// Create a custom history with basename
const customHistory = createBrowserHistory({ basename: "/REST-Countries-API" });

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<CountryDetail />} />
    </>
  ),
  {
    // 👇 Plug in custom history
    history: customHistory,
  }
);

export default router;
