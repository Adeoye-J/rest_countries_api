import React from 'react'
import { useState } from 'react';
import "./searchFilter.css"
import { MdArrowDropDown } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    // <div className='search-filter-container'>
    //     <input type="text" name="country" id="country" placeholder='Search for a country...' /> <FaSearch color='#fff' className='search-icon' />
    //     <div className="region-dropdown">
    //         <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>Filter by Region <MdArrowDropDown size={28} /></button>
    //         {isOpen && (
    //             <ul className="dropdown-list">
    //                 <li><a href="/region/Africa" target="_blank">Africa</a></li>
    //                 <li><a href="/region/America" target="_blank">America</a></li>
    //                 <li><a href="/region/Asia" target="_blank">Asia</a></li>
    //                 <li><a href="/region/Europe" target="_blank">Europe</a></li>
    //                 <li><a href="/region/Oceania" target="_blank">Oceania</a></li>
    //             </ul>
    //         )}
    //     </div>
    // </div>

    <div className="search-filter-container">
        <input
          type="text"
          // value={searchItem}
          // onChange={handleInputChange}
          placeholder="Search for a country..."
        />

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
                <Link to={"/region/Africa"} onClick={() => setIsOpen(!isOpen)}>Africa</Link>
              </li>
              <li>
                <Link to={"/region/America"} onClick={() => setIsOpen(!isOpen)}>America</Link>
              </li>
              <li>
                <Link to={"/region/Asia"} onClick={() => setIsOpen(!isOpen)}>Asia</Link>
              </li>
              <li>
                <Link to={"/region/Europe"} onClick={() => setIsOpen(!isOpen)}>Europe</Link>
              </li>
              <li>
                <Link to={"/region/Oceania"} onClick={() => setIsOpen(!isOpen)}>Oceania</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
  )
}

export default SearchFilter