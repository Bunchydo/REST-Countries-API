import { useState, useEffect } from "react";
import Country from "../../components/country";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [regionFilter, setRegionFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // 🆕 search input
  const [countries, setCountries] = useState([]);

  // Handle region dropdown change
  const handleRegionChange = (e) => setRegionFilter(e.target.value);

  // Handle search input typing
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,region,flags,population,capital"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  // Combine both filters: region + search
  const filteredCountries = countries.filter((country) => {
    const matchesRegion =
      regionFilter === "" || country.region === regionFilter;

    const matchesSearch =
      searchQuery === "" ||
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  return (
    <>
      <div className="nav">
        <span className="nav-title">Where in the world?</span>
        <span
          className="theme"
          onClick={() => document.body.classList.toggle("light-mode")}
        >
          <span className="-theme-icon">☾</span> Dark Mode
        </span>
      </div>

      <div className="main">
        <div className="search-filter">
          {/*Search*/}
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search"
              placeholder="Search for a country..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/*Filter*/}
          <div className="select-wrapper">
            <select
              className="filter"
              value={regionFilter}
              onChange={handleRegionChange}
            >
              <option value="" disabled>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>

        <div className="countries">
          {filteredCountries.map((country) => (
            <Link
              to={`/country/${country.name.common}`}
              key={country.name.common}
              style={{ textDecoration: "none", color: "inherit" }} // optional styling
            >
              <Country data={country} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
