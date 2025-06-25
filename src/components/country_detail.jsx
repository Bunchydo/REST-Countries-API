import "./country_detail.css";
import "../resetStyle.css";
import "../variables.css";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CountryDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => {
        if (!res.ok) throw new Error("Country not found");
        return res.json();
      })
      .then((data) => setCountryData(data[0]))
      .catch(() => {
        // If error, navigate back to home
        navigate("/");
      });
  }, [name, navigate]);

  if (!countryData) return <div>Loading...</div>;

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
      <div className="country-details-container">
        <div className="button-container">
          <button className="back-button" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>

        <div className="country-details">
          <div className="country_flag">
            <img src={countryData.flags.png} alt={countryData.name.common} />
          </div>

          <div className="country-specifics">
            <div className="country-title">{countryData.name.common}</div>
            <div className="country-actual-details">
              <div className="native-name">
                Native Name:{" "}
                {countryData.name.nativeName
                  ? Object.values(countryData.name.nativeName)[0].common
                  : countryData.name.common}
              </div>
              <div className="population">
                Population: {countryData.population.toLocaleString()}
              </div>
              <div className="region">Region: {countryData.region}</div>
              <div className="sub-region">Sub Region: {countryData.subregion}</div>
              <div className="capital">Capital: {countryData.capital?.[0]}</div>
              <div className="top-level-domain">Top Level Domain: {countryData.tld?.[0]}</div>
              <div className="currencies">
                Currencies:{" "}
                {countryData.currencies
                  ? Object.values(countryData.currencies)
                      .map((currency) => currency.name)
                      .join(", ")
                  : "N/A"}
              </div>
              <div className="languages">
                Languages:{" "}
                {countryData.languages
                  ? Object.values(countryData.languages).join(", ")
                  : "N/A"}
              </div>
            </div>
            <div className="border-countries">
              Border Countries: {countryData.borders?.join(", ") || "None"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
