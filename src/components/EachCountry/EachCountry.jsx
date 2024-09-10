import React from 'react'
import "./eachCountry.css"

const EachCountry = ({flag, name, population, region, capital}) => {
  return (
    <div className="country-container">
      <img src={flag} alt="country" />

      <div className="country-details">
        <h1>{name}</h1>

        <div className="other-country-details">
          <p>
            Population: <span>{population}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>

      </div>

    </div>
  )
}

export default EachCountry