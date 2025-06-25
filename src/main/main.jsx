// router.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/home/home.jsx";
import CountryDetail from "../components/country_detail.jsx";

// Workaround: use createRoutesFromElements and pass routes to createBrowserRouter
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<CountryDetail />} />
    </>
  ),
  {
    basename: "/REST-Countries-API", // 👈 Important for GitHub Pages
  }
);

export default router;
