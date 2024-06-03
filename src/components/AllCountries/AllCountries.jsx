import React from "react";
import { useState, useEffect } from "react";
import "./allCountries.css";
import { MdArrowDropDown } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

// import SearchFilter from "../../containers/SearchFilter/SearchFilter";
import Header from "../../containers/Header/Header";
import { Link } from "react-router-dom";

const AllCountries = ({ getUrl }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchCountriesData = async () => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const countryData = await response.json();
      setCountries(countryData);
      setLoading(false);
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  };
  console.log(countries)

  useEffect(() => {
    fetchCountriesData();
  }, []);

  if (loading) {
    return (
      <div style={{ color: "#fff", fontSize: "40px", padding: "2rem 4rem" }}>
        Loading...
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div style={{ color: "#f00", fontSize: "40px", padding: "2rem 4rem" }}>
        An Error Occured - {errorMessage}
      </div>
    );
  }

  // const handleInputChange = (e) => {
  //   const inputValue = e.target.value;
  //   setSearchItem(inputValue);

  //   const filterCountries = countries.filter((country) => 
  //     country.name.official.toLowerCase().includes(searchItem.toLowerCase())
  //     // country.name.official.toLowerCase() === searchItem.toLowerCase()
  //   )

  //   setFilteredCountries(filterCountries)
  // }

  return (
    <>
      <Header />
      {/* <SearchFilter /> */}
      <div className="search-filter-container">
        <input
          type="text"
          // value={searchItem}
          // onChange={handleInputChange}
          placeholder="Search for a country..."
        />{" "}
        <FaSearch color="#fff" className="search-icon" />
        <div className="region-dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            Filter by Region <MdArrowDropDown size={28} />
          </button>
          {isOpen && (
            <ul className="dropdown-list">
              <li>
                <a href="/region/Africa">
                  Africa
                </a>
              </li>
              <li>
                <a href="/region/America">
                  America
                </a>
              </li>
              <li>
                <a href="/region/Asia">
                  Asia
                </a>
              </li>
              <li>
                <a href="/region/Europe">
                  Europe
                </a>
              </li>
              <li>
                <a href="/region/Oceania">
                  Oceania
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="all-countries-container">
        {countries.map((country) => (
          // <Link className="link-countries" to={`/countries/${country.name.official}`}>
            <div className="country-container">
              <img src={country.flags.png} alt="country" />
              <div className="country-details">
                <h1>{country.name.official}</h1>
                <div className="other-country-details">
                  <p>
                    Population: <span>{country.population}</span>
                  </p>
                  <p>
                    Region: <span>{country.region}</span>
                  </p>
                  <p>
                    Capital: <span>{country.capital}</span>
                  </p>
                </div>
              </div>
            </div>
          // </Link>
        ))}
      </div>
    </>
  );
};

export default AllCountries;
