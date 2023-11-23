import React from "react"

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital = {country.capital[0]}</p>
      <p>Area = {country.area}</p>
      <p>Languages</p>
      {Object.entries(country.languages).map(([key, value]) => (
        <li key={key}>{value}</li>
      ))}
      <img src={country.flags.png} alt={country.name.common} width="50%" />
    </div>
  )
}

export default CountryDetails
