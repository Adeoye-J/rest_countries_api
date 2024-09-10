import React from "react";
import { useState, useEffect } from "react";
import "./allCountries.css";
import { MdArrowDropDown } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import EachCountry from "../EachCountry/EachCountry";
import SearchFilter from "../../containers/SearchFilter/SearchFilter";
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

  useEffect(() => {
    fetchCountriesData();
  }, [getUrl]);

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
      <SearchFilter />
      {loading ? (
        <div style={{ color: "#fff", fontSize: "40px", padding: "2rem 4rem" }}>
          Loading...
        </div>
      ):
      (
        <div className="all-countries-container">
          {countries.map((country, index) => (
            <Link className="link-countries" to={`/countries/${country.name.official}`} style={{textDecoration: "none"}}>
              <EachCountry flag={country.flags.png} name={country.name.official} population={country.population} region={country.region} capital={country.capital} key={index} />
            </Link>
          ))}
        </div>
      )
    
    }
      {errorMessage && (
        <div style={{ color: "#f00", fontSize: "40px", padding: "2rem 4rem" }}>
          An Error Occured - {errorMessage}
        </div>
      )}
      
    </>
  );
};

export default AllCountries;
