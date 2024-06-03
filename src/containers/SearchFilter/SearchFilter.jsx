import React from 'react'
import { useState } from 'react';
import "./searchFilter.css"
import { MdArrowDropDown } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

const SearchFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div className='search-filter-container'>
        <input type="text" name="country" id="country" placeholder='Search for a country...' /> <FaSearch color='#fff' className='search-icon' />
        <div className="region-dropdown">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>Filter by Region <MdArrowDropDown size={28} /></button>
            {isOpen && (
                <ul className="dropdown-list">
                    <li><a href="/region/Africa" target="_blank">Africa</a></li>
                    <li><a href="/region/America" target="_blank">America</a></li>
                    <li><a href="/region/Asia" target="_blank">Asia</a></li>
                    <li><a href="/region/Europe" target="_blank">Europe</a></li>
                    <li><a href="/region/Oceania" target="_blank">Oceania</a></li>
                </ul>
            )}
        </div>
    </div>
  )
}

export default SearchFilter