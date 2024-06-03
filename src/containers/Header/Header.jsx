import React from 'react'
import "./header.css"
import { FaMoon } from 'react-icons/fa';


const Header = () => {
  return (
    <div className='header-container'>
        <div className="header-details">
            <h1 className="header-text">
                Where in the world?
            </h1>
            <div className="dark-light-mode">
                <p> <FaMoon /> Dark Mode</p>
            </div>
        </div>  
    </div>
  )
}

export default Header